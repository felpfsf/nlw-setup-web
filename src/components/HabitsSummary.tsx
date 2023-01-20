import useFetchSummary from '../hooks/useFetchSummary'
import { generateDatesFromYearBegining } from '../utils/generate-dates-from-year-begining'
import HabitDay from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBegining()
// console.log(summaryDates)
const minimumSummaryDates = 24 * 7 // 10 semanas
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length

const HabitsSummary = () => {
  const { data: habits } = useFetchSummary('/habits')
  console.log(habits)

  return (
    <div className='mx-auto flex w-full max-w-[80%] place-items-center overflow-x-auto'>
      {/* <div className='grid grid-flow-col grid-cols-7 gap-x-24'> */}
      <div className='grid grid-flow-col grid-rows-7 gap-3'>
        {weekDays.map((weekday, i) => (
          <div
            key={`${weekday}-${i}`}
            className='flex h-10 w-10 items-center justify-center  text-xl font-bold text-zinc-400'>
            {weekday}
          </div>
        ))}
      </div>
      {/* <div className='grid grid-flow-row grid-cols-7 gap-x-24 gap-y-1'> */}
      <div className='grid grid-flow-col grid-rows-7 gap-3'>
        {summaryDates.map(date => (
          <HabitDay key={date.toString()} />
        ))}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className='h-10 w-10 cursor-not-allowed rounded-lg border-2 border-zinc-800 bg-zinc-900 opacity-40'></div>
            )
          })}
      </div>
    </div>
  )
}

export default HabitsSummary
