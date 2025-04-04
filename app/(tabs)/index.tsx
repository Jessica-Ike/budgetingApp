import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles, bucketStyles } from '@/assets/styles/styles';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from '@/assets/styles/colors';
import { assignedBucketColor } from '@/assets/data/transactions';
import BucketItem from '@/components/bucket-item';

export default function Index() {
  const usersBuckets = Object.keys(assignedBucketColor) as Array<
    keyof typeof assignedBucketColor
  >;

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
              <Text style={styles.header}>
                Hello USER, let's organize this bread!
              </Text>
            </View>
            <View>
              <View style={bucketStyles.container}>
                {usersBuckets.map((bucket) => (
                  <BucketItem
                    key={bucket}
                    title={bucket}
                    used={100}
                    total={400}
                    color={assignedBucketColor[bucket]}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
