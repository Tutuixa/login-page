import { useNavigate } from 'react-router-dom'
import { CiUser, CiLock } from 'react-icons/ci'
import '../App.css'

export function Login() {
    const navigate = useNavigate()
    function handleClickForgot () {
       navigate('reset-password')
    }
    return (
  <div className='APP'>
    <h1>Conecte-se</h1>
  <div className='login-real'>
    <form className='forms'>
      <div className='input-1'>
      <CiUser/>
      <input type='email' placeholder='E-mail'/> 
      </div>
      <div className='input-2'>
      <CiLock/>
      <input type='password' placeholder='Senha'/> 
      </div>
      <button onClick={handleClickForgot}>Esqueceu a senha</button>
      <button type="submit">Login</button>
    </form>
  </div>
  </div>
  )
}
