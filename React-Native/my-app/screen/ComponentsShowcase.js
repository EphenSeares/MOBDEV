import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ComponentsShowcase = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Sview}>
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
            <Text style={styles.text}>Hello Welcome to React Native!!!</Text>
            <Text style={styles.text}>You clicked {count} times</Text>

            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>Click me!</Text>
            </TouchableOpacity>

        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/logo.png')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
  },

  text: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },

  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    width: 200,
  },

  Sview: {
    flexGrow: 1,
    justifyContent: 'center',  
    alignItems: 'center',       
    backgroundColor: 'plum',
    padding: 20,
  },
});

export default ComponentsShowcase;
