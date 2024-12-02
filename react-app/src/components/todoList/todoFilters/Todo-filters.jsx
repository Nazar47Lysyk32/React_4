import React from "react";

import "../../../styles/components/todoList/todoFilters/Todo-filters.scss";

const TodoFilters = ({ setCurrentFilter, currentFilter, filtersMap }) => {
  const filterNames = [ "All", "Done", "Todo"]; // [ All, Done, Todo ]

  const handleSetCurrentFilter = (filterName) => {
    setCurrentFilter(filterName);
  };

  return (
    <div className="filter">
      <img
        src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/11-512.png"
        alt="completed task icon"
        style={{ maxWidth: "25px", maxHeight: "20px" }}
      />

      <div className="filter-buttons">
        {filterNames.map((filterName) => (
          <button
            key={filterName}
            className={currentFilter === filterName ? "active" : ""}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilters;
