import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color:white;
`;

export const Card = styled.View`
    background-color:#f7f7f7;
    width:100%;
    margin-bottom:25px;
    border-radius:15px;
`;

export const UserInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    padding: 0 15px ;
    `;

export const UserImg = styled.Image`
    width:50px;
    height:50px;
    border-radius:25px;
`;

export const UserInfoText = styled.View`
    flex-direction:column;
    justify-content:center;
    margin-left:10px;
    `;
export const UserName = styled.Text`
font-size:15px;
font-weight:bold;
`;

export const PostTime = styled.Text`
font-size:12px;
color:#777
`;

export const PostText = styled.Text`
font-size:15px;
padding: 15px 15px;
 `;


export const PostImg = styled.Image`
width:100%;
height:250px;
margin-top:5px
 `;


export const Divider = styled.View`
border-bottom-color:#eeeeee;
border-bottom-width:1px;
width:93%;
align-self:center;
margin-top:10px;
 `;

 export const InteractionWrapper = styled.View`
flex-direction:row;
justify-content:space-around;
padding:15px;
 `;

 export const Interaction = styled.TouchableOpacity`
 flex-direction:row;
 justify-content:center;
 border-radius:5px;
 padding:2px 5px;
 background-color: ${props => props.active ? '#fcdb9f73' : 'transparent' }
 `;

 export const InteractionText = styled.Text`
 font-size:12px;
  font-weight:300;
 margin: 5px 0 0 5px;
 color: ${props => props.active ? 'orange' :'#444' }; 
 `;

