import { Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/assets/styles/styles';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from '@/assets/styles/colors';

export default function Analytics() {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <Text>Analyze!!</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
