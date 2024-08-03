import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text, Modal, TextInput } from 'react-native';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');

  const handleMemberPress = () => {
    setModalVisible(true); // Muestra el modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Cierra el modal
  };

  const handleLogin = () => {
    if (nombre && cedula) {
      alert(`Nombre: ${nombre}\nCédula: ${cedula}`);
      handleCloseModal(); // Cierra el modal después del login
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleVisitorPress = () => {
    alert('Visitante presionado');
    // falta la lógica  para el botón Visitante aquí
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>10mo App v.1</Text>

      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#0056b3' : '#007bff' }
        ]}
        onPress={handleMemberPress}
      >
        <Text style={styles.buttonText}>Miembro</Text>
      </Pressable>
      
      <View style={styles.space} />
      
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#5a6268' : '#6c757d' } 
        ]}
        onPress={handleVisitorPress}
      >
        <Text style={styles.buttonText}>Visitante</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          // Esto se llama cuando el usuario presiona el botón de retroceso en Android
          handleCloseModal();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Iniciar Sesión</Text>
            
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
            <Text> Registrarme</Text>
            
            <Pressable
              style={styles.modalButton}
              onPress={handleLogin}
            >
              <Text style={styles.modalButtonText}>Iniciar Sesión</Text>
            </Pressable>

            <Pressable
              style={[styles.modalButton, { backgroundColor: '#6c757d' }]} 
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 15,
    marginVertical: 100,
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  space: {
    height: 20,
  },
  titulo: {
    fontSize: 24, 
    marginTop: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  modalButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
