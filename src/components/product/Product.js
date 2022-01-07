import "./product.scss";
import Louder from "../load/Load";

const Product = ({ item, loading }) => {
  const numberFormat = (amout) => {
    const optionsCurrency = { style: "currency", currency: "ARS" };
    const formatNumer = new Intl.NumberFormat("es-ar", optionsCurrency);

    return formatNumer.format(amout);
  };

  return (
    <>
      <section>
        {!loading ? (
          item.map((item) => {
            return (
              <div className="content-details" key={item.item.id}>
                <div className="content-product">
                  <img
                    className="content-product--img__product"
                    src={item.item.picture}
                    alt=""
                  />
                </div>
                <div className="content-info">
                  <p className="content-info--sale">
                    {item.item.condition} - 234 vendidos{" "}
                  </p>
                  <h1 className="content-info--product">{item.item.title}</h1>
                  <p className="content-info--price">
                    {" "}
                    {numberFormat(item.item.price.amaunt)}{" "}
                  </p>
                  <button className="content-info--button__blue">
                    Comprar
                  </button>
                </div>
                <div className="content-description">
                  <h1 className="content-description--title">
                    Descripcion del producto
                  </h1>
                  <p className="content-description--info">
                    {item.item.description}
                  </p>
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
    </>
  );
};

export default Product;
