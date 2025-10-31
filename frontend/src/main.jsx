import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InputBox from './component/InputBox'
import MainPage from './component/MainPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <InputBox/> */}
    <MainPage/>
  </StrictMode>
)
