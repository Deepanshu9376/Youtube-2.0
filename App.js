import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import Search from './src/Screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from './src/Screens/VideoPlayer';
import Explore from './src/Screens/Explore';
import Subscription from './src/Screens/Subscription';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { reducer } from './src/reducers/reducer';

const store=createStore(reducer);
const Stack = createStackNavigator();
const Tabs=createBottomTabNavigator();

const RootHome=()=>{
  return (
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if (route.name==='subscription'){
          iconName= 'subscriptions';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tabs.Screen name='home' component={Home} options={{headerShown: false}}/>
      <Tabs.Screen name='explore' component={Explore} options={{headerShown: false}}/>
      <Tabs.Screen name='subscription' component={Subscription} options={{headerShown: false}}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='rootHome'component={RootHome}/>
        <Stack.Screen name='search' component={Search}/>
        <Stack.Screen name='videoplayer' component={VideoPlayer}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
