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
      <li>
        <button className={styles.link} onClick={() => handleClickList('по популярности')}>
          по популярности
        </button>
      </li>
      <li>
        <button className={styles.link} onClick={() => handleClickList('по рейтингу')}>
          по рейтингу
        </button>
      </li>
      <li>
        <button className={styles.link} onClick={() => handleClickList('по свободным')}>
          по свободным
        </button>
      </li>
    </ul>
  )
}

export default DropdownList
