import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';

export const Background = styled.View`
    background-color: #c42988;
    height: 100%;
    width: 100%;
    display: flex;
    
`;

export const Section = styled.View`
    flex:${props => props.flex ?? 1};
    width: 100%;
    align-items: center;
    justifyContent: space-evenly; 
    flex-direction: column;
`;
