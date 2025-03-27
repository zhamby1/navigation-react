import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Settings } from "react-native";
import Home from "./Home"
import News from "./News";
import Settings from "./Settings";


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//add options to the Details screen to accept a route
//header right which is a function that returns a button on the upper right hand part of the screen (upper portion is known as the header)
//return a button with the text of Buy and create a route paramater called stock that equal 0


export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="News" component={News} />
         <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      )}

      {Platform.OS === "android" && (
        <Drawer.Navigator>
         <Drawer.Screen name="Home" component={Home} />
         <Drawer.Screen name="News" component={News} />
         <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}

      

    </NavigationContainer>
  );
}