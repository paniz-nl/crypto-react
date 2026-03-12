import React from "react";

//Style
import styles from "./Coin.module.css";

const Coin = ({ image, marketCap, price, priceChange, symbol, name }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>
        ${" "}
        {price !== null && price !== undefined ? price.toLocaleString() : "N/A"}
      </span>
      <span
        className={
          priceChange !== null && priceChange !== undefined
            ? priceChange > 0
              ? styles.greenPriceChange
              : styles.redPriceChange
            : styles.redPriceChange
        }
      >
        {priceChange !== null && priceChange !== undefined
          ? priceChange.toFixed(2)
          : "N/A"}
        %
      </span>
      <span className={styles.marketCap}>
        ${" "}
        {marketCap !== null && marketCap !== undefined
          ? marketCap.toLocaleString()
          : "N/A"}
      </span>
    </div>
  );
};

export default Coin;
