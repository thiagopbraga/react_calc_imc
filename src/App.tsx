import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { levels, calcularIMC, Level} from './helpers/imc';
import { GridItem } from './components/GridItem';


const App = () => {
  const[altura, setAltura] = useState<number>(0);
  const[peso, setPeso] = useState<number>(0);
  const[mostraItem, setMostraItem] = useState<Level | null>(null);

  const handleCalcularBotao = () => {
    if (altura && peso){
      setMostraItem(calcularIMC(altura, peso));
    }else {
      alert("Preencha todos os campos")
    }
  }
  const handleBackBotao = () => {
    setMostraItem(null);
    setAltura(0);
    setPeso(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
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
          disabled={mostraItem ? true : false}
          />
          <input 
          type="number"
          placeholder='Digite o seu peso. Ex: 52 (em kilos)'
          value={peso > 0 ? peso : ''}
          onChange={ e => setPeso(parseFloat(e.target.value))}
          disabled={mostraItem ? true : false}
          />
        <button onClick={handleCalcularBotao} >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!mostraItem &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {mostraItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackBotao}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={mostraItem}  />
            </div>
          }
        </div>
      </div>
    </div>
  );
  }
export default App;
