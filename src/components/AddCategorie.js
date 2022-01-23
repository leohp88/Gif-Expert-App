import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategorie = ({ setCategorie }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategorie((categ) => [inputValue, ...categ]);
      setinputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategorie.propType = {
  setCategorie: PropTypes.func.isRequired,
};
export default AddCategorie;
