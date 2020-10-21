import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap'; 
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false, cardStyle: {
            backgroundColor: '#f2f3f5'
        } }}>
            <Screen 
                name="OrphanagesMap" 
                component={OrphanagesMap} 
            />
            <Screen 
                name="OrphanagesDetails" 
                component={OrphanageDetails}
                options={{
                    headerShown: true,
                    header: () => <Header showX={false} title="Orfanato" />
                }}
            />
            <Screen 
                name="SelectMapPosition"
                component={SelectMapPosition} 
                options={{
                    headerShown: true,
                    header: () => <Header title="Selecione no mapa" />
                }}
            />
            <Screen 
                name="OrphanageData" 
                component={OrphanageData}
                options={{
                    headerShown: true,
                    header: () => <Header title="Informe os dados" />
                }}
                
            />
        </Navigator>
    </NavigationContainer>
    );
}