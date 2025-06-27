import React from 'react'
import SelectOption from '../SelectOption'
import SearchBox from '../SearchBox'

function SearchAndFilter() {
  return (
    <div className='w-full flex justify-start gap-2 items-center px-4'>
        <SearchBox/>
        <SelectOption />
    </div>
  )
}

export default SearchAndFilter