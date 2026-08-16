import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import OCRService from '../services/OCRService';
import AIService from '../services/AIService';

export default function ScanScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [processing, setProcessing] = useState(false);

  async function takePhoto() {
    const result = await ImagePicker.launchCameraAsync({ quality: 0.8, base64: false });
    if (!result.cancelled) {
      setImage(result.uri);
      await processImage(result.uri);
    }
  }

  async function pickFromGallery() {
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.8, base64: false });
    if (!result.cancelled) {
      setImage(result.uri);
      await processImage(result.uri);
    }
  }

  async function processImage(uri) {
    setProcessing(true);
    try {
      const rawText = await OCRService.extractText(uri);
      const extracted = await AIService.classifyAndExtract(rawText, uri);
      navigation.navigate('Verify', { card: extracted, imageUri: uri });
    } catch (e) {
      console.error(e);
      alert('Failed to process image.');
    } finally {
      setProcessing(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Card</Text>
      <Pressable style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={pickFromGallery}>
        <Text style={styles.buttonText}>Choose From Gallery</Text>
      </Pressable>
      {image ? <Image source={{ uri: image }} style={styles.preview} /> : null}
      {processing ? <ActivityIndicator style={{ marginTop: 12 }} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginVertical: 12 },
  button: { backgroundColor: '#0066CC', padding: 12, borderRadius: 8, marginTop: 8, width: '80%' },
  buttonText: { color: '#fff', textAlign: 'center' },
  preview: { width: 300, height: 190, marginTop: 16, borderRadius: 6 }
});
