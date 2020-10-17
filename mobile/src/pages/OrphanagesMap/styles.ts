import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 16,
        justifyContent: "center",
        elevation: 3,
    },

    calloutText: {
        fontFamily: "Nunito_700Bold",
        color: "#0089a5"
    },

    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: "#fff",
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",

        elevation: 3,
    },

    footerText: {
        fontFamily: "Nunito_700Bold",
        color: "#8fa7b3"
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: "#15c3d6",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center", 
    },
});

export default styles;