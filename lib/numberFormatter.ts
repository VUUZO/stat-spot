export const formatNumber = (number: number) => new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumSignificantDigits: 3
}).format(number)
