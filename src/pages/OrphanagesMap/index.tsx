import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import * as Styles from './styles';
import appMakerImg from '../../images/Local.svg';
import City from '../../components/City';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: appMakerImg,
  iconAnchor: [29, 68],
  iconSize: [58, 68],
  popupAnchor: [170, 2]
})

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);
  return (
    <Styles.Container>
      <Styles.Aside>
        <header>
          <img src={appMakerImg} alt=""/>
          
          <Styles.Title>Escolha um orfanato</Styles.Title>
          <p> Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <City />
        </footer>
        <Link to="/orphanages/create" className="button">
          <FiPlus size={32} color="#fff" />
        </Link>
      </Styles.Aside>

      <Map
        center={[-2.5606322, -44.258122]}
        zoom={15}
        style={{ width: '100%', height: '100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {orphanages.map((orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup 
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff"/>
              </Link>
            </Popup>
          </Marker>
        )))}
      </Map>
    </Styles.Container>
  );
};

export default OrphanagesMap;
