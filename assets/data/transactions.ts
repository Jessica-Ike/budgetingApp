import { bucketColors } from '../styles/colors';

type BucketType = keyof typeof assignedBucketColor;

interface TransactionData {
  title: string;
  location: string;
  date: string;
  amount: string;
  bucket: BucketType;
}

const transactions: TransactionData[] = [
  {
    title: 'Akamai Coffee Shop',
    location: 'Kihei, HI',
    date: 'Today, 13:21',
    amount: '8.90',
    bucket: 'Food',
  },
  {
    title: 'Shops at Wailea',
    location: 'Wailea, HI',
    date: 'Yesterday, 20:07',
    amount: '8.90',
    bucket: 'Shopping',
  },
  {
    title: 'Ono Hawaiian BBQ',
    location: 'Paia, HI',
    date: 'Thursday',
    amount: '8.90',
    bucket: 'Food',
  },
  {
    title: 'Fond',
    location: 'Lahaina, HI',
    date: 'Wednesday',
    amount: '8.90',
    bucket: 'Food',
  },
  {
    title: 'Ula’Ula Cafe',
    location: 'Waihee-Waiehu, HI',
    date: 'Tuesday',
    amount: '8.90',
    bucket: 'Food',
  },
  {
    title: "Tante's Fishmarket",
    location: 'Wailuku, HI',
    date: 'Monday',
    amount: '8.90',
    bucket: 'Food',
  },
  {
    title: 'Groceries',
    location: 'Supermarket',
    date: '2023-03-01',
    amount: '50.00',
    bucket: 'Food',
  },
  {
    title: 'Bus Ticket',
    location: 'City Transport',
    date: '2023-03-02',
    amount: '2.50',
    bucket: 'Transportation',
  },
];

const assignedBucketColor = {
  Food: bucketColors[1],
  Shopping: bucketColors[2],
  Transportation: bucketColors[3],
  Housing: bucketColors[4],
  Insurance: bucketColors[5],
  Education: bucketColors[6],
  'Personal Care': bucketColors[7],
  Other: bucketColors[8],
};

export { transactions, assignedBucketColor };
