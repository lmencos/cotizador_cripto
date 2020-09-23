import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';
import axios from 'axios';

const Boton = styled.input `
  margin-top: 6px;
  font-weight: bold;
  font-size: 18px;
  padding: 9px;
  background-color: #66a2fe;
  border: solid 1px #9497ff;
  width: 50%;
  border-radius: 3px;
  color: #FFF;
  transition: background-color .3s ease;
  margin: 12px 0px 0px 27%;

  &:hover {
    background-color: #9497ff;
    cursor: pointer;
  }
`;


//------------------------------------------------------
const Formulario = () => {

  //state del listado de criptomonedas de la API
  const [ listacripto, guardarCriptomonedas ] = useState([]);

  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dólar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
  ]

  //Utilizar useMoneda
  const [ moneda, SelectMoneda ] = useMoneda('Elige tu moneda', '', MONEDAS);

  //utilizar useCriptomoneda
  const [ criptomoneda, SelectCripto ] = useCriptoMoneda('Elige tu criptomoneda', '', listacripto);
  
  //Ejecutar llamado a la API
  useEffect( () => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    }
    consultarAPI();
  }, []);
  
  return ( 
    <form 
      action=""
    >
      <SelectMoneda

      />
      <SelectCripto

      />
      <Boton
        type="submit"
        value="calcular"
      />
    </form>
   );
}
 
export default Formulario;