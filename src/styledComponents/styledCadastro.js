import styled from 'styled-components/native';
import { View, TouchableOpacity, ScrollView } from 'react-native';

export const Background = styled.View`
    background-color: #785dd8;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justifyContent: center;
`;

export const Section = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justifyContent: space-evenly; 
    flex-direction: column;
`;


export const Form = styled.ScrollView`
    height: 80%;
    width: 100%;
    display: flex;
    justifyContent: space-evenly; 

    flex-direction: column;
`

