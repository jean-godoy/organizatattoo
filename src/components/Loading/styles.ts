import styled, { keyframes } from 'styled-components';

const running = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Conainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.3);
`;

export const Loading = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 8px solid white;
    border-left: 8px solid orange;

    animation-name: ${running};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`;