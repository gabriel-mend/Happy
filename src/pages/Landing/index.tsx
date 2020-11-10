import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import * as Styles from './styles';

import logoImg from '../../images/Logo.svg';
import City from '../../components/City';

const Landing: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.ContentWrapper>
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Styles.Location>
          <City textAlign="right"/>
        </Styles.Location>

        <Link to="/app" > 
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </Styles.ContentWrapper>
    </Styles.Container>
  );
};

export default Landing;
