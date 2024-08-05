import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';

const TitheCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tithe, setTithe] = useState(null);

  const calculateTithe = () => {
    const amountNum = parseFloat(amount);
    if (!isNaN(amountNum)) {
      setTithe((amountNum * 0.1).toFixed(2));
    } else {
      setTithe(null);
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Title title="Calculadora de Diezmos" />
      <Card.Content>
        <TextInput
          label="Cantidad"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button mode="contained" onPress={calculateTithe} style={styles.button}>
          Calcular 10%
        </Button>
        {tithe !== null && (
          <Text style={styles.result}>El 10% de ${amount} es ${tithe}</Text>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TitheCalculator;
