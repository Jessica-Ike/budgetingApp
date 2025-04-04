import { StyleSheet } from 'react-native';
import { paperTheme } from '@/assets/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paperTheme.colors.background,
    alignItems: 'center',
    overflowX: 'hidden',
    paddingTop: 2,
    flexDirection: 'column',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: paperTheme.colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: paperTheme.colors.text,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  tabBar: {
    backgroundColor: paperTheme.colors.background,
  },
  scrollView: {
    backgroundColor: paperTheme.colors.background,
    flexGrow: 1,
  },
  safeAreaView: {
    backgroundColor: paperTheme.colors.background,
    flex: 1,
  },
});

const transactionsStyles = StyleSheet.create({
  parentView: {
    height: '50%',
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    marginTop: 20,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
});
const transactionItemStyles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentLayout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
  },
  location: {
    color: '#666',
    marginBottom: 6,
  },
  date: {
    color: '#666',
    fontSize: 13,
  },
  amount: {
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  icon: {
    height: 36,
    width: 36,
    borderRadius: 6,
    marginRight: 12,
    alignSelf: 'flex-start',
  },
});

const bucketStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
});
const bucketItemStyles = StyleSheet.create({
  container: {
    backgroundColor: paperTheme.colors.accent,
    marginBottom: 10,
  },
  moneyButton: {
    borderColor: paperTheme.colors.secondary,
    color: paperTheme.colors.secondary,
  },
  expenseButton: {
    backgroundColor: paperTheme.colors.secondary,
  },
  popUp: {
    marginTop: -50,
  },
});

export {
  styles,
  transactionsStyles,
  transactionItemStyles,
  bucketStyles,
  bucketItemStyles,
};
