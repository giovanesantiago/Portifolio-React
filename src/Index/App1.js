import React from 'react'
import Image from './components/Image'
import perfil from './img/perfil.jpg'
import mobile from './css/mobile.css'
import pc from './css/pc.css'
import Redes from './components/redes'

function App1() {
    return (
      <div className="principal">
        <header>
          <Image className='perfil' src={perfil} />
        </header>
        <main class="main">
            <h1>Olá! Eu sou</h1>
            <h1 class="nome"> Giovane Santiago </h1>
            
            <div class="txt">
                <p><strong>Developer Front-End</strong>, se está em busca de solução digital (site, sistemas web...), chegou ao lugar certo, <strong>programação web</strong> personalizada de alta qualidade, confira meus projetos em Portfolio ou entre em contato. </p>
            </div>
        </main>
        <footer class="final">
            <div class="container">
                <button type="button"><a href="port/manutencao.html">PORTFOLIO</a></button>
                <button><a target="_blank" href="https://wa.me/message/XH3VVTUIW5ELE1">CONTATE-ME!</a></button>
            </div>
            <Redes />
        </footer>
      </div>
    );
}

export default App1;
