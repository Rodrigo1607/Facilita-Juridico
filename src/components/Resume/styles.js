import styled from "styled-components";

export const Container = styled.div`
 max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 20px; /* Adicionei um padding para melhor espaçamento */
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas se necessário */
  gap: 20px;
  margin-top: -50px;
  justify-content: space-between; /* Alterado para space-between para melhor alinhamento */
  align-items: center; /* Adicionado para centralizar verticalmente os itens */
  background-color: #f2f2f2; /* Adicionei uma cor de fundo */
  border-radius: 10px; /* Adicionei bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicionei uma sombra suave */
  font-weight: bold;
`;
