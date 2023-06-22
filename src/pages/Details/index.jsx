import { Container, Links } from './styles';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';

export function Details() {  
  
  return(
    <Container>
      <Header />

      <ButtonText title='Excluir nota'></ButtonText>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title='express'></Tag>
        <Tag title="nodejs"></Tag>
      </Section>


      <Button title='Voltar'/>
    </Container>
  )
}