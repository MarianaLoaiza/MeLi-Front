import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./details.scss";
import getItems from "../../services/getItem";
import Product from "../../components/product/Product";

const Details = () => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [element, setElement] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getItems(id).then((lista) => {
        setElement(lista);
        setLoading(false);
      });
    },
    [id]
  );

  return (
    <>
      <div>
        <Product item={element} loading={loading} />
      </div>
    </>
  );
};

export default Details;
