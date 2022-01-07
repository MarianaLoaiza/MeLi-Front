import { useNavigate } from "react-router-dom";

import "./products.scss";
import Louder from "../load/Load";
import shipping from "../../assets/ic_shipping.png";

const Products = ({ items }) => {
  const navigate = useNavigate();

  const navigateProduct = (id) => {
    navigate(`/items/${id}`);
  };
  const numberFormat = (amout) => {
    const optionsCurrency = { style: "currency", currency: "ARS" };
    const formatNumer = new Intl.NumberFormat("es-ar", optionsCurrency);

    return formatNumer.format(amout);
  };

  return (
    <>
      <main>
        <section>
          {items.length > 0 ? (
            items[0].map((item) => {
              return (
                <div className="container-item" key={item.id}>
                  <div className="content-product">
                    <img
                      className="content-product--img__logo"
                      src={item.picture}
                      alt="product"
                      onClick={() => navigateProduct(item.id)}
                    />

                    <div className="content-information-product">
                      <div className="content-information">
                        <h1 className="content-information--price">
                          {numberFormat(item.prices.amount)}
                        </h1>
                        {item.shippfree_shipping === true ? (
                          <img
                            src={shipping}
                            alt=""
                            className="content-information--img__shipping"
                          />
                        ) : (
                          <p> {item.shippfree_shipping} </p>
                        )}
                      </div>
                      <p className="content-information--description">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <div className="content-city">
                    <p> {item.city} </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              {" "}
              <Louder />{" "}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Products;
