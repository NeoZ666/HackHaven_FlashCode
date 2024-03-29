import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className='flex h-8 items-center justify-between border-e mx-10 my-8 '>
      <h1>Logo</h1>
      <div className='flex items-center justify-around gap-6'>
      <button onClick={()=>{navigate('login')}} className='px-8 py-2 rounded-sm bg-violet text-slate-200 font-bold active:bg-violet hover:bg-amethyst ' >Login</button>
      <button onClick={()=>{navigate('signup')}} className='px-8 py-2 rounded-sm border-2 border-violet text-violet font-bold hover:bg-amethyst hover:text-slate-200 active:bg-inherit active:text-violet
      '>Sign up</button>
      </div>
    </nav>
  )
}

export default Nav