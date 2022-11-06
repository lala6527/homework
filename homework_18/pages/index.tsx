import Link from 'next/link';
import{useEffect, useState, useRef } from 'react';
import styles from '../styles/main.module.scss';

export default function Home(){
  return (
    <div className="container">
      <div className={styles.card}>
      <Link href="/employee" className={styles.btn}>Employee</Link>
      </div>
    </div>
  )
}