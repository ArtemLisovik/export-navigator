import { Link } from 'react-router-dom'
import { Logo, Menu } from 'containers'
import { MySelect } from 'ui/Select/Select'


import './Header.scss'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <Logo />
        <Menu />
        <div className="header__localization">
          <MySelect/>
        </div>
      </div>
    </div>
  )
}