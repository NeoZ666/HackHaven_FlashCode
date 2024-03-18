import React from 'react'

function Nav() {
  return (
    <nav className='flex items-center justify-between mx-10 my-8 '>
      <h1>Logo</h1>
      <div className='flex items-center justify-around gap-6'>
      <button>Login</button>
      <button>Sign up</button>
      </div>
    </nav>
  )
}

export default Nav