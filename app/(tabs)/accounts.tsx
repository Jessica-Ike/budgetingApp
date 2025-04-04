import { Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/assets/styles/styles';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from '@/assets/styles/colors';

export default function Account() {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <Text>Account!!</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
