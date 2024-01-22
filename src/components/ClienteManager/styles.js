
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const Input = styled.input`
outline: none;
border-radius: 9px;
padding: 9px 16px;
font-size: 12px;
border: 1px solid #ccc;
margin-bottom: 12px; /* Adicionado para separar os inputs */`;

export const ListContainer = styled.div`
  max-width: 600px; /* Ajuste o valor conforme necessário */
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd; /* Adicione uma borda para separar o conteúdo */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;


export const Button = styled.button`
  padding: 5px 14px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;


export const FormTitle = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const ButtonExcluir = styled.button`
  background-color: #f44336;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export const ButtonEditar = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
