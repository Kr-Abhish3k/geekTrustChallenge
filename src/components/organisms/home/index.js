import React, { useEffect } from "react";
import SearchBox from "../searchBox/index.js";
import ProductList from "../productList/index.js";
import Sidebar from "../sidebar/index.js";
import { fetchData } from "../../../library/store/actions";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("call fetch data on first load");
    dispatch(fetchData());
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <SearchBox />
        </div>
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
