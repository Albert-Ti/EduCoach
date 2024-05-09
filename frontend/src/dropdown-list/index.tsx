import React from 'react'
import styles from './dropdown-list.module.scss'
import { setShowSortModal, setSort } from '../store/coach-card/slice'
import { useAppDispatch } from '../hooks'

const DropdownList: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleClickList = (sort: string) => {
    dispatch(setSort(sort))
    dispatch(setShowSortModal(false))
  }
  return (
    <ul className={styles.list}>
      <li onClick={() => handleClickList('по популярности')}>
        <a className={styles.link} href='#'>
          по популярности
        </a>
      </li>
      <li onClick={() => handleClickList('по рейтингу')}>
        <a className={styles.link} href='#'>
          по рейтингу
        </a>
      </li>
      <li onClick={() => handleClickList('по свободным')}>
        <a className={styles.link} href='#'>
          по свободным
        </a>
      </li>
    </ul>
  )
}

export default DropdownList
