import React from 'react'
import CategoriesSelectOption from '../CategoriesSelectOption'
import SearchBox from '../SearchBox'
import TagsSelectOption from '../TagsSelectOption'

function SearchAndFilter() {
  return (
    <div className='w-full flex-wrap flex justify-center gap-2 items-center px-4 sm:justify-start'>
        <SearchBox/>
        <CategoriesSelectOption />
        <TagsSelectOption />
    </div>
  )
}

export default SearchAndFilter