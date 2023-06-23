import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';

export function Home(){
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>

      </Brand>

      <Header>

      </Header>

      <Menu>
        <li><ButtonText title='Home' isActive></ButtonText></li>
        <li><ButtonText title='React'></ButtonText></li>
        <li><ButtonText title='Nodejs'></ButtonText></li>
      </Menu>

      <Search>
        <Input placeholder="pesquisar pelo título" icon={FiSearch}></Input>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title:' React', 
            tags: [
              { id: '1', name: "react"},
              { id: '2', name: "rocketseat"}
            ], 
          }}>
          </Note>
        </Section>
      </Content>

      <NewNote>
        <FiPlus></FiPlus>
        Criar Nota
      </NewNote>

    </Container>
    
    )
}