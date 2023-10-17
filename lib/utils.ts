import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatNumber = (number: number) => new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumSignificantDigits: 3
}).format(number)


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}