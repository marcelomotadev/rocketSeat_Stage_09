import { styled } from "styled-components";
import {} from '../../styles/theme'

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content"
  ;
`;