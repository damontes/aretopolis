import { groupBy } from '@helpers/utils'
import { QUESTIONS, TestType } from 'src/constants'
import type { Answer } from 'src/hooks/useQuestions'

import answersLiderazgo from 'src/static/answers/liderazgo.json'
import recommendationsLiderazgo from 'src/static/recommendations/liderazgo.json'

const EXPECTED_ANSWERS: Record<TestType, { id: number; answer: string }[]> = {
  [TestType.LIDERAZGO]: answersLiderazgo,
  [TestType.CARACTEROGRAMA]: []
}

function getLeadershipResults(
  answers: Answer[],
  test: TestType,
  partial = true
) {
  const totalExpectedAnswers = EXPECTED_ANSWERS[test]
  const totalQuestions = QUESTIONS[test]

  if (partial) {
    return totalQuestions.reduce((acc, question) => {
      const answer = answers.find((answer) => answer.id === question.id)

      if (!answer) {
        throw new Error('Answer not found')
      }

      const area = Math.floor((question.id - 1) / 10) + 1

      const recommendationForAnswer = recommendationsLiderazgo.questions.find(
        (recommendedQuestion) => recommendedQuestion.id === answer.id
      )

      if (!recommendationForAnswer) {
        throw new Error('Recommendation not found')
      }

      if (recommendationForAnswer.answer !== answer.value) {
        acc[area] = (acc[area] ?? 0) + 1
      }

      return acc
    }, {} as Record<number, number>)
  }

  const answersBySection = groupBy(totalQuestions, (item) => item.section)

  return Object.entries(answersBySection).map(([section, questions]) => {
    const expectedAnswers = totalExpectedAnswers.filter(
      (answer) => questions.findIndex((q) => q.id === answer.id) !== -1
    )
    const points = expectedAnswers.reduce((acc, expectedAnswer) => {
      const answer = answers.find((a) => a.id === expectedAnswer.id)

      if (expectedAnswer?.answer === answer?.value) {
        return acc + 1
      }
      return acc
    }, 0)

    const recommendationRange =
      recommendationsLiderazgo.sections[section as '1' | '2' | '3' | '4']

    const percentage = Math.round((points / questions.length) * 100)
    const range = Object.keys(recommendationRange).find((range) => {
      const [low, high] = range.split('_').map(Number)
      return percentage >= low && percentage <= high
    })

    return {
      section,
      percentage,
      recommendations:
        recommendationRange[range as keyof typeof recommendationRange],
      recommendationsByArea: questions.reduce((acc, question) => {
        const answer = answers.find((answer) => answer.id === question.id)

        if (!answer) {
          throw new Error('Answer not found')
        }

        const area = Math.floor((question.id - 1) / 10) + 1

        const recommendationForAnswer = recommendationsLiderazgo.questions.find(
          (recommendedQuestion) => recommendedQuestion.id === answer.id
        )

        if (!recommendationForAnswer) {
          throw new Error('Recommendation not found')
        }

        if (recommendationForAnswer.answer === answer.value) {
          if (!acc[area]) {
            acc[area] = []
          }

          acc[area].push(recommendationForAnswer.title)
        }

        return acc
      }, {} as Record<number, string[]>)
    }
  })
}

export default getLeadershipResults
