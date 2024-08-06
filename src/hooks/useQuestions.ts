import { getLocalStorage, saveLocalStorage } from '@helpers/localStorage'
import { useEffect, useMemo, useRef, useState } from 'react'
import { QUESTIONS, type TestType } from 'src/constants'

export interface Answer {
  id: number
  value: string
}

interface Props {
  key: TestType
}

const useQuestions = ({ key }: Props) => {
  const initialQuestions = QUESTIONS[key]

  const [answers, setAnswers] = useState<Answer[]>([])
  const [count, setCount] = useState<number>(1)
  const [nextQuestion, setNextQuestion] =
    useState<(typeof initialQuestions)[0]>()

  const questions: (typeof initialQuestions)[0][] = useMemo(() => [], [])
  const total = initialQuestions.length
  const answer = answers[count - 1]

  const question = answer
    ? initialQuestions?.find((q) => q.id === answer.id)
    : nextQuestion

  const savedLastQuestionId = getLocalStorage(`${key}:lastQuestionId`)
  const lastQuestionId = useRef<number | null>(savedLastQuestionId)

  const getQuestion = () => {
    if (!questions.length) {
      return null
    }

    if (lastQuestionId.current)
      return questions.find(
        (question) => question.id === lastQuestionId.current
      )

    const randomNumber = Math.floor(Math.random() * questions.length)

    const question = questions[randomNumber]
    lastQuestionId.current = question.id

    return question
  }

  const initialLoad = () => {
    const savedAnswers: Answer[] = getLocalStorage(`${key}:answers`)
    const savedAnswerIds = savedAnswers?.map((answer) => answer.id) ?? []

    initialQuestions
      .filter((question) => !savedAnswerIds.includes(question.id))
      .forEach((question) => {
        questions.push(question)
      })

    if (savedAnswers?.length) {
      setAnswers(savedAnswers)
      setCount(
        !questions.length ? savedAnswers.length : savedAnswers.length + 1
      )
    }

    const newQuestion = getQuestion()

    if (!newQuestion) return

    setNextQuestion(newQuestion)
  }

  const saveNextQuestion = () => {
    const questionIndex = questions.findIndex(
      (question) => question.id === lastQuestionId.current
    )
    questions.splice(questionIndex, 1)

    lastQuestionId.current = null

    const nextQuestion = getQuestion()
    if (!nextQuestion) return

    setNextQuestion(nextQuestion)
  }

  const saveAnswer = (answer: string) => {
    if (!question) return

    const newAnswer = {
      id: question.id,
      value: answer
    }

    const existingAnswerIndex = answers.findIndex((a) => a.id === newAnswer.id)
    const newAnswers = structuredClone(answers)

    if (existingAnswerIndex !== -1) {
      newAnswers[existingAnswerIndex] = newAnswer
    } else {
      saveNextQuestion()
      newAnswers.push(newAnswer)
    }

    setAnswers(newAnswers)
    saveLocalStorage(`${key}:answers`, newAnswers)
  }

  const handleNextQuestion = () => {
    if (count === total) return

    if (!answer) {
      alert('Por favor selecciona una respuesta')
      return
    }

    setCount((prev) => Math.min(prev + 1, total))
  }

  const handlePrevQuestion = () => {
    setCount((prev) => Math.max(1, prev - 1))
  }

  useEffect(() => {
    initialLoad()
  }, [])

  useEffect(() => {
    saveLocalStorage(`${key}:lastQuestionId`, lastQuestionId.current)
  }, [nextQuestion])

  return {
    total,
    count,
    answer,
    answers,
    question,
    handleNextQuestion,
    handlePrevQuestion,
    saveAnswer
  }
}

export default useQuestions
