import React, { useState, useEffect } from 'react';

import {
  ScrollView
} from 'react-native';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Message, MessageProps } from '../Message'
import { styles } from './styles';

export function MessageList(){
  const { user } = useAuth()

  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function loadMessages(){
      const messagesResponse = await api.get<MessageProps[]>(`/messages/last3`)
      setCurrentMessages(messagesResponse.data)
    }


    loadMessages()
   }, [])



  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map(message => (<Message key={message.id} data={message} />))}
        
    </ScrollView>
  );
}