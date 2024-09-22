import React, { useEffect, useState } from 'react';
import './App.css';
import useFinanceData from './hooks/useFinanceData.js';
import Expenses from './components/expenses';
import Incomes from './components/incomes';
import Investments from './components/investments';

function App() {
  const { expenses, incomes, investments, loading, error } = useFinanceData();

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Controle suas finanças, controle seu futuro.';

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <div id="block">
            <Expenses data={expenses} />
            <Incomes data={incomes} />
            <Investments data={investments} />
      </div>
      <header className="header">
        <h1>Virtus Capital</h1>
        <h2>{displayedText}</h2>
      </header>

      <main>
        <section id="wwa-mission">
          <div className="left">
              <h3>Quem somos</h3>
              <hr/>
              <p>Fundada em 1994, em Belo Horizonte, Minas Gerais, a Virtus Capital é uma consultoria de finanças pessoais dedicada a transformar vidas financeiras. Com uma equipe apaixonada pela educação financeira, ajudamos nossos clientes a entender e gerenciar suas finanças de forma eficaz.</p> <p>Atuamos como parceiros, ouvindo suas histórias e personalizando estratégias para alcançar seus sonhos. Na Virtus Capital, acreditamos que todos merecem a liberdade financeira. Junte-se a nós e descubra como podemos transformar suas metas em realidade. Sua vitória é a nossa vitória!</p>        </div>
          <div className="right">
              <h3>Nossa Missão</h3>
              <hr/>
              <p>Na Virtus Capital, nossa missão é transformar a vida financeira de todos os nossos clientes, abrangendo aqueles que buscam superar desafios financeiros e aqueles que desejam aprimorar a gestão de seus recursos. Compreendemos a frustração de quem almeja realizar sonhos, como uma viagem internacional ou a aquisição de um carro dos sonhos, mas se sente preso por preocupações financeiras.</p> <p>Também apoiamos aqueles que, apesar de terem reservas, gastam inconscientemente e/ou carecem da educação financeira necessária para gerir seus recursos com eficácia. Nossa abordagem inclusiva analisa o perfil de cada cliente e oferece um planejamento financeiro eficiente. Iniciamos com a conscientização sobre gastos, seguida por estratégias personalizadas para a otimização do orçamento, sempre com o objetivo de guiá-los rumo à liberdade financeira e à realização de seus objetivos.</p>
          </div>
        </section>

        <section id="approach" className="section">
          <article className="description">
            <h3>Nossa Abordagem</h3>
            <hr />
            <p>Utilizamos o método V.I.R.T.U.S. para transformar sua saúde financeira. Começamos com a <strong>Visibilidade</strong>, analisando suas finanças de forma clara. Em seguida, fazemos uma <strong>Investigação</strong> dos seus hábitos financeiros, identificando áreas de melhoria. Com isso, desenvolvemos uma <strong>Reestruturação</strong> que transforma suas finanças, estabelecendo metas alcançáveis. Implementamos a <strong>Transformação</strong> através da introdução de novos hábitos saudáveis e fazemos a <strong>Unificação</strong> dos seus recursos, gerenciando dívidas e investimentos de maneira integrada. Por fim, celebramos o <strong>Sucesso</strong>, reconhecendo suas conquistas e ajustando o caminho para o futuro. Venha descobrir como podemos impulsionar suas finanças com o método V.I.R.T.U.S.!</p>

          </article>
          <article className="image-container" style={{backgroundImage: `url('/images/grow-individual.jpg')`,backgroundSize: 'contain',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',width: '100%',height: '400px'}}></article>
        </section>

        <section id="expense" className="section">
          <article className="description">
            <h3>Gestão Eficiente de Despesas: O Caminho para a Saúde Financeira</h3>
            <hr />
            <p>Na Virtus Capital, analisamos as despesas para otimizar os recursos financeiros dos nossos clientes. A gestão eficiente é crucial para a saúde financeira. Com a abordagem V.I.R.T.U.S., identificamos desperdícios e oportunidades de economia, promovendo um planejamento orçamentário sustentável. Nosso objetivo primeiramente, é transformar a relação dos clientes com o dinheiro e unificar suas metas financeiras, criando um caminho claro para o sucesso.</p>
          </article>
          <article className="image-container" style={{backgroundImage: `url('/images/bills.jpg')`,padding: '10px',backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',width: '50%',height: '400px'}}>
          </article>
        </section>

        <section id="income" className="section">
          <article className="description">
            <h3>Renda Inteligente, Futuro Seguro</h3>
            <hr />
            <p>Na Virtus Capital, nosso objetivo é ampliar o potencial financeiro de nossos clientes ao gerenciar suas receitas. Avaliamos todas as fontes de renda e identificamos oportunidades de diversificação, além de desenvolver estratégias para aumentar os ganhos de forma sustentável. Ajudamos nossos clientes a estruturar suas receitas de maneira clara e eficiente, sempre destacando oportunidades de crescimento e formas de otimizar o fluxo financeiro. Dessa forma, garantimos que suas receitas estejam em harmonia com seus objetivos, promovendo estabilidade e segurança para metas de curto, médio e longo prazo.</p>
          </article>
          <article className="image-container" style={{backgroundImage: `url('/images/data-analysis.jpg')`,padding: '10px',backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',width: '50%',height: '400px'}}>
          </article>
        </section>

        <section id="investment" className="section">
          <article className="description">
            <h3>Virtus Capital: Crescimento e Decisões Financeiras Inteligentes</h3>
            <hr />
            <p> Nossa jornada começa com o alívio do peso das dívidas, trazendo tranquilidade para reorganizar a vida financeira e restabelecer o equilíbrio. Em seguida, trabalhamos para estabilizar as fontes de renda, garantindo um fluxo constante e saudável que serve de base para novas conquistas. O ponto alto desse processo é o empoderamento do cliente como um <strong>investidor inteligente</strong>. Nossa equipe de <strong>especialistas</strong> em mercado financeiro, com conhecimento global, está preparada para oferecer as <strong>melhores estratégias de investimento</strong>, sempre alinhadas aos objetivos pessoais de cada cliente. Ainda assim, a decisão final permanece nas mãos do cliente, que, orientado pela expertise da Virtus, tem o controle sobre quais operações serão realizadas. Essa sinergia entre consultoria e autonomia garante que o cliente possa, com confiança e segurança, alcançar seus maiores sonhos e objetivos financeiros.</p>
          </article>
          <article className="image-container" style={{backgroundImage: `url('/images/investment.jpg')`,padding: '10px',backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',width: '50%',height: '400px'}}>
          </article>
        </section>

        <section id="center" className="benefits">
          <h3>O futuro financeiro que você deseja, começa agora. Dê o primeiro passo com a <span style={{ color: '#f87d0a' }}>Virtus Capital.</span></h3>
        </section>
      
        <section className="contact">
          <h2 style={{fontFamily: 'Nanum Gothic'}}>Nos siga e baixe o app</h2>
          <div className="buttons">
          <a href="https://www.linkedin.com/in/hewelbelmonte/" target="_blank" rel="noopener noreferrer" className="button">
              <img src="/images/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="https://play.google.com/?authuser=0" target="_blank" rel="noopener noreferrer" className="button">
              <img src="/images/play-store.jpg" alt="Play Store" />
              Play Store
            </a>
            <a href="https://apps.apple.com/br/app/apple-store/id375380948" target="_blank" rel="noopener noreferrer" className="button">
              <img src="/images/apple-store.png" alt="Apple Store" />
              Apple Store
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 <span style={{ color: '#f87d0a' }}>Virtus Capital.</span> Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default App;
