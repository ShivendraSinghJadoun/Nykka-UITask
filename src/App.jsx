import React from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import ProductCarousel from './components/ProductCarousel'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Banner/>
    <Header/>
    <CategoryNav/>
    <ProductCarousel/>
    </div>
  )
}

export default App;


