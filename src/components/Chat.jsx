import React from 'react'
import { useContext } from 'react';
import Camera from '../imgs/camera.png';
import Plus from '../imgs/plus.png';
import Furthermore from '../imgs/furthermore.png';
import Messages from './Messages';
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Plus} alt="" />
          <img src={Furthermore} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;