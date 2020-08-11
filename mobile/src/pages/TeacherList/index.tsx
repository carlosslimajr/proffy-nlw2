import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem from '../../components/TeacherItem';
import {
  BorderlessButton,
  RectButton,
  TextInput,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function TeacherList() {
  const [isFilteresVisible, setIsFiltersVisible] = useState(false); //Escondendo os filtros
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFilteresVisible);
  }

  Icon.loadFont();
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Icon name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }>
        {isFilteresVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matérias</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}
