import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    hero: {
        height: 200,
        width: '100%'
    },
    containerPadding: {
        padding: 20
    },
    buttonPlay: {
        marginVertical: 20
    },
    captionInfos: {
        marginTop: 20
    },
    menu: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between'
    },
    captionWhite: {
        color: '#fff'
    }, 
    buttonTemporada: {
        width: '100%',
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(255,255,255, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255, 0.21)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    temporadaName: {
        color: '#fff'
    },
    buttonBack: {
        padding: 20
    }

});

export default styles;