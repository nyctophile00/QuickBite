import React from 'react'
import Header from '../components/Header'
import List from '../components/Restaurants'

export default function Restaurants() {
  return (
    <div>
      <h1 className='text-center font-bold text-6xl my-8'>Restaurants</h1>
      <List/>
    </div>
  )
}
