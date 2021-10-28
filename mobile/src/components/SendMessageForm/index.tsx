import React, { useState } from 'react';

import {
    TextInput,
  View, KeyboardAvoidingView,
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
    const [message, setMessage] = useState("");
    const [sendingMessage, setSendingMessage] = useState(false)

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
        />

    </View>
  );
}