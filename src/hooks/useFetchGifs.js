import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);
  //cuando la prop coincide con el nombre se puede sacar en el caso de
  //images:images se deja solamente images,
  return {
    // images: images,
    images,
    isLoading,
  };
};

export default useFetchGifs;
