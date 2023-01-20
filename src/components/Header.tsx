import { AiOutlinePlus } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='flex w-full max-w-[80%] mx-auto items-center justify-between'>
      <img src='./images/app-logo.svg' alt='' />
      {/* <h1 className='text-4xl font-extrabold text-purple-600'>
            Habit Tracker
          </h1> */}
      <button className='group flex items-center gap-x-3 rounded-lg border border-violet-500 py-4 px-6 font-semibold transition-colors duration-200 ease-in-out hover:bg-violet-400'>
        <AiOutlinePlus className='h-5 w-5 font-semibold text-violet-500 group-hover:text-neutral-100' />
        Novo Hábito
      </button>
    </div>
  )
}

export default Header
