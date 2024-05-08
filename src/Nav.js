import { Link } from "react-router-dom"

const Nav = ({ search, setSearch}) => {
  return (
        <nav className="Nav">
            <form className="serchForm" onSubmit={(e) => e.preventDefault}>
                <label htmlFor="search">Search Posts</label>
                <input 
                    id="serch"
                    type="text"
                    placeholder="Serch Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
  )
}

export default Nav