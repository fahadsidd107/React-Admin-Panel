import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
import { userAndSalesData } from '../../Data'
function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart title="Sales and Users Analytics" data={ userAndSalesData } userDataKey="users" salesDataKey='sales' grid/>
    <div className='homeWidgets'></div>
    </div>
  )
}

export default Home