import { Container , Profile } from "./styles";

export function Header(){

  return (
      <Container>
        <Profile> 
          <img src="https://github.com/marcelomotadev.png" alt="Foto do usuário" />

          <div>
            <span>Bem vindo,</span>
            <strong>Marcelo Mota</strong>
          </div>

        </Profile>

      </Container>
    );
}