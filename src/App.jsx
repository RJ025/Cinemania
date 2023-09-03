import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchVideo from './components/WatchVideo'
import VideoContainer from './components/VideoContainer'
import ResultVideoContainer from './components/ResultVideoContainer'


const appRouter = createBrowserRouter([{
  path : "/" , 
  element : <App/> ,
  children : [
    {
      path : "/" ,
      element : <Body/>
    } ,
    {
      path : "/watch" ,
      element : <WatchVideo/>
    } ,
    {
      path : "/result" , 
      element : <ResultVideoContainer/>
    }
  ] 
}])

function App() {

  return (
    <>
      <Provider store={store}>
          <Header/>
          <Outlet/>
      </Provider>
            
    </>
  )
}

export default appRouter
