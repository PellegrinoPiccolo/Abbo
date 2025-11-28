import React from 'react'
import { View } from 'react-native'
import Home from './index'
import { Tabs } from 'expo-router'
import TabBarButton from '../../components/TabBarButton'
import { Ionicons } from '@expo/vector-icons'
import useTheme from '../../hook/ThemeHook'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HomeIcon from '../../assets/icons/home.svg'
import HomeFilled from '../../assets/icons/home_filled.svg'
import Person from '../../assets/icons/person.svg'
import PersonFilled from '../../assets/icons/person_filled.svg'
import LeaderBoard from '../../assets/icons/leaderboard.svg'
import LeaderBoardFilled from '../../assets/icons/leaderboard_filled.svg'

const _layout = () => {

  const {colorPalette} = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: colorPalette.primary,
        tabBarStyle: { 
          backgroundColor: colorPalette.background,
          height: 70 + insets.bottom,
          paddingTop: 10,
          borderTopColor: colorPalette.border,
        }
      }}
    >
        <Tabs.Screen 
          name="index" 
          options={{ 
            headerShown: false, 
            title: 'Home',
            tabBarIcon: ({focused}) => {
              return focused ? <HomeFilled width={30} height={30} fill={colorPalette.primary} /> : 
              <HomeIcon width={30} height={30} fill={colorPalette.textSecondary} /> 
            },
          }} 
        />
        <Tabs.Screen 
          name="add" 
          options={{tabBarButton: TabBarButton}} 
          listeners={{tabPress: (e) => {}}} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: 'Categories',
            tabBarIcon: ({focused}) => {
              return focused ? <LeaderBoardFilled width={30} height={30} fill={colorPalette.primary} /> : 
              <LeaderBoard width={30} height={30} fill={colorPalette.textSecondary} /> 
            }
          }} 
        />
    </Tabs>
  )
}

export default _layout