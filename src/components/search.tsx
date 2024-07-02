// Search.js
import { IoSearch } from "react-icons/io5";

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative flex flex-1 mb-4">
            <form className="w-full">
                <input
                    type="text"
                    className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
            </form>
        </div>
    );
}

export default Search;