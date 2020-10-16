import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import * as Styles from './styles';
import mapMarkerImg from '../../images/Local.svg'

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <Styles.Container>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Styles.Container>
  );
};

export default Sidebar;
