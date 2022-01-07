import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./search.scss";
import logo from "../../assets/Logo_ML.png";
import search from "../../assets/ic_Search.png";
import useProducts from "../../hooks/useProducts";
import useGetCategories from "../../hooks/UseGetCategories";
import Categories from "../../components/categories/Categories";

const Search = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameSearch(text);
    navigate({
      pathname: "/items",
      search: `?search=${text}`,
    });
  };

  const { elements } = useProducts({ keyword: nameSearch });
  const { categories } = useGetCategories(elements);

  return (
    <>
      <nav>
        <header className="nav-header">
          <div className="nav-items">
            <div>
              <img className="nav-items--img__logo" alt="search" src={logo} />
            </div>
            <form className="nav-search" onSubmit={handleSubmit}>
              <input
                className="nav-search--input"
                placeholder="Nunca dejes de buscar"
                type="text"
                onChange={handleInputChange}
                value={text}
              />
              <button type="submit" className="nav-search--button">
                <img alt="search" src={search} />
              </button>
            </form>
          </div>
        </header>
      </nav>
      <Categories categories={categories} />
      <section>
        <Outlet />{" "}
      </section>
    </>
  );
};

export default Search;
