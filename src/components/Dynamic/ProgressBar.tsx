interface ProgressBarProps {
  question: number
  totalQuestions: number
}

const ProgressBar = ({ question, totalQuestions }: ProgressBarProps) => {
  const percentage = (question / totalQuestions) * 100

  return (
    <div>
      <h4 className='sr-only'>Status</h4>
      <p className='text-sm font-medium text-gray-900'>
        Question {question} / {totalQuestions}
      </p>
      <div aria-hidden='true' className='mt-4'>
        <div className='overflow-hidden rounded-full bg-gray-200'>
          <div
            style={{ width: `${percentage}%` }}
            className='h-2 rounded-full bg-primary-600'
          />
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
