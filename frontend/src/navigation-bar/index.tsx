import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import DropdownList from '../dropdown-list'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setShowSortModal } from '../store/coach-card/slice'
import styles from './navigation.module.scss'

const NavigationBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const [matchHome, matchStatistics, matchRule] = [
    useMatch('/'),
    useMatch('/statistics'),
    useMatch('/rules'),
  ]
  const { sort, showSortModal } = useAppSelector(state => state.coachCard)

  const handleShowSortModal = () => dispatch(setShowSortModal(!showSortModal))

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <a onClick={handleShowSortModal} className={styles.sort} href='#'>
          Сортировка: <span className={styles.accent}>{sort}</span>
        </a>
        {showSortModal && <DropdownList />}

        <ul className={styles.info}>
          <li>
            <Link to='/' className={styles.statistic}>
              <img src='./weightlifter-excercise.svg' alt='' />
              <span style={matchHome ? { color: 'goldenrod' } : {}}>Главная</span>
            </Link>
          </li>
          <li>
            <Link to='/statistics' className={styles.statistic}>
              <img src='./stopwatch.svg' alt='' />
              <span style={matchStatistics ? { color: 'goldenrod' } : {}}>Статистика</span>
            </Link>
          </li>
          <li>
            <Link to='/rules' className={styles.rule}>
              <img src='./cardiogram.svg' alt='' />
              <span style={matchRule ? { color: 'goldenrod' } : {}}>Правила</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
