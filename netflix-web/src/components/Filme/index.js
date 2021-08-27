import React from 'react';

const Filme = ({ filme }) => {

    const selectFilme = () => {
        const event = new CustomEvent('selectFilme', {
            detail: filme
        });

        window.dispatchEvent(event);
    }

    return (
        <li class="filme" onClick={selectFilme} data-bs-toggle="modal" data-bs-target="#modalFilme">
            <img src={filme.thumb} alt="The 100" class="img-fluid"/>
            <div class="filme_info">
                <div class="col-12">
                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                        <span class="mdi mdi-play"></span>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span class="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span class="mdi mdi-play mdi-thumb-down text-white"></span>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span class="mdi mdi-play mdi-plus text-white"></span>
                    </a>
                </div>
                <p>T3:EP5 {' '} <text className="ms-1">{filme.titulo}</text></p>
            </div>
        </li>
                    
    )
}
export default Filme;