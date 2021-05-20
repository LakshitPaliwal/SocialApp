import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CreatePost = () => {
    return (
        <>
            <View style={styles.container}>
                <Text> Create NEW post</Text>
            </View>
        </>
    );
}

export default CreatePost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }

});
