import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';


const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);


  // const takePhotoFromCamera = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //   });
  // };

  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 1200,
  //     height: 780,
  //     cropping: true,
  //   }).then((image) => {
  //     console.log(image);
  //     const imageUri = image.path;
  //     setImage(imageUri);
  //   });
  // };




  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImageFromGallary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  const submitPost = async () => {
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);


    setUploading(true);

    try {
      await storage().ref(filename).putFile(uploadUri);

      setUploading(false);
      Alert.alert(
        'Image Uploaded',
        'Your image is uploaded baby '
        );
    } catch (e) {
      console.log(e);
    }
  
    setImage(null);
  }


  return (
    <View style={styles.container}>

      <View style={styles.inputWrapper}>
        {image !== null ? <Image style={styles.addImage} source={{ uri: image }} /> : null}

        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={5}
          placeholder="What's in your mind?"
        />


        <TouchableOpacity style={styles.postBtnParent} onPress={submitPost} >
          <Text style={styles.postBtnChild}>Post</Text>

        </TouchableOpacity>

      </View>

      <ActionButton syle={styles.actionButton} buttonColor="rgba(0,0,0,1)">
        <ActionButton.Item buttonColor='#03a9f4' title="Open Camara" onPress={pickImageFromCamera}>
          <Ionicons name="camera-outline" size={24} style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#ba68c8' title="Open Gallary" onPress={pickImageFromGallary} >
          <Ionicons name="ios-images-outline" size={24} style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fedb9c',
  },
  textInput: {
    justifyContent: "center",
    alignItems: 'center',
    fontSize: 25,
    alignItems: 'center',
    width: '90%'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  postBtnParent: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 7
  },
  postBtnChild: {
    fontSize: 18,
    color: '#476282',
    fontWeight: 'bold'
  },
  statusWrapper: {
    justifyContent: "center",
    alignItems: 'center',
  },
  addImage: {
    width: '100%',
    height: '60%',
    marginBottom: 15,
    padding: 10
  }

});
