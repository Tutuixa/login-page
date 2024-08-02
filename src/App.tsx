import { Route, Routes } from 'react-router-dom'
import { Login } from './login/login.tsx'
import { Reset } from './reset-password/reset.tsx'

export function App() {
  return (  
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/reset-password' element={<Reset/>}></Route>
       
   </Routes>
  )
}

