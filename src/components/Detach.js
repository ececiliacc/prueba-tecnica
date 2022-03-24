import React from 'react'
import {JokeCardStyle} from './styles.js';
import styled from "styled-components";


class Detach extends React.Component {
    state = {
        focusMode: false
      };
    
      render(){
        const { focusMode } = this.state;
        return (
          <>
            <Containers detached={focusMode}>
              {focusMode }
              <div onClick={this.openDetach}>{this.props.children}</div>
            </Containers>
            
          </>
        );
      }
}

export default Detach

const Containers = styled.div`
  ${props =>
    props.detached &&
    `
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;
      
      ${JokeCardStyle} {
        max-width: 300px;
        box-shadow: 5px 5px 12px 4px #403e3e;
        border: none;
      }
    `}
`;