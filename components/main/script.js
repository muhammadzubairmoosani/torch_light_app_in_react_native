import Torch from 'react-native-torch';
import {
    PermissionsAndroid,
    Alert
} from 'react-native'
import Img1 from './images/no-idea.png';
import Img2 from './images/idea.png'
import Img3 from './images/bad-idea.png';

export default class GetAccess {
    static image = Img1;
    static text = 'Idea';
    static torch = false;

    static async request_camera_runtime_permission() {
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

    static action(val) {
        if (val === 'badIdeaBtn') {
            this.image = this.image !== Img3 ? Img3 : Img1;
            this.text = 'Idea';
            this.torch = false;
            setTimeout(() => Torch.switchState(this.torch), 100);
        }
        else {
            this.image = this.image === Img1 || this.image === Img3 ? Img2 : Img1;
            this.text = this.text === 'Idea' ? 'No Idea' : 'Idea';
            this.torch = !this.torch;
            setTimeout(() => Torch.switchState(this.torch), 100);
        }
    }
}