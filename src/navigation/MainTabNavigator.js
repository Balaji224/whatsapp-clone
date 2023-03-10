import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import ChatsScreen from "../screens/ChatScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen name="Status" component={NotImplementedScreen} />
      <Tab.Screen name="Calls" component={NotImplementedScreen} />
      <Tab.Screen name="Camera" component={NotImplementedScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={NotImplementedScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
