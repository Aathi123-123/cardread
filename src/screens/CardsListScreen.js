import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { getAllCards } from '../storage/Db';
import CardItem from '../components/CardItem';

export default function CardsListScreen() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const all = await getAllCards();
    setCards(all);
  }

  const filtered = cards.filter(c => {
    if (!query) return true;
    const j = JSON.stringify(c).toLowerCase();
    return j.includes(query.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards</Text>
      <TextInput placeholder="Search..." style={styles.search} value={query} onChangeText={setQuery} />
      <FlatList data={filtered} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <CardItem card={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  search: { borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 6, marginBottom: 12 }
});
