import React from 'react'
import DropdownList from '../dropdown-list'
import cl from './navigation.module.scss'

const NavigationBar: React.FC = () => {
  const [sort, setSort] = React.useState('по популярности')
  const [showDropdownList, setShowDropdownList] = React.useState(false)

  return (
    <div className={cl.container}>
      <div className={cl.content}>
        <a onClick={() => setShowDropdownList(!showDropdownList)} className={cl.sort} href='#'>
          Сортировка: <span className={cl.accent}>{sort}</span>
        </a>
        {showDropdownList && (
          <DropdownList setSort={setSort} setShowDropdownList={setShowDropdownList} />
        )}

        <ul className={cl.info}>
          <li>
            <a className={cl.statistic} href='#'>
              Статистика
            </a>
          </li>
          <li>
            <a className={cl.rule} href='#'>
              Правила
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
