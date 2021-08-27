import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Header = ({ hideMenu }) => {
    const [user, setUser] = useState({});

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')));
    }, []);

    return (
        <header className="row">
            <div className="col-2">
                <img src={logo} alt="Netflix"/>
            </div>
            {!hideMenu && (<div className="col-8">
                <ul className="menu_list">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Séries</a>
                    </li>
                    <li>
                        <a href="#">Filmes</a>
                    </li>
                    <li>
                        <a href="#">Mais recentes</a>
                    </li>
                    <li>
                        <a href="#">Minha lista</a>
                    </li>
                </ul>
            </div>)}
            {!hideMenu && (<div className="col-2 text-right">
                <a onClick={logout} className="text-white link">Olá, {user?.nome}. Sair</a>
            </div>)}
        </header>
    )
}

export default Header;