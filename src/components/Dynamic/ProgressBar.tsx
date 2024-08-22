interface ProgressBarProps {
  count: number
  totalCount: number
}

const ProgressBar = ({ count, totalCount }: ProgressBarProps) => {
  const percentage = (count / totalCount) * 100

  return (
    <div>
      <h4 className='sr-only'>Status</h4>
      <p className='text-sm font-medium text-gray-900'>
        Question {count} / {totalCount}
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
