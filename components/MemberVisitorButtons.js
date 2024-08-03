import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MemberVisitorButtons = () => {
  const handleMemberPress = () => {
    alert('Miembro presionado');
    // Añade la lógica deseada para el botón Miembro aquí
  };

  const handleVisitorPress = () => {
    alert('Visitante presionado');
    // Añade la lógica deseada para el botón Visitante aquí
  };

  return (
    <View style={styles.container}>
      <Button
        title="Miembro"
        onPress={handleMemberPress}
        color="#007bff" // Color azul para el botón de Miembro
      />
      <Button
        title="Visitante"
        onPress={handleVisitorPress}
        color="#6c757d" // Color gris para el botón de Visitante
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent:'center',
    width: '80%',
    marginVertical: 100,
    flex: 1,
  },
});

export default MemberVisitorButtons;
