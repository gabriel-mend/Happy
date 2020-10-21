import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showX?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showX = true }) => {
  const navigation = useNavigation();

  function handleNavigateToOrphanagesMap() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showX ? (
        <BorderlessButton onPress={handleNavigateToOrphanagesMap}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
