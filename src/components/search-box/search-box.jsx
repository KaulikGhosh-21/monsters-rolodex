import React from 'react'
import "./search-box.css";

const SearchBox = (props) => {
    return (
        <div>
            <input 
                className="search"
                type="search" 
                placeholder={props.placeholder} 
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBox
