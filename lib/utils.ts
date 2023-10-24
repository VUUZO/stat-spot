import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatNumber = (number: number) => new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumSignificantDigits: 3
}).format(number)

export const getRelativeTime = (date: Date | number): string => {
  const timeMs = typeof date === 'number' ? date : new Date(date).getTime();

  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)

  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]
  const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto', style: 'narrow' })
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}