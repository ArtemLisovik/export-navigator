import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

// import { deskTopMenuReveal, fromLeftToRight, textAnimation } from 'config/animation'
// import { menuConfig } from './config/menuConfig'

import './Menu.scss'
// import { useTranslation } from 'react-i18next'
import { menuConfig } from './config/menuConfig'


export type menuType = 'ua' | 'ru' | 'en' 

export const Menu = () => {

    const [desktopMenu, setDesktopMenu] = useState(true)

    const getWindowSize = () => {
        if (window.innerWidth < 700) {
            setDesktopMenu(false)
        } else {
            setDesktopMenu(true)
        }
    }

    useEffect(() => {
        getWindowSize()
    }, []);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        };
    }, [desktopMenu]);

    const view = desktopMenu ? <DesktopMenu /> : <BurgerMenu />

    return (
        <>
            {view}
        </>
    )
}


export const DesktopMenu = () => {

    const lang = document.cookie.split('=')[1] as menuType
    console.log(lang)
    const menuList = Object.entries(menuConfig[lang])
    const view = menuList.map((menuItem, index) => {
        return <li 
            style={{animation: `menuReveal 0.5s ease ${index/15}s`, animationFillMode: `forwards`}}
            key={menuItem[0]} 
            className="menu__item">
            <NavLink to={menuItem[1] as string} className={({ isActive }: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>{menuItem[0]}</NavLink>
        </li>
    })


    return (
        <ul 
        className="menu__list">
            {view}
        </ul>
    )
}


const BurgerMenu = () => {
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        if (menuActive) {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
        } else {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
        }
    }, [menuActive])

    const menuList = Object.entries(menuConfig)
    const view = menuList.map((menuItem, index) => {
        return <li 
            style={{animation: `menuReveal 0.5s ease ${index/15}s`, animationFillMode: `forwards`}}
            key={menuItem[0]} 
            className="burger-menu__item">
            <NavLink to={menuItem[1]} className={({ isActive }: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>{menuItem[0]}</NavLink>
        </li>
    })


    return (
        <>
            <div className={`backdrop ${menuActive ? 'active' : ''}`}
                onClick={() => setMenuActive(state => !state)}>
            </div>
            <nav className='burger-menu'>

                <div className={menuActive ? 'burger-menu__container active' : 'burger-menu__container'}
                    onClick={() => setMenuActive(state => !state)}>
                    <div
                        className={menuActive ? 'burger-menu__btn active' : 'burger-menu__btn'}>
                        <div className='burger-menu__decor top'></div>
                        <div className='burger-menu__decor bottom'></div>
                    </div>
                </div>
                <div
                    className={menuActive ? `burger-menu__list active` : `burger-menu__list`}>

                    {menuActive && 
                    <>
                        <ul className="burger-menu__category">
                            {view}
                        </ul>
                    </>}

                </div>
            </nav>
        </>
    )
}