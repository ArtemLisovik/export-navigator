import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Dropdown, Submenu } from 'ui'

import './Menu.scss'


const investorsAnimation = {
    hidden: {
        x: '-30px',
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}


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

const DesktopMenu = () => {

    return (
        <motion.ul className='menu__list'>
            <motion.li className="menu__item">
                <NavLink to='/services' className={({isActive}: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>Services</NavLink>
            </motion.li>

            <motion.li className="menu__item">
                <NavLink to='/about' className={({isActive}: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>About</NavLink>
            </motion.li>

            <motion.li className="menu__item">
                <NavLink to='/team' className={({isActive}: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>Our team</NavLink>
            </motion.li>

            <motion.li className="menu__item">
                <NavLink to='/contacts' className={({isActive}: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>Contacts</NavLink>
            </motion.li>
        </motion.ul>
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

                    {menuActive && <>
                        <motion.ul className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.1}>
                                <NavLink to="/services" className="burger-menu__link">Services</NavLink>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.15}
                                className="burger-menu__item">
                                <NavLink to="/about" className="burger-menu__link">About</NavLink>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.2}>
                                <NavLink to="/team" className="burger-menu__link">Out team</NavLink>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.25}>
                                <NavLink to="/contacts" className="burger-menu__link">Contacts</NavLink>
                            </motion.li>

            
                        </motion.ul></>}

                </div>
            </nav>
        </>
    )
}