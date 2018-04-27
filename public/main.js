import {render, renderError} from './render';

console.log('app loaded')

fetch('/api/lights')
    .then(res => res.json())
    .then(render)
    .catch(renderError)
