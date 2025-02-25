'use client';

import { MouseEventHandler, useState } from 'react';
import styles from './test.module.css';

export default function () {
  const [value, setValue] = useState(Array(5).fill(0).map((v, i) => i + 1));

  const onClose = (target: number): MouseEventHandler<HTMLDivElement> => e => {
    setValue((prev: number[]) => prev.filter(v => v !== target));
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Components Design Test</h1>
      <div className={styles.container}>
        {value.map(v => 
          <div key={v} className={styles['btn-group']}>
            <button className={styles.btn}>btn{v}</button>
            <div className={styles['close-btn']} onClick={onClose(v)}></div>
          </div>
        )}
      </div>
      <div className={styles.container}>
        {value.map(v => 
          <div key={v} className={styles['btn-group']}>
            <button className={styles.btn2}>한글글글글글그륵륵륵ㄹㄱ를{v}</button>
          </div>
        )}
      </div>
    </div>
  )
}