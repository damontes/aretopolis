import Button from '@components/Dynamic/Button'
import Dialog from '@components/Dynamic/Dialog'
import ProgressBar from '@components/Dynamic/ProgressBar'
import Radio from '@components/Dynamic/Radio'
import RadioGroup from '@components/Dynamic/RadioGroup'
import SendResultsForm from '@components/Dynamic/SendResultsForm'
import LeadershipResults, {
  type LeadershipResultsItems
} from '@components/Results/LeadershipTest'
import { useEffect, useState } from 'react'
import { DIALOGS, TestType } from 'src/constants'
import useQuestions from 'src/hooks/useQuestions'

interface GetResultsResponse {
  results: LeadershipResultsItems
  isPaid: boolean
  name: string
  email: string
}

const QUESTION_OPTIONS = {
  yes: 'Sí',
  no: 'No'
} as const

const LeadershipTest = () => {
  const {
    total,
    count,
    answer,
    answers,
    saveAnswer,
    question,
    handleNextQuestion,
    handlePrevQuestion
  } = useQuestions({ key: TestType.LIDERAZGO })
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState<GetResultsResponse | null>(null)
  const { results, isPaid, email = '' } = data ?? {}

  const handleFetchResults = async () => {
    setLoading(true)

    const response = await fetch('/api/results/test_liderazgo', {
      method: 'POST',
      body: JSON.stringify({ answers })
    })

    if (!response.ok) {
      console.error('Error submitting answers', response.statusText)
      return
    }

    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  const handleSubmit = async () => {
    if (count === total) {
      await handleFetchResults()
      return
    }
    handleNextQuestion()
  }

  useEffect(() => {
    if (answers.length && answers.length === total && !results) {
      handleFetchResults()
    }
  }, [answers])

  if (loading) {
    return (
      <div className='animate-pulse flex space-x-4 mt-10'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-10 bg-gray-400/50 rounded-md'></div>
          <div className='h-6 bg-gray-400/50 rounded-md max-w-[80%] mt-10'></div>
          <div className='h-6 bg-gray-400/50 rounded-md'></div>
        </div>
      </div>
    )
  }

  if (results) {
    return (
      <>
        <LeadershipResults results={results} isPaid={isPaid} />
        <Dialog id={DIALOGS.sendResultsForm}>
          <SendResultsForm initialValues={{ email }} />
        </Dialog>
      </>
    )
  }

  return (
    <div className='w-full flex flex-col gap-3 mx-auto'>
      <ProgressBar question={count} totalQuestions={total} />
      <h1 className='text-lg font-bold mt-8'>{question?.label}</h1>
      <RadioGroup
        value={answer?.value ?? ''}
        onChange={(value) => saveAnswer(value)}
        className='flex flex-col gap-3 mt-4'
      >
        <Radio label='Si' value={QUESTION_OPTIONS.yes} />
        <Radio label='No' value={QUESTION_OPTIONS.no} />
      </RadioGroup>
      <footer className='flex items-center justify-end gap-x-2 self-end mt-4'>
        <Button variant='secondary' onClick={handlePrevQuestion}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Next</Button>
      </footer>
    </div>
  )
}

export default LeadershipTest
