import styled from 'styled-components';
import Landing from '../../images/Landing.svg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 600px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    background: url(${Landing}) no-repeat 80% center;
    background-size: contain;

    & main {
        max-width: 350px;
    }
    & main h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
    }

    & main p {
        margin-top: 40px; 
        font-size: 24px;
        line-height: 34px;
    }
    
    & a {
        position: absolute;
        right: 0;
        bottom: 0;

        height: 80px;
        width: 80px;

        background: var(--color-secondary);
        border-radius: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color 0.2s;

        &:hover {
            background: #96FEFF;
        }
    }
`;

export const Location = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;

    & strong {
        font-weight: 800;
    }
`;

export const Button = styled.a`

`;
