import React from 'react';
import styles from './styles';
import { Image, View, TouchableOpacity } from 'react-native';
import { Caption, Title } from 'react-native-paper';

const Episodio = ({ episodio }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.capa} source={{uri: episodio.capa}}/>
                <View>
                    <Title>{episodio.numero}. {episodio.titulo}</Title>
                    <Caption>45 mins</Caption>
                </View>
            </View>
            <Caption>
                {episodio.descricao}
            </Caption>
        </TouchableOpacity>
    )
} 

export default Episodio;