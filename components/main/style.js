import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#343A3E'
    },

    toggle: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 28,
        height: 38,
        marginRight: 20,
        marginTop: 12

    },

    imgSize: {
        width: 330,
        height: 330
    },

    btngroup: {
        display: 'flex',
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    },

    btn1: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'yellow',
        color: 'yellow',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 5,
        fontSize: 18
    },
    btn2: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'red',
        color: 'red',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 5,
        fontSize: 18
    }
});