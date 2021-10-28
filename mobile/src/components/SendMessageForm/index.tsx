import React, { useState } from 'react';

import {
    TextInput,
  View, KeyboardAvoidingView, Alert, Keyboard,
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
    const [message, setMessage] = useState("");
    const [sendingMessage, setSendingMessage] = useState(false)

    async function handleSendMessage(){
      const messageFormated = message.trim();

      if(messageFormated.length > 0){
        setSendingMessage(true);
        await api.post('/messages', { message: messageFormated });

        setMessage("");
        Keyboard.dismiss();
        setSendingMessage(false);
        
        Alert.alert("Mensagem enviada com sucesso!");
      }else {
        Alert.alert('Escreva uma mensagem antes de enviar.')
      }
    }

  return (
    <View style={styles.container}>
        <TextInput 
            keyboardAppearance="dark"
            placeholder="Qual sua expectativa para o evento?"
            placeholderTextColor={COLORS.GRAY_PRIMARY}
            style={styles.input}
            multiline
            maxLength={140}
            onChangeText={setMessage}
            value={message}
            editable={!sendingMessage}
        />

        <Button 
            title="Enviar mensagem"
            color={COLORS.WHITE}
            backgroundColor={COLORS.PINK}
            isLoading={sendingMessage}
            onPress={handleSendMessage}
        />

    </View>
  );
}