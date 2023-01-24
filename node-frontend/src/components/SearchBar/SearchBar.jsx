import React from 'react'
import selectOptions from './../../constants/searchBarValues'
const SearchBar = ({ searchValueState, handleSearch }) => {
  const [searchValue, setSearchValue] = searchValueState
  const handleChange = (e) => {

    setSearchValue({
      ...searchValue,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-10 ">
        <div className="flex bg-white rounded-2xl shadow-[rgba(165,_243,_252,_0.45)_0px_9px_20px]">
          <select type="select"
          name = "type"
          value = {searchValue.type}
            onChange={handleChange}
            className="rounded-l-2xl p-2 outline-none border-r-2">
            {selectOptions.map((opt,idx) => {
              return <option value={opt.key} key={idx}>{opt.value}</option>
            })}
          </select>
          <input type="text" className='w-80 outline-none border-r-2 px-1 py-3' placeholder='Search'
          name = 'searchvalue' value={searchValue.searchvalue}
            onChange={handleChange}
          />
          <button type="submit" className='px-4 bg-cyan-400 rounded-r-2xl text-white font-bold outline-none'
            onClick={handleSearch}
          >Search </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
