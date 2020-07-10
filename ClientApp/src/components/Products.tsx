import React, { useState, useEffect } from "react";
import Modal from "./Modal";

import "./Products.css";

type ProductType = {
  id: number;
  maker: string;
  img: string;
  url: string;
  title: string;
  description: string;
  rating : number[] | null;
}

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [toggle, setToggle] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({} as ProductType);

  useEffect(() => {
    populateProductData();
  }, []);

  const populateProductData = async () => {
    const data = await (await fetch("product")).json();
    setProducts(data);
  };

  return (
    <>
      <div className="card-columns">
        {products.map((product: ProductType) => (
          <div className="card" key={product.id}>
            <div
              className="card-img"
              style={{ backgroundImage: `url(${product.img})` }}
            />
            <h5 className="card-title">{product.title}</h5>

            <div className="card-footer">
              <small className="text-muted">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProduct(product);
                    setToggle(!toggle);
                  }}
                  data-toggle="modal"
                  data-target="#productModal"
                >
                  More Info
                </button>
              </small>
            </div>
          </div>
        ))}
      </div>
      <Modal
        product={selectedProduct}
        toggle={() => {
          setToggle(!toggle);
        }}
        modals={toggle}
      />
    </>
  );
};

export default Products;
