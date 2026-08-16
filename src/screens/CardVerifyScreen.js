import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Image, Alert } from 'react-native';
import { saveCard, findDuplicate } from '../storage/Db';

export default function CardVerifyScreen({ route, navigation }) {
  const { card, imageUri } = route.params || {};
  const [form, setForm] = useState(card || {});

  async function handleSave() {
    // basic duplicate detection
    const dup = await findDuplicate(form);
    if (dup) {
      const keep = await new Promise(resolve => {
        Alert.alert(
          'Possible duplicate',
          'Possible duplicate found. Save anyway?',
          [
            { text: 'Cancel', onPress: () => resolve(false), style: 'cancel' },
            { text: 'Save', onPress: () => resolve(true) }
          ],
          { cancelable: true }
        );
      });
      if (!keep) return;
    }
    await saveCard({ ...form, imageUri, createdAt: new Date().toISOString() });
    navigation.navigate('Cards');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>We Found This</Text>
      {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}
      <Field label="Name" value={form.name} onChange={v => setForm({ ...form, name: v })} />
      <Field label="Company" value={form.company} onChange={v => setForm({ ...form, company: v })} />
      <Field label="Designation" value={form.designation} onChange={v => setForm({ ...form, designation: v })} />
      <Field label="Phone" value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
      <Field label="Email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
      <Field label="Type" value={form.type} onChange={v => setForm({ ...form, type: v })} />

      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Confirm & Save</Text>
      </Pressable>
    </ScrollView>
  );
}

function Field({ label, value, onChange }) {
  return (
    <View style={{ width: '100%', marginTop: 10 }}>
      <Text style={{ fontWeight: '600' }}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '700' },
  image: { width: 320, height: 190, marginVertical: 12, borderRadius: 6 },
  input: { borderWidth: 1, borderColor: '#ddd', width: '100%', padding: 8, borderRadius: 6, marginTop: 6 },
  saveButton: { backgroundColor: '#0A8', padding: 12, borderRadius: 8, marginTop: 18, width: '80%' }
});
