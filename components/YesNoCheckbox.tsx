import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Collapsible } from '@/components/basicItems/Collapsible';
import { ThemedText } from '@/components/basicItems/ThemedText';

import { TwoOptionToggle } from '@/components/basicItems/TwoOptionToggle';

type checkboxProps = {
  question: string;
  hint: string;
  options: {
    option1: string,
    option2: string,
  };
};

export function YesNoCheckbox({ question, hint, options }: checkboxProps) {

  return (
    <View style={styles.container}>
      {hint && <Collapsible title={question}>
        <ThemedText>{hint}</ThemedText>
      </Collapsible>}
      {!hint && <Text style={styles.question}>{question}</Text>}
      <TwoOptionToggle option1={options.option1} option2={options.option2}></TwoOptionToggle>
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