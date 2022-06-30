import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm()
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}></form>
      <input type="text" />
    </div>
  )
}

export default SearchForm
