import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

 const Charts = () => {
         const[chartData,setChartdata]=useState({})

        useEffect(()=>{
       
          
        fetch("https://disease.sh/v3/covid-19/countries")  
          
          .then(res=>res.json())
          .then(json=> {
            const {data}=json
            // const data = await response.json();
            setChartdata({
              options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: data.map(item=>item?._id)
                }
              },
              series: [
                {
                  name: "series-1",
                  
                  data: data.map(item=>item?.cases)
                }
              ]
              

            })
          })
        
     
        })

  return (
    <div>
      <div className='charts'>
      {chartData && chartData?.series && (
        <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="500"
       
      />
      )}
      </div>
    </div>
  )
}
export default Charts;