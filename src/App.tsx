import React from 'react'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TrendsList from './components/TrendsList'

const App = () => {
  return (
    <div>
      <Navigation/>
      <div className="flex justify-center">
        <div className="w-[30%]">
          <PeopleToFollow/>
          <TrendsList/>
        </div>
      </div>
    </div>
  )
}

export default App