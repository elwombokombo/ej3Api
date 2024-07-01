import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../Tarjeta/Tarjeta';

interface BreedAttributes {
  name: string;
  description: string;
}

interface Breed {
  id: string;
  attributes: BreedAttributes;
}

const Dogis = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    const fetchDogis = async () => {
      try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        const data = await response.json();
        setBreeds(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogis();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {breeds.map((j) => (
        <Card key={j.id}>
          <Text style={styles.title}>{j.attributes.name}</Text>
          <Text style={styles.description}>{j.attributes.description}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default Dogis;
