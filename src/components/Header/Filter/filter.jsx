import React from 'react';
import { SearchRounded } from '@mui/icons-material';
import "./filter.css";
// Filter component (Simulated, No Functionality)
export default function Filter() {
  return (
    <div className="filter-container">
      <label htmlFor="filterInput">
        <SearchRounded />
      </label>
      <input
        id="filterInput"
        className="filterbox"
        type="text"
        placeholder=" Filter"
      />
    </div>
  );
}
