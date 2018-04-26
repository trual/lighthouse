import {render, renderError} from './render';
import lightsHandler from '/handlers/lights.js'

fetch(lightsHandler)
    .then(res => res.json())
    .then(render)
    .catch(renderError)
