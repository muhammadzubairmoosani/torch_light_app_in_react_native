import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    Alert
} from 'react-native';
import styles from './style.js';
import img1 from './images/no-idea.png';
import img2 from './images/idea.png';
import img3 from './images/bad-idea.png';
import toggle from './images/bar-icon.png';
// import SideBar from '../sideBar/index.js'
import Torch from 'react-native-torch';

export async function request_camera_runtime_permission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                'title': 'ReactNativeCode Camera Permission',
                'message': 'ReactNativeCode App needs access to your Camera.'
            }
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert("Camera Permission Granted.");
        }
        else {
            Alert.alert("Camera Permission Not Granted");
        }
    } catch (err) {
        console.warn(err)
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: img1,
            text: 'Idea',
            torchSwitch: false
        }
    }

    async componentDidMount() {
        await request_camera_runtime_permission()
    }

    changeHandle(btn) {
        if (btn === 'badIdeaBtn') {
            this.setState({
                image: this.state.image !== img3 ? img3 : img1,
                text: 'Idea',
                torchSwitch: false
            })
            setTimeout(() => Torch.switchState(this.state.torchSwitch), 100);
        }
        else {
            this.setState({
                image: this.state.image === img1 || this.state.image === img3 ? img2 : img1,
                text: this.state.text === 'Idea' ? 'No Idea' : 'Idea',
                torchSwitch: !this.state.torchSwitch
            })
            setTimeout(() => Torch.switchState(this.state.torchSwitch), 100);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.toggle} source={toggle} />
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