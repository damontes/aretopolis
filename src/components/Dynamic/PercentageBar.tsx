import { cn, formatNumber } from '@helpers/utils'
import { useMemo } from 'react'

interface ProgressBarProps {
  percentage: number
}

const PercentageBar = ({ percentage }: ProgressBarProps) => {
  const color = useMemo(() => {
    switch (true) {
      case percentage > 0.7:
        return 'bg-green-500'
      case percentage <= 0.7 && percentage > 0.4:
        return 'bg-yellow-500'
      default:
        return 'bg-red-500'
    }
  }, [percentage])

  return (
    <div
      aria-hidden='true'
      className='flex items-center justify-between gap-x-4'
    >
      <div className='overflow-hidden rounded-full bg-gray-200 flex-1 relative flex items-center'>
        <div
          style={{ width: `${percentage * 100}%` }}
          className={cn('h-4 rounded-full ', color)}
        />
        <span className='absolute text-xs right-2 font-semibold'>
          {formatNumber(percentage, { style: 'percent' })}
        </span>
      </div>
    </div>
  )
}

export default PercentageBar
