import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { logout } from '../components/Firebase/firebase';
import AuthUserProvider, { AuthUserContext } from '../navigation/AuthUserProvider';
import useStatusBar from '../hooks/useStatusBar';


const MyProfile = ({ navigation }) => {
    const { user } = useContext(AuthUserContext);


    console.log(user);
    console.log('User is in My profile')
    
    useStatusBar('dark-content');
    async function handleSignOut() {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <TouchableOpacity style={styles.addIcon}>
                <MaterialCommunityIcons onPress={() => navigation.navigate('Create')} name='plus' size={35} color='orange' />
            </TouchableOpacity>
            <View style={styles.container}>
                <Text>My Email : {user.email}</Text>
                <Text>Welcome Boy-1-UID : {user.uid}</Text>
                <Text>Welcome Boy-2-password : {user.providerId}</Text>

                <Button title="Sign Out" onPress={handleSignOut} />

            </View>

        </>
    );
}

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    addIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#000',
        borderRadius: 100,
    },

    shadow: {
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 5, width: 3 },
    }

});
