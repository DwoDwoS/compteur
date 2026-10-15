
'use client'
import { useState } from 'react'
import styles from './home.module.css'
import classNames from 'classnames'
import { Button } from '@mui/material'

export default function Home() {
  const [value, setValue] = useState(0)

  const increase = () => setValue((prev) => prev + 1)
  const decrease = () => setValue((prev) => prev - 1)
  const reset = () => setValue(0)

  return <div>
    <h1>Mon Compteur de Clics</h1>
    <div className={styles.compteur}>
        <span id="count">{value}</span>
    </div>
    <Button className={classNames(styles.compteur, styles.btnPlus)} id="btn-plus" onClick={increase}>+1</Button>
    <Button className={classNames(styles.compteur, styles.btnMois)} id="btn-moins" onClick={decrease}>-1</Button>
    <Button className={classNames(styles.compteur, styles.btnReset)} id="btn-reset" onClick={reset}>Reset</Button>

    <footer className={styles.footer}>
        <p>Fait avec ❤️</p>
    </footer>

    <br />
  </div>
}
