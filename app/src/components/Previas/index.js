import React from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Previas = ({ filmes }) => {
    return(
        <FlatList horizontal style={styles.flatListContainer} data={filmes} renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={{marginLeft: index == 0 ? 20 : 0, marginRight: 10}}>
                <View style={styles.oval}>
                    <Image style={styles.capa} source={{uri: item.capa}} />
                    <Image resizeMode="contain" style={styles.logo} source={{uri: item.logo}} />
                    <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} style={styles.gradient} />
                </View>
            </TouchableOpacity>
            )}
        />
    )
}

export default Previas;