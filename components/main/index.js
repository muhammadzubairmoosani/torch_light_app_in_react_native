import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style.js';
import GetAccess from './script.js';
import barIcon from './images/bar-icon.png';
// import SideBar from '../sideBar/index.js'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: GetAccess.image,
            text: GetAccess.text,
            torch: GetAccess.torch
        }
    }

    async componentDidMount() {
        await GetAccess.request_camera_runtime_permission()
    }

    changeHandle(val) {
        GetAccess.action(val);
        this.setState({
            image: GetAccess.image,
            text: GetAccess.text,
            torch: GetAccess.torch
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.toggle} source={barIcon} />
                <Image style={styles.imgSize} source={this.state.image} />
                <View style={styles.btngroup}>

                    <TouchableOpacity onPress={() => this.changeHandle()} activeOpacity={0.6}>
                        <Text style={styles.btn1}>{this.state.text}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.changeHandle('badIdeaBtn')} activeOpacity={0.6}>
                        <Text style={styles.btn2}>Bed Idea</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};