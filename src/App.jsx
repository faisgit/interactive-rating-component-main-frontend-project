import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rating from './components/rating'
import Review from './components/review'

export default function App() {
  const [rating, setRating] = useState(null)
  console.log(rating)
  return (
    <div className='h-screen w-screen bg-[#121417]'>
      <Router>
        <Routes>
          <Route path='/' element={<Rating setRating={setRating} rating={rating} />} />
          <Route path='/review' element={<Review rating={rating} />}/>
        </Routes>
      </Router>
    </div>
  )
}
