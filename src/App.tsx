import HabitsSummary from './components/HabitsSummary'
import Header from './components/Header'

function App() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <div className='flex w-full max-w-[1440px] flex-col gap-16 px-6'>
        <Header />
        <HabitsSummary />
      </div>
    </div>
  )
}

export default App
