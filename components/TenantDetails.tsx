import React from 'react'
import useAuth from '@/app/hooks/useAuth';
import Overdue from './Overdue';
import Profile from './Profile';

const TenantDetails = () => {
    const { user,loading} = useAuth();
  return (
    <div className="m-12">
        <Profile/>
        <Overdue/>
    </div>
  )
}

export default TenantDetails
// Hello, {user?.email}
//         tenant details