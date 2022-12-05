import React from 'react';
import styles from '../styles/dropdown.module.css';
export default function Dropdown({ item, handleClick }) {
  return (
    <div>
      <div>
        <div className={styles.itemList} onClick={() => handleClick()}>
          {item.name}
        </div>
      </div>
    </div>
  );
}
