import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleNavigationToPoints = () => {
    navigation.navigate('Points', { uf, city });
  };

  const handleHideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground
          source={require('../../assets/home-background.png')}
          imageStyle={{ width: 274, height: 368 }}
          style={styles.container}
        >
          <View style={styles.main}>
            <Image source={require('../../assets/logo.png')} />
            <View>
              <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
              <Text style={styles.description}>
                Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a UF"
              value={uf}
              maxLength={2}
              autoCapitalize="characters"
              autoCorrect={false}
              onChangeText={setUf}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite a cidade"
              autoCorrect={false}
              value={city}
              onChangeText={setCity}
            />

            <RectButton style={styles.button} onPress={handleNavigationToPoints}>
              <View style={styles.buttonIcon}>
                <Feather name="arrow-right" color="#fff" size={24} />
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
