import React from 'react';
import styled from 'styled-components';

export type TreedotsLoaderProps = {
  isLoading: boolean
}

export const TreedotsLoader: React.FC<TreedotsLoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading &&
        <StyledMusk>
          <StyledLoader>
            <div className='dot' ></div>
            <div className='dot-c' ></div>
            <div className='dot' ></div>
          </StyledLoader>
        </StyledMusk>
      }
    </>
  );
};

const StyledMusk = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 20px;
    animation: 1.8s ease-in-out infinite scale-side;
    @keyframes scale-side{
      0% {
        transform: scale(1,1);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.5,1.5); 
        opacity: 1;
      }
      100% {
        transform: scale(1,1); 
        opacity: 0.6;
      }
    }
  }
  .dot-c {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 20px;
    animation: 1.8s ease-in-out infinite scale-center;
    @keyframes scale-center{
      0% {
        transform: scale(1.5,1.5); 
        opacity: 1;
      }
      50% {
        transform: scale(1,1);
        opacity: 0.6;
      }
      100% {
        transform: scale(1.5,1.5); 
        opacity: 1;
      }
    }
  }
`;

