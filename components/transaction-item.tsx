import { View, Text } from 'react-native';
import { transactionItemStyles as styles } from '@/assets/styles/styles';
import { assignedBucketColor } from '@/assets/data/transactions';

interface TransactionItemProps {
  data: {
    title: string;
    location: string;
    date: string;
    amount: string;
    bucket: keyof typeof assignedBucketColor;
  };
}

export default function TransactionItem({ data }: TransactionItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.contentLayout}>
          <View
            style={[
              styles.icon,
              { backgroundColor: assignedBucketColor[data.bucket] },
            ]}
          />
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.location}>{data.location}</Text>
            <Text style={styles.date}>{data.date}</Text>
          </View>
        </View>
        <Text style={styles.amount}>${data.amount}</Text>
      </View>
    </View>
  );
}
