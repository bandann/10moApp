import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');

  const handleReporte = () => {
    if (nombre && cedula) {
      Alert.alert('Iniciar Reporte', `Nombre: ${nombre}\nCédula: ${cedula}`);
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  const handleRegister = () => {
    // Navega a la pantalla de registro si está configurada
    Alert.alert('Registrarse', 'Navegar a la pantalla de registro');
    navigation.navigate('Registro'); // Descomenta esta línea cuando tengas configurada la pantalla de Registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
        keyboardType="numeric"
      />
      
      <Button title="Iniciar Reporte" onPress={handleReporte} />
      
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  link: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 16, // Añadido tamaño de fuente para consistencia
  },
});

export default LoginScreen;
