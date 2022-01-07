import Search from "../search/Search";
import List from "../list/List";
import "./home.scss";
import Details from "../details/Details";
import { Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from "../../context/ProductsContext";

const Home = () => {
  return (
    <>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<Search />}>
            <Route path="/items" element={<List />} />
            <Route exact path="/items/:id" element={<Details />} />
          </Route>
        </Routes>
      </ProductsContextProvider>
    </>
  );
};

export default Home;
