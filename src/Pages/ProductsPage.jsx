import { useContext, useEffect } from "react";
import _ from "underscore";
import { AppContext } from "../Context/AppContext";
import { productsAPI } from "../apis/productsAPI";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const {
    state: { products },
    dispatchActions: { dispatchProduct },
  } = useContext(AppContext);
  const getAllProducts = () => {
    productsAPI
      .getAllProducts()
      .then((res) => {
        console.log(res);
        dispatchProduct({ type: "set_products", payload: res.products });
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (_.isEmpty(products)) {
      getAllProducts();
    }
  }, []);

  return (
    <div className="mx-auto max-w-6xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {!_.isEmpty(products) && products.length ? (
        products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })
      ) : (
        <ErrorProducts></ErrorProducts>
      )}
    </div>
  );
}

const ErrorProducts = () => {
  return (
    <section className="font-semibold text-xl text-center p-4 ">
      Oops! Nothing to show
    </section>
  );
};

/**
 * * Sample Product Object
 * {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
}
 */
