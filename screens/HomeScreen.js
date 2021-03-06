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
        renderItem={({ item }) => <PostCard item={item} />}
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
    userName: 'Shivanshi Paliwal',
    userImg: require('../assets/userImg.jpg'),
    postTime: '10 min ago',
    postText: 'Enjoying with friend',
    postImg: require('../assets/userImg.jpg'),
    liked: true,
    likes: '22',
    comments: '5'
  },

  {
    id: '2',
    userName: 'khyali Lal Paliwal',
    userImg: require('../assets/userImg.jpg'),
    postTime: '90 min ago',
    postText: "Enjoying with friend's Wedding ",
    postImg: 'none',
    liked: false,
    likes: '1',
    comments: '20'
  },
  {
    id: '3',
    userName: 'lakshit  Paliwal',
    userImg: require('../assets/userImg.jpg'),
    postTime: '20 min ago',
    postText: 'Enjoying with friend',
    postImg: require('../assets/userImg.jpg'),
    liked: true,
    likes: '22',
    comments: '1'
  },
  {
    id: '4',
    userName: 'Amit Sharma',
    userImg: require('../assets/userImg.jpg'),
    postTime: '20 min ago',
    postText: 'Enjoying with friend',
    postImg: require('../assets/userImg.jpg'),
    liked: true,
    likes: '242',
    comments: '13'
  },
  {
    id: '5',
    userName: 'Sugam Sir',
    userImg: require('../assets/userImg.jpg'),
    postTime: '20 min ago',
    postText: 'Enjoying with friend',
    postImg: require('../assets/userImg.jpg'),
    liked: true,
    likes: '57',
    comments: '9'
  }
];