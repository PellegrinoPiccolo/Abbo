import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import useTheme from '../../hook/ThemeHook';
import { useTranslation } from 'react-i18next';
import { Pie, PolarChart } from "victory-native";
import useSubs from '../../hook/SubsHook';

const Category = () => {

  const {colorPalette} = useTheme();
  const {t} = useTranslation();
  const {subs} = useSubs();

  const DATA = [
    { label: "Entertainment", value: subs.filter(sub => sub.category === "Entertainment").length, color: colorPalette.primary },
    { label: "Productivity", value: subs.filter(sub => sub.category === "Productivity").length, color: colorPalette.secondary },
    { label: "Fittnes&Health", value: subs.filter(sub => sub.category === "Fittnes&Health").length, color: colorPalette.azure },
    { label: "Education", value: subs.filter(sub => sub.category === "Education").length, color: colorPalette.red },
    { label: "Work", value: subs.filter(sub => sub.category === "Work").length, color: colorPalette.orange },
    { label: "Home", value: subs.filter(sub => sub.category === "Home").length, color: 'pink' },
    { label: "Other", value: subs.filter(sub => sub.category === "Other").length, color: '#E0E104' },
  ];

  return (
    <ScrollView style={{flex: 1, backgroundColor: colorPalette.background}}>
      <View style={{margin: 20,}}>
        <Text style={{color: colorPalette.text, fontSize: 24, marginBottom: 10, fontWeight: 'bold'}}>{t('category.title')}</Text>
        <Text style={{color: colorPalette.textSecondary, fontSize: 16, marginBottom: 10}}>{t('category.description')}</Text>
      </View>
      <View style={{marginTop: 20, height: 440, width: '90%', flexDirection: 'column', alignItems: 'center', backgroundColor: colorPalette.backgroundSecondary, alignSelf: 'center', borderRadius: 12, padding: 20}}>
        <PolarChart
          data={DATA} // 👈 specify your data
          labelKey={"label"} // 👈 specify data key for labels
          valueKey={"value"} // 👈 specify data key for values
          colorKey={"color"} // 👈 specify data key for color
        >
          <Pie.Chart />
        </PolarChart>
        <View style={{flex: 1, paddingLeft: 20, justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', marginTop: 40}}>
          {DATA.map((item, index) => {
            // Calculate total value
            const total = DATA.reduce((sum, curr) => sum + curr.value, 0);
            // Calculate percentage
            const percentage = ((item.value / total) * 100).toFixed(1);
            return (
              <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <View style={{width: 16, height: 16, backgroundColor: item.color, marginRight: 10}} />
                <Text style={{color: colorPalette.text, fontSize: 16}}>{t(`categories.${item.label}`)}: {percentage}%</Text>
              </View>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default Category