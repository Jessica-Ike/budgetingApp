import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/assets/styles/styles';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from '@/assets/styles/colors';
import { Text } from 'react-native';

export default function BucketView() {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <Text>See individual buckets!</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
