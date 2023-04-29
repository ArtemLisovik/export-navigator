import { useState } from "react"

import './LangSwitcher.scss'

const languages = [
    { code: 'en', name: 'English'},
    { code: 'rus', name: 'Русский'},
    { code: 'deu', name: 'Deutsch'}
  ]

type LangSwitcherProps = {
    languages: Languages[],
    lang: string
}

type Languages = {
    code: string,
    name: string
}
export const LangSwitcher = () => {
    const [selectedLang ,setSelectedLang] = useState('')

    const langHanlder = (e: React.MouseEvent<HTMLLIElement>) =>{
        // LangSwitcher(e.target.className);
    }
    
      const options = languages.map(language => {
        // if(language.code != lang){
          return <li onClick={langHanlder} value={language.code}>
                    <div  className={language.code}></div>
                </li>
        // }
      });
      
      return (
        <div className="lang"> 
          <div 
            className='lang-selector'
          >
          </div>
          <ul className="dropdown" >
            {options}
          </ul>
        </div>
      )
    }