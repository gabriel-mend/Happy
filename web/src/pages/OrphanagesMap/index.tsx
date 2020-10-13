import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';


import * as Styles from './styles';
import appMakerImg from '../../images/Local.svg';
import City from '../../components/City';

const OrphanagesMap: React.FC = () => {
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
        <Link to="/" className="button">
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
      </Map>
    </Styles.Container>
  );
};

export default OrphanagesMap;
