import React from "react";
import styles from "../styles";
const ActionButton = ({ imgUrl, handleClick, restStyle }) => {
  return (
    <div
      className={`${styles.gameMoveBox} ${styles.flexCenter} ${styles.glassEffect} ${restStyle}`}
      onClick={handleClick}
    >
      <img src={imgUrl} alt="action buttons" className={styles.gameMoveIcon} />
    </div>
  );
};

export default ActionButton;
