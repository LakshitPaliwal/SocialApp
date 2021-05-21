import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Button, Image, TextInput ,TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePost = () => {
  const [image, setImage] = useState(null);


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };


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
        <TouchableOpacity style={styles.postBtnParent} onPress={() => { }} >
          <Text style={styles.postBtnChild}>Post</Text>
        </TouchableOpacity>

        </View>

      <ActionButton syle={styles.actionButton} buttonColor="rgba(0,0,0,1)">
        <ActionButton.Item buttonColor='#03a9f4' title="Open Camara" onPress={takePhotoFromCamera}>
          <Ionicons name="camera-outline" size={24} style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#ba68c8' title="Open Gallary" onPress={choosePhotoFromLibrary}>
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
    color:'white'
  },
  postBtnParent: {
    backgroundColor:'orange',
    paddingHorizontal: 20,
    paddingVertical:7,
    borderRadius:7
  },
  postBtnChild:{
    fontSize:18,
    color:'#476282',
    fontWeight:'bold'
  },
  statusWrapper:{
    justifyContent: "center",
    alignItems: 'center',
  },
  addImage:{
    width:'100%',
    height:250,
    marginBottom:15
  }
  
});
