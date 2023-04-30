
import React from 'react';
import {  useThemeUpdate } from './ThemeContext';


const ThemeSwitcher = () => {

    const toggleTheme = useThemeUpdate()

    return (

        <li className="my-3">
            <a onClick={toggleTheme} type='button' className="d-inline-flex text color-green">
                <i class="d-flex align-items-center mx-2 fa-solid fa-circle-half-stroke"></i>
                <p className="d-none d-md-block">Mod</p>
            </a>
        </li>


    );
}

export default ThemeSwitcher;