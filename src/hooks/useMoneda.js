import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: .1rem;
  display: block;
  align-items: center;
  margin: 0px 0px 0px 27%;
  `;

const Select = styled.select`
  width: 50%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 3px;
  border: none;
  font-size: .9rem;
  margin: 9px 0px 9px 27%;
`;

//--------------------------------------------------------------
const useMoneda = (label, stateInicial, MONEDAS) => {
  // State para el custom hook
  const [ state, actualizarState ] = useState(stateInicial);
  //Lo que se imprime en pantalla
  const Seleccionar = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Select 
        onChange={ e => actualizarState(e.target.value) }
        value={state}
        name="" 
        id=""
      >
          <option value="">--Seleccionar--</option>
        {MONEDAS.map(moneda => (
          <option 
            key={moneda.codigo} 
            value={moneda.codigo}
          >{moneda.nombre}</option>
        ))}
      </Select>
    </Fragment>
  );
  //Retornar state, interfaz y función que modifica el state
  return [ state, Seleccionar, actualizarState ]
}

export default useMoneda;