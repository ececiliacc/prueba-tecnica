import styled from 'styled-components';
import img from '../assets/fondo.jpg';

export const HeaderStyled = styled.div `
padding: 7px 10px;
box-shadow: 1px 1px 9px #d2d2d2;
margin-bottom: 2rem;
font-size: 19px;
header {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color:#b83422fa
}
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-right: 1rem;
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
padding: 7px 16px;
`;

export const Select = styled.select`
font-size: 1rem;
width: 150px;
height: 35px;
border: 1px solid #d7d7d7;
border-radius: 4.71px;
padding: 0px 7px;
`;

export const JokesListStyle = styled.div`
background-image: linear-gradient(to top, rgba(161, 140, 209, 0.37) 0%, rgba(251, 194, 235, 0.342) 100%),url(${img});
display: flex;
flex-direction: column;
align-items: stretch;
padding: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
    
`;

export const JokeCardStyle = styled.div`
  margin-bottom: 1.4rem;
  box-shadow: 1px 1px 1px 0px #d2d2d2;
  border: 1px solid #d2d2d2;
  padding: 0.7rem;
  border-radius: 4.71px;
  background-color:#f0ee94fa;
  font-size: 1rem;
  font-weight: 500;
    p {
    word-break: break-word;
    line-height: 1.4;
  }
  
`;

