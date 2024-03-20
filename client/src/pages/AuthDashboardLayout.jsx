import React from 'react'
import AuthSidebar from '../components/AuthSidebar'
import { Outlet } from 'react-router-dom'

function AuthDashboardLayout() {
  return (
    <div className='flex'>
      <AuthSidebar/>
      <div className='p-10'>
      <Outlet/>
      </div>
    </div>
  )
}

export default AuthDashboardLayout