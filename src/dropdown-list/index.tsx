import React from 'react'
import cl from './dropdown-list.module.scss'

type DropdownListProps = {
  setSort: (s: string) => void
  setShowDropdownList: (s: boolean) => void
}

const DropdownList: React.FC<DropdownListProps> = ({ setSort, setShowDropdownList }) => {
  const handleClickList = (sort: string) => {
    setSort(sort)
    setShowDropdownList(false)
  }
  return (
    <ul className={cl.list}>
      <li onClick={() => handleClickList('по популярности')}>
        <a className={cl.link} href='#'>
          по популярности
        </a>
      </li>
      <li onClick={() => handleClickList('по рейтингу')}>
        <a className={cl.link} href='#'>
          по рейтингу
        </a>
      </li>
      <li onClick={() => handleClickList('по свободным')}>
        <a className={cl.link} href='#'>
          по свободным
        </a>
      </li>
    </ul>
  )
}

export default DropdownList
