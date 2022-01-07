import "./categories.scss";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="selected-tags">
        {categories.length > 0 ? (
          categories[0].map((item, index) => {
            return (
              <div key={index}>
                {" "}
                <p className="selected-tags--items">{`${item} > `} </p>{" "}
              </div>
            );
          })
        ) : (
          <div> </div>
        )}
      </div>
    </>
  );
};

export default Categories;
