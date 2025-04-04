import { View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { styles } from '@/assets/styles/styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Sorry this page does not exist. Go back to home.
        </Link>
      </View>
    </>
  );
}
