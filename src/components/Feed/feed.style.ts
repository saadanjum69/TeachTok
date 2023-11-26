import { StyleSheet } from 'react-native';
import theme from '../../Theme/global';
import { Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        width: screenHeight,
        height: screenHeight,
        resizeMode: "cover",
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    question: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // equivalent to transparent_black
        borderRadius: 5,
        color: '#ffffff', // equivalent to white
        marginTop: '25%',
        marginLeft: "1%",
        width: '25%',
        fontSize: 21,
        padding: 3,
        fontWeight: 'bold',
        paddingLeft: 10,
        lineHeight:30
    },
    sideBarIconsContainer: {
        position: 'absolute',
        top: "51%",
        left: "40.5%",
        gap: 10,
    },
    img: {
        borderWidth: 1,
        borderColor: theme.colors.white,
        borderRadius: 50,
        width: 46,
        height: 46,
    },
    plusIcon: {
        position: 'relative',
        bottom: 12,
        backgroundColor: theme.colors.white,
        borderRadius: 50,

    },
    userName: {
        position: "absolute",
        bottom: 70,
        paddingLeft: 16
    },
    userNameText: {
        color: "white",
        fontSize: 19,
        fontWeight: "600",
        paddingBottom: 6
    },
    playlistC: {
        backgroundColor: "#1a1a1a",
        position: "absolute",
        height: 40,
        flexDirection: "row",
        bottom: 8,
        width: 412,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,   
        zIndex: 100000
    },
    playInfoC: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        marginLeft:7
    }
});
