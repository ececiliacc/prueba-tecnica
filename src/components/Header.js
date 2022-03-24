import React from 'react';
import logo from '../assets/logo.jpg';
import {HeaderStyled} from './styles.js';

function header() {

  return (
    <div>
        <HeaderStyled>
            <header>
                <logo>
                    <img src= {logo} alt="chuck-norris" />
                </logo>
                <h1> CHUCK NORRIS JOKES</h1>
                <logo>
                    <img src= {logo} alt="chuck-norris" />
                </logo>
            </header>
        </HeaderStyled>
    </div>
  )
}

export default header