import React from 'react'

const ImgSearch = (props) => {
    return (
        <div>
            {/* onSubmit adalah built-in dari react attribut */}
            <form onSubmit={props.handleRequest} >
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search for images..." />&nbsp;
                <button>Search</button>
            </form>
        </div>
    )
}

export default ImgSearch