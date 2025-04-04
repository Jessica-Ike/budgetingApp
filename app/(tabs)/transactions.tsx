import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles, transactionsStyles } from '@/assets/styles/styles';
import { PaperProvider } from 'react-native-paper';
import { paperTheme } from '@/assets/styles/colors';
import { transactions } from '@/assets/data/transactions';
import TransactionItem from '@/components/transaction-item';

export default function TransactionsView() {
  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={transactionsStyles.container}>
              <View style={transactionsStyles.header}>
                <Text>Latest transactions</Text>
              </View>
              {transactions.map((item) => (
                <TransactionItem key={item.date} data={item} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
