import { useState } from 'react'
import BankingDashboard from './component/BankingDashboard'
import DarkMode from './component/DarkMode'

function App() {
  return (
    <div className="App flex flex-col">
      <DarkMode/>
     <div  >
     <BankingDashboard/>
     </div>

    </div>
  )
}

export default App
