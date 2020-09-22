import React from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';

//-----------------------------------------------------
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 100%) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 72%;
  margin-top: 1rem;
  margin: 0px 0% 0px 14%;
`;

const Heading = styled.h3`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: center;
  /* font-weight: 700; */
  font-size: 2.3rem;
  /* margin-bottom: 50px;
  margin-top: 80px; */

  &::after {
    content: '';
    width: 90%;
    height: 3px;
    background-color: #66A2FE;
    display: block;
    margin: 0px 0% 0px 5%;
  }
`;
//---------------------------------------------------------
function App() {
  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="imagen crypto"
        />
      </div>
      <div>
        <Heading>Cotizador de Criptomonedas Luchísimo</Heading>
        <Formulario>

        </Formulario>
      </div>
    </Contenedor>
  );
}

export default App;
