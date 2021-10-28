import React from 'react';
import {
  View
} from 'react-native';

import { styles } from './styles';
import { Button } from '../Button'
import { COLORS } from '../../theme';
import { useAuth } from '../../hooks/auth';


export function SignInBox(){
  const { signIn, isSignIn } = useAuth();


  return (
    <View style={styles.container}>
        <Button 
            title="Entrar com GitHub"
            color={ COLORS.BLACK_PRIMARY }
            backgroundColor= { COLORS.YELLOW }
            icon="github"
            onPress={signIn}
            isLoading={isSignIn}
        />
    </View> 
  );
}