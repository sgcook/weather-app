import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        onSubmit();
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onSubmit]);

  return (
    <div className="search-form">
      <label htmlFor="search">
        <input
          type="text"
          placeholder="Search City"
          onChange={handleInputChange}
          value={searchText.toUpperCase()}
        />
      </label>
      <button type="submit" onClick={onSubmit} className="search-button">
        Search
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
