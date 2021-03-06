import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import styles from './styles'

export default function Favorites() {
  return (
    <View style={styles.container}>
    <PageHeader title="Meus Proffys favoritos."/>
    <ScrollView
    style={styles.teacherList}
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingBottom:16
    }}
    > 
     <TeacherItem />
   </ScrollView>
  </View>
  )
}
