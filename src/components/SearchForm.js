import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const [text, setText] = useState("");

  const handleEvent = (e) => {
    setText(e.target.value);
    searchCockTail();
  };

  const searchCockTail = () => {
    setSearchTerm(text);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search For Your Favourite</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            value={text}
            onChange={handleEvent}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
