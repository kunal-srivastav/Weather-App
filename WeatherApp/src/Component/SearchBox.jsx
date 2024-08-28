import React, { useEffect, useState } from 'react'

function SearchBox({getWeatherData , searchValue ,setSearchValue}) {

  
  return (
<div className="input-group mb-5">
  <input type="text" className="form-control" placeholder="Please Enter the City" aria-describedby="button-addon2" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} />
  <button className="btn text-light" type="button" id="button-addon2" style={{backgroundColor : "#27A5DB"}} onClick={getWeatherData} >Button</button>
</div>
  )
}

export default SearchBox