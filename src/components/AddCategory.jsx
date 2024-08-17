import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //console.log(event.target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; //validacion para q no vayan vacios
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue(""); //limpio el input
    onNewCategory(inputValue.trim());
  };

  return (
    //"on": Prefijo que indica que lo que sigue es un evento.
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
