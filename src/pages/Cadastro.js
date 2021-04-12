import React, { useState } from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
import { Background, Form, Section } from '../styledComponents/styledCadastro';
import { Button, Input } from '../components/defaultComponents';

export default function Cadastro() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return (
        <Background>
            <Section>
                <Form>
                    <Input onChangeText={text => setUsername(text)} value={username} placeholder="Username" />
                    <Input onChangeText={text => setPassword(text)} value={password} placeholder="Password" blurOnSubmit={true} secureTextEntry={true} />
                    <Input onChangeText={text => setNome(text)} value={nome} placeholder="Nome" />
                    <Input onChangeText={text => setIdade(text)} value={idade} placeholder="Idade" />
                    <Input onChangeText={text => setCidade(text)} value={cidade} placeholder="Cidade" />
                    <Input onChangeText={text => setEstado(text)} value={estado} placeholder="Estado" />
                    <Button primary={true}>
                        <Link to='/'>
                            <Text>Cadastro</Text>
                        </Link>
                    </Button>
                </Form>
            </Section>
        </Background>
    );
}