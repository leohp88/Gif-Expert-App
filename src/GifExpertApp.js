import React, { useState } from "react";
import AddCategorie from "./components/AddCategorie";
import GifGrid from "./components/GifGrid";

const GifExpertApp = (categoria) => {
  // const categories = ["Pedro", "Juan", "Carlos"];

  const [categories, setCategories] = useState([""]);

  /* const addCategories = () => {
    setCategories([...categories, "Marcos"]);
    setCategories(categ => [...categ, "Marcos"]);
  }; */

  return (
    <>
      <h2 className="animate__bounce">GifExpertApp</h2>
      <AddCategorie setCategorie={setCategories} />
      <hr />

      <ol>
        {categories.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
