import { useNavigate } from 'react-router-dom'
import '../App.css'

export function Reset() {
  const navigate = useNavigate()
  function handleClickLogin () {
   navigate('/') 
  }
    return (
    <div className='Reset-password'>
        <div className='APP'>
     <h1>Troque a senha</h1>
    <div className='login-real'>    
    <form className='forms'>
      <div className='input-1'>
      <input type='password' placeholder='Crie a senha'/> 
      </div>
      <div className='input-2'>
      <input type='password' placeholder='Repita a nova senha'/>
      </div>
      <button onClick={handleClickLogin}>Login</button>
    </form>
  </div>
  </div>
    </div>
    )
  }