import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/basicItems/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components//basicItems/ThemedText';
import { ThemedView } from '@/components/basicItems/ThemedView';

import { CardWithCollapsibleText } from '@/components/cardTest';
import { TextInputField } from '@/components/TextInputField';
import { TextInputFieldLong } from '@/components/TextInputFieldLong';
// import { YesNoToggle } from '@/components/YesNoToggle'
import { ThreeOptionCheckbox } from '@/components/ThreeOptionCheckbox'
import { YesNoCheckbox } from '@/components/YesNoCheckbox'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>

      <ThreeOptionCheckbox
        question='blah blah?'
        hint="hint"
        options={{
          option1: 'Yes',
          option2: 'No',
          option3: 'N/A',
        }}>
      </ThreeOptionCheckbox>

      <TextInputField question = "В голове моей опилки?" placeholder = "Не беда" minorText = ""></TextInputField>

      <TextInputFieldLong question = "В голове моей опилки?" placeholder = "Не беда" minorText = ""></TextInputFieldLong>

      {/* <ThreeOptionToggle option1="Yes" option2="No" option3="N/A"></ThreeOptionToggle> */}

      <YesNoCheckbox
        question='blah blah?'
        hint="hint"
        options={{
          option1: 'Yes',
          option2: 'No',
        }}></YesNoCheckbox>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
