import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Features/ProductsSlice";
import ProductItem from "../ProductItem";

const ProductsList = () => {
  const { products, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedProducts, setModifiedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products) {
      const newProducts = products.map((item) => {
        const { id, name, reference_image_id, description } = item;
        return {
          id: id,
          name: name,
          img: reference_image_id,
          type: description,
        };
      });
      setModifiedProducts(newProducts);
    } else {
      setModifiedProducts([]);
    }
  }, [products]);

  if (loading) {
    return <div className="text-center mt-4 mb-4">Loading ...</div>;
  }

  if (!products) {
    return <div className="text-center mt-4 mb-4">Product not found</div>;
  }

  return (
    <div className="container">
      <div className="breeds-list-drop">
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filters
          </button>
          <div className="dropdown-menu">
            {modifiedProducts?.map((item) => {
              const { id, name } = item;
              return (
                <div className="dropdown-item" href="#" key={id}>
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row">
        {modifiedProducts?.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
