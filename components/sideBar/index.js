import React from 'react';
import styles from './style.js';
import { Text, View, Image, Linking } from 'react-native';
import env from './images/env.png';
import git from './images/git2.png';
export default class SideBar extends React.Component {
    render() {
        return (
            <View className={this.props.value} style={styles.aside}>
                <View style={styles.header}>
                    <Text style={styles.title}>About</Text>
                </View>
                <View style={styles.body}>
                    <Text>Zakat Calculator</Text>
                    <Text>A simple web-app calculate zakat.</Text>
                    <Text>Developer Info</Text>
                    <Text>Name: Muhammad Zubair Moosani</Text>
                    <Image source={env} />

                    {/* <i className="far fa-envelope" style={styles.icon}></i> */}
                    <Text
                        onPress={() => {
                            return Linking.openURL('mailto:mailto:muhammadzubairmoosani@gmail.com?subject=abcdefg&body=body')
                        }}>
                        muhammadzubairmoosani@gmail.com
                    </Text>
                    <Text>Visit Link:</Text>
                    <Image source={git} />

                    {/* <i className="fab fa-github" style={styles.icon}></i> */}
                    <Text onPress={() => {
                        return Linking.openURL('https://www.github.com/muhammadzubairmoosani')
                    }} target="_blank">
                        GitHub
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Text>W3C Validate</Text>
                </View>
            </View>
        )
    };
}