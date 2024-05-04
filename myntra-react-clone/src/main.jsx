import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bag from './components/Bag.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './routes/Home.jsx'
import {Provider} from "react-redux"
import myntraStore from './store/index.js'
import MainPage from './components/MainPage.jsx'

const router = createBrowserRouter ([
    {path:"/", element: <App/>, children:[
    {path: "/", element: <MainPage></MainPage>},
    {path:"/women", element: <Home/>},
    {path:"/bag", element: <Bag/>}
]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
