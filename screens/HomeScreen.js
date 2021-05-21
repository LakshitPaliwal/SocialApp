import React from 'react';
import { Container } from '../styles/HomeStyles';
import PostCard from '../components/PostCard';
import { FlatList } from 'react-native';



const HomeScreen = () => {
  console.log('User is in Home Section')
  return (
    <Container>
      <FlatList
        data={PostData}
        renderItem={({ item }) => <PostCard item={item} /> }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
export default HomeScreen;


const PostData = [
  {
    id: '1',
    userName: 'jamana Paliwal',
    userImg: require('../assets/userImg.jpg'),
    postTime: '10 mina ago',
    postText: 'enyouung with friend',
    postImg: require('../assets/userImg.jpg'),
    liked: true,
    likes: '22',
    comments: '5'
  },

  {
    id: '2',
    userName: 'khyali Lal Paliwal',
    userImg: require('../assets/userImg.jpg'),
    postTime: '90 mina ago',
    postText: 'enyouung with friend',
    postImg: 'none',
    liked: false,
    likes: '5',
    comments: '20'
  },
  {
    id: '3',
    userName: 'lakshit Lal Paliwal',
    userImg: require('../assets/userImg.jpg'),
    postTime: '100 mina ago',
    postText: 'enyouung with friend',
    postImg: require('../assets/userImg.jpg'),
    liked: true,
    likes: '22',
    comments: '5'
  }
];