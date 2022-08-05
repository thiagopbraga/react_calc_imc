import { useState } from 'react';
import { isTemplateSpan } from 'typescript';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calcularIMC} from './helpers/imc';
import { GridItem } from './components/GridItem';


const App = () => {
  const[altura, setAltura] = useState<number>(0);
  const[peso, setPeso] = useState<number>(0);

  let calculo: number;
  
  const handleCalcularBotao = () => {
    if (altura && peso){
      const somar = () => {
        const calculo = altura * peso;
        return calculo;

      }
    }else {
      alert("Preencha todos os campos")
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number"
          placeholder='Digite a sua altura. Ex: 1.52 (em metros)'
          value={altura > 0 ? altura : ''}
          onChange={ e => setAltura(parseFloat(e.target.value))}
          />
          <input 
          type="number"
          placeholder='Digite o seu peso. Ex: 52 (em kilos)'
          value={peso > 0 ? peso : ''}
          onChange={ e => setPeso(parseFloat(e.target.value))}
          />
        <button onClick={handleCalcularBotao}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  }
export default App;
