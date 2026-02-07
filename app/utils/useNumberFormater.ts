export const numberFormater = (value: number) => {
  return Intl.NumberFormat('fa-IR', {
    maximumFractionDigits: 3,
    notation: 'standard',
    minimumIntegerDigits:3
  }).format(value)
}