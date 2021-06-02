import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
  return (
    <div className="container">
    <form className="search">
      <div className="form-group">
        <label>Search Employee By Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for Employee"
          id="search"
        />
      </div>
    </form>
    </div>
  );
}

export default Search;
