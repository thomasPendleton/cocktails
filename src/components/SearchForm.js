import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <section className="section search">
      <form action="submit" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
