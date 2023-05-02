import Select from 'react-select'
import { useEffect, useState } from 'react'

import './Select.scss'

import ukraine from 'assets/img/ua.png'
import eng from 'assets/img/en.png'
import ru from 'assets/img/ru.png'

export const MySelect = () => {
  const [lang, setLang] = useState<string>()

  const handleSelectChange = (selectedOption: any) => {
  }

  const options = [
    {
      value: "ua", label: <div className='custom-select__item'>
        <img src={ukraine} alt="flag" className='custom-select__item-flag' />
        <p className="custom-select__item-local">ua</p>
      </div>
    },
    {
      value: "en", label: <div className='custom-select__item'>
        <img src={eng} alt="flag" className='custom-select__item-flag' />
        <p className="custom-select__item-local">en</p>
      </div>
    },
    {
      value: "ru", label: <div className='custom-select__item'>
        <img src={ru} alt="flag" className='custom-select__item-flag' />
        <p className="custom-select__item-local">ru</p>
      </div>
    }
  ]

  const colorStyles = {
    option: (styles:any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#999999" : null,
      };
    }
  }

  return (
    <Select
      classNamePrefix='custom-select'    
      defaultValue={options[0]}
      onChange={(e: any) => handleSelectChange(e.target)}
      isSearchable={false}
      styles={colorStyles}
      
    
      options={options} />
  )
}