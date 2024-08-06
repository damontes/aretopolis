import Button from '@components/Dynamic/Button'
import ProgressBar from '@components/Dynamic/ProgressBar'
import Radio from '@components/Dynamic/Radio'
import RadioGroup from '@components/Dynamic/RadioGroup'
import LeadershipResults, {
  type LeadershipResultsItems
} from '@components/Results/LeadershipTest'
import { useEffect, useState } from 'react'
import { TestType } from 'src/constants'
import useQuestions from 'src/hooks/useQuestions'

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
  const [results, setResults] = useState<LeadershipResultsItems | null>(null)

  const handleFetchResults = async () => {
    const response = await fetch('/api/results/test_liderazgo', {
      method: 'POST',
      body: JSON.stringify({ answers })
    })

    if (!response.ok) {
      console.error('Error submitting answers', response.statusText)
      return
    }

    const data = await response.json()
    setResults(data)
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

  if (results) {
    return <LeadershipResults results={results} />
  }

  return (
    <div className='w-full flex flex-col gap-3'>
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
