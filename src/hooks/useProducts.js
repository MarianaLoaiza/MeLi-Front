import { useContext, useEffect } from "react";

import getAllItems from "../services/getAllItems";
import ProductsContext from "../context/ProductsContext";

export default function useProducts({ keyword }) {
  const { elements, setElements } = useContext(ProductsContext);
  useEffect(
    function () {
      const keywordToUse = keyword || localStorage.getItem("lastKeyword");
      getAllItems({ keyword: keywordToUse }).then((lista) => {
        setElements(lista);
        if (keyword) localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setElements]
  );

  return { elements };
}
