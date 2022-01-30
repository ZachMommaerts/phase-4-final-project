export default function SearchBar({ search, setSearch }) {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    return(
        <form>
            <input placeholder='Search' type='text' onChange={handleChange} value={search} />
        </form>
    )
}