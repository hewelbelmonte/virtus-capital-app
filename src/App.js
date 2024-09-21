import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Consultoria de Finanças Pessoais';

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 50);
      }
    };

    typeText();

    return () => {
      setDisplayedText('');
    };
  }, [fullText]);

  return (
    <div className="App">
      <header className="header">
        <h1>{displayedText}</h1>
        <p>Tenha controle total do seu dinheiro, tomando decisões financeiras inteligentes e gastando no que realmente importa. Sinta-se no comando do seu patrimônio e alcance suas metas com confiança.</p>
      </header>

      <main>
        <section id="despesa" className="section">
          <article className="description">Descrição da despesa</article>
          <article className="image-container" style={{ backgroundImage: 'url(/images/despesa)' }}></article>
        </section>

        <section id="renda" className="section">
          <article className="description">Descrição da renda</article>
          <article className="image-container" style={{ backgroundImage: 'url(images/imagem-renda.jpg)' }}></article>
        </section>

        <section id="investimento" className="section">
          <article className="description">Descrição do investimento</article>
          <article className="image-container" style={{ backgroundImage: 'url(images/imagem-investimento.jpg)' }}></article>
        </section>
      
        <section className="contact">
          <h2 style={{fontFamily: 'Nanum Gothic'}}>Baixe o App</h2>
          <div className="buttons">
            <a href="https://play.google.com/?authuser=0" className="button">
              <img src="data:image/jpeg;base64,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" alt="Play Store" />
              Play Store
            </a>
            <a href="https://apps.apple.com/br/app/apple-store/id375380948" className="button">
              <img src="data:image/png;base64,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" alt="Apple Store" />
              Apple Store
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Hewel Belmonte. Todos os direitos reservados. <a href="https://www.linkedin.com/in/hewelbelmonte/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
