import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({imageURL,boxes}) => {
    return (
        <div className='center ma'>
          <div className='absolute mt2'>
            <img id='inputimage' alt='' src={imageURL} width='500px' heigh='auto'/>
            {boxes.map(box =>
              <div key={`box${box.topRow}${box.rightCol}`}
                  className='bounding-box'
                  style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
              </div>
            )}
          </div>
        </div>
      );
    }
    
 
export default FaceRecognition;