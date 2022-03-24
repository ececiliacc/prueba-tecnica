import React from "react";
import Detach from "./Detach";
import {JokeCardStyle} from './styles.js';

const JokeCard = ({ joke }) => (
  <Detach>
    <JokeCardStyle>
      <p>{joke}</p>
    </JokeCardStyle>
  </Detach>
);

export default JokeCard;
