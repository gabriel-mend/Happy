import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;

    .map-popup .leaflet-popup-content-wrapper {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        box-shadow: none
    }

    .map-popup .leaflet-popup-content {
        font-family: Nunito, sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #0089A5;
        margin: 8px 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .map-popup .leaflet-popup-tip-container {
        display: none;
    }

    .map-popup a {
        background: #15C3D6;
        border-radius: 12px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Aside = styled.aside`
    width: 100%;
    max-width: 440px;
    background: var(--color-primary);

    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & p {
        line-height: 28px;
        margin-top: 24px;
    }

    & footer {
        line-height: 24px;
    }

    & a {
        width: 64px;
        height: 64px;

        position: absolute;
        right: 40px;
        bottom: 40px;
        background: #14c3d6;
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.2s;
        z-index: 9999;
        
        &:hover {
            background: #17d6eb;
        }
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
`;