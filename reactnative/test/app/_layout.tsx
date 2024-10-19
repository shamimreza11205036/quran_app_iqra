import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import LoginScreen from './login';
import RegisterScreen from './register';
import TabsLayout from './(tabs)/_layout';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define your main stack screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* The tab navigation */}
        <Stack.Screen name="Tabs" component={TabsLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
