import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/AuthNavigation/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
