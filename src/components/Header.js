import React, { useContext } from 'react'
import {ThemeContext} from './context'

function Header({text}) {
    const {primaryColor} = useContext(ThemeContext)
    return (
       
            <h1 style = {{ color: primaryColor }}>{text}</h1>
            

    )
}

export default Header
