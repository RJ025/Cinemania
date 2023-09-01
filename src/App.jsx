import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const appRouter = createBrowserRouter([{
  path : "/" , 
  element : <Body/>
}])

function App() {

  return (
    <>
      <Provider store={store}>
        <Header/>
        <RouterProvider router={appRouter}/> 
      </Provider>
            
    </>
  )
}

export default App
