import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();
  return (
    <div className='flex justify-center items-center'>User: {userid}</div>
  )
}

export default User