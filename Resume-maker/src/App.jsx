import { Suspense, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Homescreen  ,  PersonalForm , ProfessionalDetails } from './Pages/index'
import AdditionDetail from './Pages/Resume-Form/Additional-Information/AdditionDetail'
// import { Provider } from 'react-redux'
// import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    {/* <Provider store={store}> */}
    <Routes>
        <Route path="/*" element={<Homescreen/>} />
        <Route path="/auth" element={< PersonalForm/>} />
        <Route path="/exper" element={<ProfessionalDetails/>} />
        <Route path="/addDetails" element={<AdditionDetail/>} />
        
      </Routes>
      {/* </Provider> */}
    </Suspense>
    
    </>
  )
}

export default App
