import { useState } from "react";

export const DeleteCategory = ({ categories, onDeleteCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    if (selectedCategory) {
      onDeleteCategory(selectedCategory);
      setSelectedCategory(""); // Reinicia el select
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <select
        className="slt"
        name="categorySelect"
        id="categorySelect"
        value={selectedCategory}
        onChange={handleSelectChange}
      >
        {categories.map((categori, index) => (
          <option className="opcion" value={categori} key={index}>
            {categori}
          </option>
        ))}
      </select>
      <button className="btn danger" type="submit">
        Eliminar
      </button>
    </form>
  );
};
