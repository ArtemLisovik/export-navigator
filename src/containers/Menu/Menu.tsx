import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        console.log(window.innerWidth)
        if (window.innerWidth < 873) {
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
                <Link to='/services' className="menu__list-item">Services</Link>
            </motion.li>

            <motion.li className="menu__item">
                <Link to='/about' className="menu__list-item">About</Link>
            </motion.li>

            <motion.li className="menu__item">
                <Link to='/team' className="menu__list-item">Team</Link>
            </motion.li>

            <motion.li className="menu__item">
                <Link to='/contacts' className="menu__list-item">Contacts</Link>
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
                                <Link to="/welcome" className="burger-menu__link">Welcome to ECO</Link>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.15}
                                className="burger-menu__item">
                                <Link to="/where-to-begin" className="burger-menu__link">С чего начать</Link>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.2}>
                                <Link to="/tokens" className="burger-menu__link">Tokens</Link>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.25}>
                                <Link to="/tokens-claim" className="burger-menu__link">Claim токенов</Link>
                            </motion.li>

            
                        </motion.ul></>}

                </div>
            </nav>
        </>
    )
}