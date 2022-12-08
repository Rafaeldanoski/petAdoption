import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';


const MyImage = () => (
    <View>
        <Image
            style={styles.MyImage}
            source={MyImage}
        />
    </View>
);

const styles = StyleSheet.create({
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 400,
    },
});

export default MyImage;