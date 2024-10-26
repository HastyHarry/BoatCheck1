import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Colors } from '@/constants/Colors';

type CardWithCollapsibleTextProps = {
  title: string;
  majorText: string;
  minorText: string;
};

export function CardWithCollapsibleText({ title, majorText, minorText }: CardWithCollapsibleTextProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const theme = 'light';

  const colors = [
    Colors.light.card,      // Color A
    Colors.light.cardDone, // Color B
    Colors.light.cardFailed,              // Color C - example color, replace with desired value
  ];

  const handlePress = () => setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);

  const handleLongPress = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.status === 'granted') {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.canceled) {
        console.log('Photo taken:', result);
      }
    } else {
      alert('Camera permission is required to take a photo.');
    }
  };

  const toggleMinorText = () => setIsOpen((prev) => !prev);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: colors[colorIndex] },
      ]}
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name="information-circle-outline"
          size={24}
          color={Colors.light.icon}
          onPress={toggleMinorText}
          style={styles.infoIcon}
        />
      </View>
      <Text style={styles.majorText}>{majorText}</Text>
      {isOpen && (
        <View style={styles.collapsibleContent}>
          <Text style={styles.minorText}>{minorText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoIcon: {
    marginLeft: 8,
  },
  majorText: {
    fontSize: 14,
    marginTop: 8,
  },
  collapsibleContent: {
    marginTop: 8,
  },
  minorText: {
    fontSize: 14,
  },
});