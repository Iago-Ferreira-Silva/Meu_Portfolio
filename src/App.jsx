import './style.css'
import { enviarWhats } from './script'

function App() {
  return (
    <>
      <div className="particulas"></div>

      <nav className="navegacao">
        <ul className="menu">
          <li><a href="#inicio" className="menu-link">Início</a></li>
          <li><a href="#sobre" className="menu-link">Sobre Mim</a></li>
          <li><a href="#projetos" className="menu-link">Projetos</a></li>
          <li><a href="#contatos" className="menu-link">Contato</a></li>
        </ul>
      </nav>

      <main id="inicio" className="cabecalho">
        <div>
          <img src="/img/foto_perfil.jpg" alt="Foto de Iago Ferreira Silva" className="foto-perfil" />
          <h1>Iago Ferreira Silva</h1>
          <p className="cabecalho-sub-titulo">Desenvolvedor Front End e IA</p>
        </div>
      </main>

      <section id="sobre" className="sobre">
        <h2 className="sobre-titulo">Sobre Mim</h2>
        <div className="sobre-caixa">
          <p className="sobre-paragrafo">
            Olá! Me chamo Iago Ferreira, estudante de Sistemas da Informação e Análise e Desenvolvimento de Sistemas.
            Sou apaixonado por programação, com foco em desenvolvimento front-end e crescente interesse em Inteligência Artificial.
            Gosto de criar interfaces intuitivas, responsivas e funcionais que melhoram a experiência do usuário. Paralelamente,
            estudo IA e suas aplicações no desenvolvimento de soluções inteligentes e inovadoras. Meu objetivo é unir tecnologia,
            design e inteligência artificial para construir projetos que realmente façam a diferença.
          </p>
        </div>
      </section>

      <section id="projetos" className="projetos">
        <h2 className="projetos-titulos">Meus Projetos</h2>
        <div className="projetos-caixa">
          <div className="projetos-cards">
                <img src="img/projeto01.png" alt="Projeto 1" className="projetos-imagem" />
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Catálogos de Filmes</h3>
                    <p className="paragrafo-projetos">Projeto FilmFrenzy, um catálogo de filmes desenvolvido com foco em boas práticas, integração com APIs externas e hospedagem completa front-end + back-end.</p>
                </div>
            </div>

            <div className="projetos-cards">
                <img src="img/projeto02.png" alt="Projeto 2" className="projetos-imagem" />
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">AudioBook</h3>
                    <p className="paragrafo-projetos">O App Áudio Book é uma aplicação web simples e funcional que permite ouvir capítulos narrados de livros com controles de reprodução, pausa e navegação entre faixas.</p>
                </div>
            </div>

            <div className="projetos-cards">
                <img src="img/projeto03.png" alt="Projeto 3" className="projetos-imagem" />
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Job Finder</h3>
                    <p className="paragrafo-projetos">Este sistema é um portal para programadores encontrarem vagas de trabalho.</p>
                </div>
            </div>

            <div className="projetos-cards">
                <img src="img/projeto04.png" alt="Projeto 4" className="projetos-imagem" />
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Prompt Manager</h3>
                    <p className="paragrafo-projetos">O Prompt Manager é uma aplicação web prática e intuitiva que permite organizar todos os seus prompts de IA em um só lugar.</p>
                </div>
            </div>

            <div className="projetos-cards">
                <img src="img/projeto05.png" alt="Projeto 5" className="projetos-imagem" />
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Cardápio Digital</h3>
                    <p className="paragrafo-projetos">Criação de uma cardápio digital onde você pode visualizar diferentes tipos de refeições e categorias de alimentos.</p>
                </div>
            </div>

            <div className="projetos-cards">
                <img src="img/projeto06.png" alt="Projeto 6" className="projetos-imagem" />
                <div className="caixa-textos-projeto">
                    <h3 className="info-projetos">Agente IA</h3>
                    <p className="paragrafo-projetos">Este projeto tem como objetivo mostrar um agente IA que conversa e interage com o usuário.</p>
                </div>
            </div>
        </div>
      </section>

      <section id="contatos" className="contatos">
        <h2 className="contatos-titulos">Entre em Contato</h2>

        <form className="formulario-contato" id="formulario" onSubmit={enviarWhats}>
          <div className="grupo-form">
            <input placeholder="Nome" className="campo-form" id="nome" />
          </div>

          <div className="grupo-form">
            <textarea className="campo-form" placeholder="Digite sua mensagem..." rows="4" id="mensagem"></textarea>
          </div>

          <button type="submit" className="botao-form">Enviar WhatsApp</button>
        </form>
      </section>
    </>
  )
}

export default App