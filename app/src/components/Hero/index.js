import React from 'react';
import { Text, ImageBackground, View, Image } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Hero = ({ filme }) => {
    return(
        <ImageBackground style={styles.hero} source={{uri: filme.capa}}>
            <Image resizeMode="contain" style={styles.logo} source={{uri: filme.logo}}/>
            <View style={styles.containerTop10}>
                <Image resizeMode="contain" style={styles.top10badge} source={require('../../assets/badge-top-10.png')} />
                <Text style={styles.top10text}>Top 1 de hoje no Brasil</Text>
            </View>
           <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} style={styles.gradient} />
        </ImageBackground>
    )
}

export default Hero;