import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import type {DrawerNavigationProp} from '../navigation/types';

interface Props {
  navigation: DrawerNavigationProp;
}

const ContactScreen: React.FC<Props> = ({navigation}) => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:contact@example.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Get in touch with our team</Text>
      
      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Contact Information</Text>
        
        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>contact@example.com</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text style={styles.contactValue}>+1 (234) 567-8900</Text>
        </TouchableOpacity>
        
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Address:</Text>
          <Text style={styles.contactValue}>123 Main St{'\n'}City, State 12345</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 280,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contactItem: {
    marginBottom: 15,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ContactScreen;