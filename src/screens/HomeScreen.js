import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Smart Card Organizer</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Scan')}>
        <Text style={styles.buttonText}>Scan Card</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Cards')}>
        <Text style={styles.buttonText}>Cards</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
  button: { backgroundColor: '#0066CC', padding: 14, borderRadius: 8, marginTop: 12, width: '80%' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' }
});
