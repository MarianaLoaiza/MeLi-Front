import { useContext } from "react";

import "./list.scss";
import useGetItems from "../../hooks/useGetItems";
import ProductsContext from "../../context/ProductsContext";

import Products from "../../components/products/Products";

const List = () => {
  const { elements } = useContext(ProductsContext);
  const { items } = useGetItems(elements);

  return (
    <>
      <Products items={items} />
    </>
  );
};

export default List;
