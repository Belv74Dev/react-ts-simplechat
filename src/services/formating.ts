export const abbMonths = ['янв', 'фев', 'мар', 'апр', 'мая', 'июня','июля', 'авг', 'сен', 'окт', 'ноя', 'дек']

export const timeformating = (
  hours: number, 
  minutes: number,
): string => {
  const formatedHours = hours < 10 ? '0' + hours : hours  
  const formatedMinutes = minutes < 10 ? '0' + minutes : minutes
  return  formatedHours + ':' + formatedMinutes
}

export const dateFormating = (strDate: string) => {
  const date = new Date(strDate)
  const day = date.getDate()
  const month = date.getMonth()
  return `${day} ${abbMonths[month]}`
}
