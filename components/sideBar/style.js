import { StyleSheet } from 'react-native';
// import {
//     createStyles,
//     maxWidth
// } from 'react-native-media-queries'

// export default createStyles(
//     maxWidth(479, {
//         aside: {
//             width: 'auto',
//             fontSize: 'smaller'
//         }
//     }),

//     maxWidth(479, {
//         nestedContainer: {
//             minHeight: '3.6em',
//             maxHeight: '3.6em'
//         }
//     }),

//     maxWidth(479, {
//         span: {
//             position: 'absolute',
//             left: 94,
//             fontWeight: 500,
//             fontSize: 'x-large'
//         }
//     }),

//     aside = {
//         position: 'absolute',
//         right: '-321px',
//         height: '100vh',
//         width: '20em',
//         margin: 0,
//         backgroundColor: '#fff',
//         transition: '0.3s',
//         overflow: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'stretch'
//     },

//     header = {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#5bce5e',
//         height: '4.5em',
//         minHeight: '4.5em',
//         paddingRight: 11,
//         paddingLeft: 11
//     },

//     title = {
//         fontSize: 'x-large',
//         color: '#fff',
//         fontWeight: 600
//     },

//     body = {
//         marginRight: 7,
//         marginLeft: 7,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },

//     icon = {
//         fontSize: 'x-large'
//     },

//     footer = {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#5bce5e',
//         minHeight: '2.5em'
//     },

//     footerTitle = {
//         color: '#fff',
//         fontSize: 'inherit',
//         fontWeight: 600
//     },
// )


export default StyleSheet.create({
    aside: {
        position: 'absolute',
        right: '-321px',
        // height: '100vh',
        width: '20rem',
        margin: 0,
        backgroundColor: '#fff',
        // transition: '0.3s',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5bce5e',
        // height: '4.5rem',
        // minHeight: '4.5rem',
        paddingRight: 11,
        paddingLeft: 11
    },

    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600'
    },

    body: {
        marginRight: 7,
        marginLeft: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        fontSize: 20
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5bce5e',
        // minHeight: '2.5rem'
    },

    footerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
})

    // @media(max - width: 479px) {
    //     aside {
    //         width: auto;
    //         font - size: smaller;
    //     }
    // }



    // @media(max - width: 479px) {
    //     nestedContainer {
    //         min - height: 3.6em;
    //         max - height: 3.6em;
    //     }
    // }


    // @media(max - width: 479px) {
    //      span {
    //         position: absolute;
    //         left: 94px;
    //         font - weight: 500;
    //         font - size: x - large;
    //     }
    // }

//     .show {
//     right: 0;
//     -webkit - box - shadow: -3px 0px 10px grey;
//     box - shadow: -3px 0px 10px grey;
// }
