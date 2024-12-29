import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category , setCatogary] = useState("All")

  return (
    <div>
      <Header/>
      <Menu category={category} setCatogary={setCatogary}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home