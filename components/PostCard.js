import React from 'react';
import { Card, UserInfo, UserInfoText, UserImg, UserName, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider } from '../styles/HomeStyles';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';



const PostCard = ({ item }) => {

    let likedIcon = item.liked ? 'heart' : 'hearto';
    let likedColorIcon = item.liked ? 'orange' : '#333';

    let likeText;
    let commentText;

    //for likes counts
    if (item.likes == 1) {
        likeText = '1 Like';
    } else if (item.likes > 1) {
        likeText = item.likes + ' ' + 'Likes';
    }
    else {
        likedText = 'Like';
    }

    //for comments counts
    if (item.comments == 1) {
        commentText = '1 Comment';
    } else if (item.comments > 1) {
        commentText = item.comments + ' ' +'Comments';
    }
    else {
        commentText = 'Comment';
    }

    return (
        <>
            <Card>
                <UserInfo>
                    <UserImg source={item.userImg} />
                    <UserInfoText>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{item.postTime}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>{item.postText}</PostText>

                {item.postImg !== 'none' ? <PostImg source={item.postImg} /> : <Divider />}

                <InteractionWrapper>
                    <Interaction active={item.liked}>
                        <AntDesign name={likedIcon} size={28} color={likedColorIcon} />
                        <InteractionText active={item.liked}>{likeText} </InteractionText>
                    </Interaction>
                    <Interaction>
                        <FontAwesome5 name="comment" size={28} color="black" />
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>

        </>
    );
}
export default PostCard;

