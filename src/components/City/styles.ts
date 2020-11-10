import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Props>`
    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: ${ p => p.textAlign ? "right" : "left" };

    & strong {
        font-weight: 800;
    }
`;
