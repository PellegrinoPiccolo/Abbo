import React from 'react'
import { View } from 'react-native'
import { SubscriptionType } from '../types/SubscriptionType'
import useTheme from '../hook/ThemeHook';

const ViewSub = ({sub} : {sub: SubscriptionType}) => {

    const {colorPalette} = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorPalette.background }}>

    </View>
  )
}

export default ViewSub