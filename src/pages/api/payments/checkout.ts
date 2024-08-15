import type { APIRoute } from 'astro'
import Stripe from 'stripe'

const stripeSecretKey = import.meta.env.STRIPE_SECRET_KEY

const stripe = new Stripe(stripeSecretKey)

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const values = Object.fromEntries(data.entries()) as Record<string, string>

  const url = new URL(request.url)
  const { email, name, callback_path } = values

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1Mr8azK595NprVkr7vlGQz04',
          quantity: 1
        }
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        customer_name: name
      },
      allow_promotion_codes: true,
      success_url: `${url.origin}${callback_path}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url.origin}${callback_path}?canceled=true`
    })

    if (!session.url) {
      throw new Error('No session URL')
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: error.statusCode || 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
