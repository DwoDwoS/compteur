
'use client'
import { useState } from 'react'
import styles from './home.module.css'
import classNames from 'classnames'
import { Button } from '@mui/material'
import { increase, decrease, reset } from '../utils/button'


export default function Home({ }) {
  const [value, setValue] = useState<number>(0)

  const onClickPlus = () => setValue((prevValue) => increase(prevValue))
  const onClickMinus = () => setValue((prevValue) => decrease(prevValue))
  const onClickReset = () => setValue(() => reset())

  return <div>
    <h1>Mon Compteur de Clics</h1>
    <div className={styles.compteur}>
      <span id="count">{value}</span>
    </div>
    <Button className={classNames(styles.compteur, styles.btnPlus)} id="btn-plus" onClick={onClickPlus}>+1</Button>
    <Button className={classNames(styles.compteur, styles.btnMois)} id="btn-moins" onClick={onClickMinus}>-1</Button>
    <Button className={classNames(styles.compteur, styles.btnReset)} id="btn-reset" onClick={onClickReset}>Reset</Button>

    <footer className={styles.footer}>
      <p>Fait avec ❤️</p>
    </footer>

    <br />
  </div>
}
