import React from "react"

import { Icone } from "../UI"
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"

const claro = <Icone src={themeOn} alt="Tema Claro" />
const escuro = <Icone src={themeOff} alt="Tema Escuro" />

export default ({tema}) => (tema ? escuro : claro)