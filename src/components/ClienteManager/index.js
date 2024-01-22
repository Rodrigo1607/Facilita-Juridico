import React, { useState } from 'react';
import * as S from './styles';
import { ListContainer, List, ListItem } from './styles';

const ClienteManager = () => {
    const [clientes, setClientes] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [novoCliente, setNovoCliente] = useState({ nome: '', email: '', telefone: '' });
    const [editandoCliente, setEditandoCliente] = useState(null);

    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    const handleNovoClienteChange = (event) => {
        const { name, value } = event.target;
        setNovoCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
    };

    const handleCadastrarCliente = () => {
        if (editandoCliente !== null) {
            
            const novosClientes = [...clientes];
            novosClientes[editandoCliente] = novoCliente;
            setClientes(novosClientes);
            setEditandoCliente(null);
        } else {
            
            setClientes([...clientes, novoCliente]);
        }

        
        setNovoCliente({ nome: '', email: '', telefone: '' });
    };

    const handleExcluirCliente = (index) => {
        const novosClientes = [...clientes];
        novosClientes.splice(index, 1);
        setClientes(novosClientes);
    };

    const handleEditarCliente = (index) => {
        
        const clienteEditando = clientes[index];
        setNovoCliente({ ...clienteEditando });
        setEditandoCliente(index);
    };

    const clientesFiltrados = clientes.filter(
        (cliente) =>
            cliente.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            cliente.email.toLowerCase().includes(filtro.toLowerCase()) ||
            cliente.telefone.includes(filtro)
    );

    return (
        <S.Container>
            <S.SectionTitle>Clientes</S.SectionTitle>
            <S.Input type="text" placeholder="Filtrar clientes" value={filtro} onChange={handleFiltroChange} />
            <ListContainer>
                <S.List>
                    {clientesFiltrados.map((cliente, index) => (
                        <S.ListItem key={index}>
                            {cliente.nome} - {cliente.email} - {cliente.telefone}
                            <S.ButtonExcluir onClick={() => handleExcluirCliente(index)}>Excluir</S.ButtonExcluir>
                            <S.ButtonEditar onClick={() => handleEditarCliente(index)}>Editar</S.ButtonEditar>
                        </S.ListItem>
                    ))}
                </S.List>
            </ListContainer>
            <S.SectionTitle>Cadastrar Novo Cliente</S.SectionTitle>
            <S.Input type="text" name="nome" placeholder="Nome" value={novoCliente.nome} onChange={handleNovoClienteChange} />
            <S.Input type="text" name="email" placeholder="Email" value={novoCliente.email} onChange={handleNovoClienteChange} />
            <S.Input type="text" name="telefone" placeholder="Telefone" value={novoCliente.telefone} onChange={handleNovoClienteChange} />
            <S.Button onClick={handleCadastrarCliente}>Cadastrar</S.Button>
        </S.Container>
    );
};

export default ClienteManager;
