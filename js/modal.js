'use strict'

import{imagePreview} from './imagem.js';

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    document.getElementById('modal-form').reset()
    document.getElementById('nome').removeAttribute('data-id')
}

const loading = () => imagePreview('modal-image-input','img-modal');

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('cancelar').addEventListener('click', closeModal)

document.getElementById('modal-image-input').addEventListener('change',loading)



export {
    openModal,
    closeModal
}