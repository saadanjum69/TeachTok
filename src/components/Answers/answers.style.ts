import { StyleSheet } from 'react-native';
import theme from '../../Theme/global';
import { Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    ansC: {
        position: "absolute",
        bottom: 200,
        paddingLeft: 12,
        gap: 8,
    },
    ansCardC:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius:10,
        marginTop:5

    },
    ansCard: {
        borderRadius: 6,
        padding: 10,
        width:330,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    answerText: {
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height:2 },
        textShadowRadius: 10,
        fontSize: 17,
        color: theme.colors.white,
        fontWeight:'bold',
        width: '93%',
    },
});
