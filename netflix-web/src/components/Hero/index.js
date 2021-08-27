import React from 'react';
import badge from '../../assets/badge-top-10.png';

const Hero = ({ filme }) => {
    return (
        <div class="container-fluid" id="hero" style={{
            backgroundImage: `url(${filme.capa})`
        }}>
            <div class="container">
                <div class="row" id="hero_infos">
                    <div class="col-6">
                        <img src={filme.logo} alt="Filme" class="logo"/>
                        <h1 class="text-white"><img src={badge} /> Top 1 de hoje no Brasil.</h1>
                        <p class="text-white">
                            {filme.descricao?.substr(0,190)}...
                        </p>
                        <br/>
                        <button class="btn btn-lg btn-custom-white me-3">
                            <span class="mdi mdi-play"></span>
                            Assistir
                        </button>
                        <button class="btn btn-lg btn-custom-translucent">
                            <span class="mdi mdi-information-outline"></span>
                            Mais informações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;