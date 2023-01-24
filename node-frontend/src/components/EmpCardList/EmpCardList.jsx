import React from 'react'
import EmpCard from '../EmployeeCard/EmpCard'

const EmpCardList = ({ searchResults }) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      { searchResults&&  searchResults.length ? (
        <div className="grid grid-cols-2 w-fit mt-10 gap-4">
          {searchResults.map((item, idx) => {
            return <EmpCard key={idx} values={item} />
          })}
        </div>
      ) : (
        <h1 className="text-white font-bold text-2xl mt-10">No Results Found</h1>
      )}
    </div>)
}

export default EmpCardList
