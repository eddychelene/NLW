import React from 'react';
import { FiLogIn } from 'react-icons/fi/'
import './styles.css';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div id="page-home">
            <div className = "content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>    

                <main>
                    <h1>
                        Seu marketplace de colecta de resíduos.
                    </h1>
                    <p>Nos livramos de seu lixo e ainda deixamos sua cidade limpa.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre um ponto de colecta agora!</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home