import { useState, useEffect } from "react";

export default function useGetITems(elements) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      elements.map((data) => {
        let list = {};
        list = Object.values(data.item);
        return list;
      })
    );
  }, [elements]);

  return { items };
}
