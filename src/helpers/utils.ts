import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const groupBy = <T, K extends string | number>(
  list: T[],
  getKey: (item: T) => K
) => {
  return list.reduce((previous, currentItem) => {
    const group = getKey(currentItem)
    if (!previous[group]) previous[group] = []
    previous[group].push(currentItem)
    return previous
  }, {} as Record<K, T[]>)
}

export const formatNumber = (
  number: number,
  options?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat('es-ES', options).format(number)
}
