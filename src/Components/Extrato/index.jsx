import React from "react";

import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, date, from }) => {
        return (
          <Itens key={id} type={type} value={value} date={date} from={from}/>
        );
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};

export default Extrato;
