import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../../images/map-marker.png';
import styles from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const navigation = useNavigation();

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  })

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanagesDetails', { id })
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition')
  }
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -2.5225285,
          longitude: -44.2719539,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        {orphanages.map((orphanage => (
          <Marker 
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.5,
              y: 0.8
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout 
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        )))}
      </MapView>
      <View style={styles.footer}>
          <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
          <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
              <Feather name="plus" size={20} color="#fff" />
          </RectButton>
      </View>
    </View>
  );
}
