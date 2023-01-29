import React from "react";
import { useProducts } from "../../Context/ProductProvider";
import ProductCart from "../ProductCart/ProductCart";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <progress className="progress w-56 mx-auto"></progress>;
  }
  if (error) {
    content = (
      <pre data-prefix="3" className="bg-warning text-warning-content">
        <code>Something went wrong!</code>
      </pre>
    );
    if (!loading && !error && cart.length === 0) {
      content = (
        <h1 className="flex justify-center items-center text-3xl font-bold">
          Noting to show here.Products list is empty
        </h1>
      );
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart && cart.length ? (
        <>
          {cart?.map((product) => (
            <ProductCart key={product._key} product={product}></ProductCart>
          ))}
        </>
      ) : (
        <>{content}</>
      )}
    </div>
  );
};

export default Cart;
