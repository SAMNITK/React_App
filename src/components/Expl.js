import React from 'react';
import './Cards.css';
import './Expl.css';
import CardItem from './CardItem';

function Expl() {
  return (
    <div className='explore'>
      <h1>.......Studio PAYAL......</h1>
      <div className='explore_container'>
        <p>
        Check out these EPIC PHOTOSHOTS!<br></br>
        </p>
        <div className = 'eimg1'>
      
            <div className = 'eimg'>
            <CardItem
              src='images/02.jpg'
              label='Pre-Wedding'
              path='/MainGallery'
            />
            </div>
            <div className = 'eimg'>
            <CardItem
              src='images/01.jpg'
              label='Post-Wedding'
              path='/MainGallery'
            />
            </div>
            <div className = 'eimg'>
            <CardItem
              src='images/04.jpg'
              label='Ring-Ceremony'
              path='/MainGallery'
            />
            </div>
        </div>
        
        <div className = 'eimg1'>
            <div className = 'eimg'>
            <CardItem
              src='images/07.jpg'
              label='Sun-Set'
              path='/MainGallery1'
            />
            </div>
            <div className = 'eimg'>
            <CardItem
              src='images/11.jpg'
              label='Royal-Haveli'
              path='/MainGallery1'
            />
            </div>
            <div className = 'eimg'>
            <CardItem
              src='images/06.jpg'
              label='Night-View'
              path='/MainGallery1'
            />
            </div>
        </div>
        <div className = 'eimg1'>
           
            <div className = 'eimg'>
            <CardItem
              src='images/03.jpg'
              label='Wedding'
              path='/MainGallery2'
            />
            </div>
            <div className = 'eimg'>
            <CardItem
              src='images/70.jpg'
              label='Library'
              path='/MainGallery2'
            />
            </div>
            <div className = 'eimg'>
            <CardItem
              src='images/13.jpg'
              label='Retro-View'
              path='/MainGallery2'
            />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Expl;
