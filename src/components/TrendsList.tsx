/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

const trends = [
    {
      title: "Be the Person You Are on Vacation",
      author: "Maren Torff",
    },
    {
      title: "Hate NFTs? I have some bad news...",
      author: "Zain Levin",
    },
    {
      title: "The real impact of dark UX patterns",
      author: "Lindsey Curtis",
    },
  ];

const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h2 className="font-semibold text-xl mb-4">Trending Now</h2>
      {trends.map((trend, index)=>(
        <div key={index} className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <h3 className="text-sm font-semibold">{trend.title}</h3>
            <p className="text-sm text-gray-500">{trend.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TrendsList