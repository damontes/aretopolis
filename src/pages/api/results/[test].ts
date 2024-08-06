import type { APIRoute } from 'astro'
import { TestType } from 'src/constants'
import type { Answer } from 'src/hooks/useQuestions'
import getLeadershipResults from 'src/lib/getLeadershipResults'

export const POST: APIRoute<{}, { test: TestType }> = async ({
  params,
  request
}) => {
  const { test } = params
  const { answers } = (await request.json()) as { answers: Answer[] }

  const result = getLeadershipResults(answers, test)

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
