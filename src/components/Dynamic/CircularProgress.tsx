import { cn, formatNumber } from '@helpers/utils'
import { useMemo } from 'react'

interface Props {
  percentage: number
  size?: number
}

const TRACK_WIDTH = 4

const COLOR_BY_PERCENTAGE = {
  '0_39': 'stroke-red-500',
  '40_69': 'stroke-yellow-500',
  '70_100': 'stroke-green-500'
}

export default function CircularProgress({ percentage, size = 92 }: Props) {
  const { center, radius, dashArray, dashOffset } = useMemo(() => {
    const center = size / 2
    const radius = center - TRACK_WIDTH
    const dashArray = 2 * Math.PI * radius
    const dashOffset = dashArray * ((100 - percentage) / 100)
    return { center, radius, dashArray, dashOffset }
  }, [percentage])

  const range = Object.keys(COLOR_BY_PERCENTAGE).find((range) => {
    const [low, high] = range.split('_').map(Number)
    return percentage >= low && percentage <= high
  })

  return (
    <div className={`flex items-center justify-center relative`}>
      <span className='absolute text-md text-gray-400 font-semibold'>
        {formatNumber(percentage / 100, {
          style: 'percent',
          maximumFractionDigits: 0
        })}
      </span>
      <svg className='-rotate-90' style={{ width: size, height: size }}>
        <circle
          className='stroke-[4px] fill-transparent stroke-gray-400/40'
          cx={center}
          cy={center}
          r={radius}
        />
        <circle
          className={cn(
            'stroke-[4px] fill-transparent',
            COLOR_BY_PERCENTAGE[range as keyof typeof COLOR_BY_PERCENTAGE]
          )}
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
    </div>
  )
}
