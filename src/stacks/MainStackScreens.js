import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { 
  HomeScreen, 
  MessageScreen, 
  PostScreen, 
  NotificationScreen, 
  ProfileScreen 
} from "../screens";

export default MainStackScreens = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: "#222",
      paddingTop: 6,
      height: 80,
      paddingBottom: 24,
      borderTopWidth: "1px",
      borderTopColor: "#fff"
    }
  }

  const screenOptions = ({route}) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "ios-home";

      switch (route.name) {
        case "Home":
          iconName = "ios-home";
          break;
        
        case "Message":
          iconName = "ios-chatbubbles";
          break;
        
        case "Notification":
          iconName = "ios-notifications";
          break;
        
        case "Profile":
          iconName = "ios-person";
          break;
                
        default:
          iconName = "ios-home";
      }

      if (route.name === "Post") {
        return (
          // <View
          //   style={{
          //     flex: 1,
          //     width: 36,
          //     height: 36,
          //     borderRadius: 18,
          //     borderWidth: 1,
          //     borderColor: "#fff",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     overflow: "hidden", 
          //   }}
          // >
            <Ionicons 
              name="ios-add-circle" 
              size={48} 
              color="#856088" 
              style={{
                // flex: 1,
                // alignSelf: "center",
                // textAlignVertical: "center",
              }}  
            />
          // </View>
        )
      }

      return <Ionicons name={iconName} size={24} color={focused ? "#fff" : "#777"} />;
    }
  })

  return (
    <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Message" component={MessageScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
      <MainStack.Screen name="Notification" component={NotificationScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
}
