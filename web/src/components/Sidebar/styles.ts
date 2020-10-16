import styled from 'styled-components';

export const Container = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: var(--color-primary);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & img {
        width: 48px;
    }

    & aside footer a,
    & footer button {
        width: 48px;
        height: 48px;

        border: 0;

        background: #12AFCB;
        border-radius: 16px;

        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    & footer a:hover,
    & footer button:hover {
    background: #17D6EB;
    }
`;