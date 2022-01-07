import { useState, useEffect } from "react";

export default function useGetCategories(elements) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(
      elements.map((data) => {
        let list = {};
        list = Object.values(data.categories);
        return list;
      })
    );
  }, [elements]);

  return { categories };
}
