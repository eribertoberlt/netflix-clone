import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bgDark: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        marginBottom: 50,
        width: '100%',
        height: 50,
        alignItems:'center',
    },
    logo: {
        flex: 1,
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    marginBottom: {
        marginBottom: 20,
        fontSize: 14
    },
    textSmall: {
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        marginTop:30,
        fontSize: 12
    }
})

export default styles;