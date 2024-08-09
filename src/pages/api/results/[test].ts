import type { APIRoute } from 'astro'
import { TestType } from 'src/constants'
import type { Answer } from 'src/hooks/useQuestions'
import getLeadershipResults from 'src/lib/getLeadershipResults'
import Stripe from 'stripe'

const stripeSecretKey = import.meta.env.STRIPE_SECRET_KEY
const stripe = new Stripe(stripeSecretKey)

export const POST: APIRoute<{}, { test: TestType }> = async ({
  params,
  request
}) => {
  const { test } = params
  const { answers } = (await request.json()) as { answers: Answer[] }
  const cookieHeader = request.headers.get('cookie') ?? ''
  const cookies = new URLSearchParams(cookieHeader.replace(/; /g, '&'))

  const saved_session_id = cookies.get('session_id') ?? ''

  const session = await getStripeSession(saved_session_id)
  const isPaid = Boolean(session?.payment_status === 'paid')

  const results = getLeadershipResults(answers, test, !isPaid)

  return new Response(
    JSON.stringify({
      results,
      isPaid,
      name: session?.customer_details?.name ?? '',
      email: session?.customer_details?.email ?? ''
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

async function getStripeSession(session_id: string) {
  if (!session_id) return null

  const session = await stripe.checkout.sessions.retrieve(session_id)
  return session
}
