import React from 'react';
import {SvgXml} from 'react-native-svg';

const ScanIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`
       <svg fill="${color}" width="${width}px" height="${height}px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8,2A1,1,0,0,1,8,4H4V8A1,1,0,0,1,2,8V3A1,1,0,0,1,3,2ZM8,20H4V16a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1H8a1,1,0,0,0,0-2Zm13-5a1,1,0,0,0-1,1v4H16a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V16A1,1,0,0,0,21,15Zm0-6a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H16a1,1,0,0,0,0,2h4V8A1,1,0,0,0,21,9Zm1,2H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z"/>
        </svg>
      `}
      width={width}
      height={height}
    />
  );
};

export {ScanIcon};
