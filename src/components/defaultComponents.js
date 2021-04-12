import styled from 'styled-components/native';
import { TouchableOpacity, TextInput } from 'react-native';

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    background-color: ${props => props.primary ? '#acaaad' : '#785dd8'};
    borderRadius: 50px;
    border: 1px solid #272335;
    align-items: center;
    justifyContent: center;
    margin:auto;
`;

export const Input = styled.TextInput`
    width: 90%;
    height: 40px;
    background-color: #fff;
    borderRadius: 50px;
    margin-top: ${props => props.marginTop ?? 'auto'};
`;
