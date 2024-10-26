import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Collapsible } from '@/components/basicItems/Collapsible';
import { ThemedText } from '@/components/basicItems/ThemedText';

import { ThreeOptionToggle } from '@/components/basicItems/ThreeOptionToggle';

type checkboxProps = {
  question: string;
  hint: string;
  options: {
    option1: string,
    option2: string,
    option3: string
  };
};

export function ThreeOptionCheckbox({ question, hint, options }: checkboxProps) {

  return (
    <View style={styles.container}>
      {hint && <Collapsible title={question}>
        <ThemedText>{hint}</ThemedText>
      </Collapsible>}
      {!hint && <Text style={styles.question}>{question}</Text>}
      <ThreeOptionToggle option1={options.option1} option2={options.option2} option3={options.option3}></ThreeOptionToggle>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  question: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: "auto"
  },
  button: {
    flex: 3,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#ddd',
  },
  text: {
    color: '#333',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#000',
  },
});