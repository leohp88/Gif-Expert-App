import { useEffect, useState } from "react";
import getGif from "../helpers/getGifs";

export const useFetchGif = (categoria) => {
  const [objeto, setObjeto] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGif(categoria).then((img) => {
        setObjeto({
          data: img,
          loading: false,
        });
      });
    }, 1500);
  }, [categoria]);
  return objeto;
};
