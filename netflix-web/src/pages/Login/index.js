import React, { useState } from 'react';
import Header from '../../components/Header';
import logoFb from '../../assets/facebook_icon.png';

import api from '../../services/api';

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    });

    const login = async () => {
        try{
            const response = await api.post('/usuario/login', credenciais);

            const res = response.data;

            if(res.error) {
                alert(res.message);
                return false;
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario));
            window.location.reload();
        } catch(err) {
            alert(err.message);
        }
    }

    return(
        <div 
        className="container-fluid bg_filmes"
        style={{
            position: 'fixed',
            height: '100%'
        }}
        >
            <Header hideMenu />
            
            <div id="caixa_login" class="col-4 offset-4">
                <h1 className="text-white">Entrar</h1><br/>
                <>
                    <input
                    type="email" 
                    className="form-control form-control-lg text-muted" 
                    placeholder="Email ou número de telefone" 
                    onChange={(e)=>{
                        setCredenciais({
                            ...credenciais,
                            email: e.target.value
                        })
                    }}
                    />

                    <br/>
                    <input 
                    type="password" 
                    className="form-control form-control-lg text-muted" 
                    placeholder="Senha" 
                    onChange={(e)=>{
                        setCredenciais({
                            ...credenciais,
                            senha: e.target.value
                        })
                    }}
                    />
                    <br/>
                    <button 
                    type="button" 
                    className="btn btn-lg btn-block btn-danger"
                    onClick={login}
                    > Entrar</button>
                    <div className="row mt-4">
                        <div className="col text-muted">
                            <input type="checkbox" id="lembrarMe" /> 
                            <label className="ms-2" for="lembrarMe">Lembrar de mim.</label>
                        </div>
                        <div className="col text-right">
                            <a href="#" className="text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col text-muted">
                            <img src={logoFb} alt="Facebook" width="15px" className="me-2 mb-1"></img>
                            <label>Conectar com Facebook</label>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col text-muted">Novo por aqui? <a href="#" className="assine-agora">Assine Agora</a></div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Login;