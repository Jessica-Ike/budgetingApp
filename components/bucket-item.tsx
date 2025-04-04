import { useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Card,
  IconButton,
  ProgressBar,
  Menu,
  Divider,
} from 'react-native-paper';
import {
  transactionItemStyles,
  bucketItemStyles,
} from '@/assets/styles/styles';

interface BucketItemProps {
  title: string;
  used: number;
  total: number;
  color: string;
}

export default function BucketItem({
  title,
  used,
  total,
  color,
}: BucketItemProps) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Card mode="contained" style={bucketItemStyles.container}>
      <Card.Title
        title={title}
        subtitle={`$${used} / $${total}`}
        left={() => (
          <View
            style={[transactionItemStyles.icon, { backgroundColor: color }]}
          />
        )}
        right={(props) => (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <IconButton {...props} icon="dots-vertical" onPress={openMenu} />
            }
            style={bucketItemStyles.popUp}
          >
            <Menu.Item onPress={() => {}} title="Add Money" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Add Expense" />
          </Menu>
        )}
      />
      <Card.Content>
        <ProgressBar progress={used / total} color={color} />
      </Card.Content>
      <Card.Actions>
        <Button
          style={bucketItemStyles.moneyButton}
          textColor={bucketItemStyles.moneyButton.color}
        >
          Add Money
        </Button>
        <Button style={bucketItemStyles.expenseButton}>Add Expense</Button>
      </Card.Actions>
    </Card>
  );
}
