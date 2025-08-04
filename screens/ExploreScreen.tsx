import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {TabNavigationProp} from '../navigation/types';

interface Props {
  navigation: TabNavigationProp;
}

const ExploreScreen: React.FC<Props> = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>Discover new content</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Featured Item 1</Text>
        <Text style={styles.cardDescription}>This is a featured item in the explore section.</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Featured Item 2</Text>
        <Text style={styles.cardDescription}>Another interesting item to explore.</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Featured Item 3</Text>
        <Text style={styles.cardDescription}>More content for you to discover.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

// Static navigation options for React Navigation v4
ExploreScreen.navigationOptions = {
  title: 'Explore',
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default ExploreScreen;