import React, { useState } from 'react';
import { Text } from 'react-native';
import { Background, Section, ChangePage } from '../styledComponents/styledLogin';
import { Button, Input, Redirect } from '../components/defaultComponents';
import { Link } from 'react-router-native';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Background>
            <Section flex={1.3}>

            </Section>
            <Section flex={1.3}>
                <Input onChangeText={text => setUsername(text)} value={username} placeholder="Username">
                </Input>
                <Input onChangeText={text => setPassword(text)} value={password} placeholder="Password" blurOnSubmit={true} secureTextEntry={true}>
                </Input>
            </Section>
            <Section flex={1}>
                <Button primary={true} onPress={() => { setPassword(""); setUsername("") }}>
                    <Link to='/'>
                        <Text>Login</Text>
                    </Link>
                </Button>


                <Text>
                    Ou
                </Text>
                <Button >
                    <Link to='/cadastro'>
                        <Text>Cadastro</Text>
                    </Link>
                </Button>
            </Section>

        </Background>
    );
}