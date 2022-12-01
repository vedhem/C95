import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SocialScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Social screen!</Text>
            </View>
        )
    }
}