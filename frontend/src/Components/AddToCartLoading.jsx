import React from "react";
import styles from "./AddToCart.module.css";
function AddToCartLoading() {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default AddToCartLoading;
