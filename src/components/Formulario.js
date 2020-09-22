import React from 'react';
import styled from '@emotion/styled';

const Boton = styled.input `
  margin-top: 6px;
  font-weight: bold;
  font-size: 18px;
  padding: 9px;
  background-color: #66a2fe;
  border: solid 1px #4647B9;
  width: 50%;
  border-radius: 3px;
  color: #FFF;
  transition: background-color .3s ease;
  margin: 0px 0px 0px 25%;

  &:hover {
    background-color: #224588;
    cursor: pointer;
  }
`;


//------------------------------------------------------
const Formulario = () => {
  return ( 
    <form 
      action=""
    >
      <Boton
        type="submit"
        value="calcular"
      />
    </form>
   );
}
 
export default Formulario;