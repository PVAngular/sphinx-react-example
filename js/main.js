import React from 'react'
import ReactDOM from 'react-dom'

import {
    DisplayOK,
} from 'jsx-loader!./views.jsx'


const body = document.querySelector('body');
const elm = document.createElement('div');

body.appendChild(elm);

ReactDOM.render(DisplayOK, elm)
