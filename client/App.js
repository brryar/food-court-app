import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Order from "./src/screens/Order";
import LoginPage from "./src/screens/LoginPage";
import Slider from "./src/screens/Slider";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginPage} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Slider" component={Slider} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
