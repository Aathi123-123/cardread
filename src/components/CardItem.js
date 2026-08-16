import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardItem({ card }) {
  return (
    <View style={styles.row}>
      {card.imageUri ? <Image source={{ uri: card.imageUri }} style={styles.thumb} /> : null}
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{card.name || card.company || 'Untitled'}</Text>
        <Text style={styles.meta}>{card.designation || card.type || ''}</Text>
        <Text style={styles.meta}>{card.phone || card.email || ''}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 8, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  thumb: { width: 64, height: 40, marginRight: 12, borderRadius: 4, backgroundColor: '#f2f2f2' },
  name: { fontWeight: '700' },
  meta: { color: '#666', marginTop: 2 }
});
