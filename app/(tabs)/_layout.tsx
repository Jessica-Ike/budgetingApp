import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { paperTheme } from '@/assets/styles/colors';

export default function TabLayout() {
  const appName = 'BudgetGood';
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: paperTheme.colors.primary,
        headerStyle: {
          backgroundColor: paperTheme.colors.background,
        },
        headerShadowVisible: false,
        headerTintColor: paperTheme.colors.text,
        tabBarStyle: {
          backgroundColor: paperTheme.colors.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: appName,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'card' : 'card-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'list-circle-sharp' : 'list-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
