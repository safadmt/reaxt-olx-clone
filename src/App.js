import React from 'react'
import { RouterProvider} from 'react-router-dom'
import { router } from '../Rout'
import { CommonStateProvider } from './context/CommonContext'
function App() {
  return (
    <div>
      <CommonStateProvider>
      <RouterProvider router={router}/>
      </CommonStateProvider>
    </div>
  )
}

export default App