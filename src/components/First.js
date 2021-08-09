import React from 'react';
import './First.css';
import CardItem from './CardItem';
import logo from '../Images/Logo.png';

function First() {
  return (
    <div className='first'>
      <h1>.......Studio PAYAL......</h1>
      <div className='first_container'>
        <p>
        PAYAL Studios is a Professional Photo Shoot Location at<br></br>Sardulgarh, Rorki Chowk<br></br>
        for Pre-Wedding, Post-Wedding, Ring Ceremony, Catalog, Music Videos , Maternity<br></br>& <br></br>Much More.
        </p>
        <div className = 'imgs'>
            <div className = 'img1'>
            <CardItem
              src='./images/02.jpg'
              label='Pre-Wedding'
            />
            </div>
            <div className = 'img1'>
            <CardItem
              src={logo}
              label='Post-Wedding'
            />
            </div>
            <div className = 'img1'>
            <CardItem
              src='images/04.jpg'
              label='Ring-Ceremony'
            />
            </div>
            <div className = 'img1'>
            <CardItem
              src='images/03.jpg'
              label='Wedding'
            />
            </div>
        </div>
        <p>
        Our sets and backdrops have been photographically designed keeping in mind the
        requisites of creative photographers.
        </p>
        <p>
        The array of 45+ unique backdrops help photographers to play with every angle they choose
so as to provide best cinematic and candid exposure.
        </p>
        <div className = 'imgs'>
            <div className = 'img1'>
            <CardItem
              src='images/06.jpg'
              label='Night-View'
            />
            </div>
            <div className = 'img1'>
            <CardItem
              src='images/07.jpg'
              label='Sun-Set'
            />
            </div>
            <div className = 'img1'>
            <CardItem
              src='images/11.jpg'
              label='Royal-Haveli'
            />
            </div>
            <div className = 'img1'>
            <CardItem
              src='images/13.jpg'
              label='Retro-View'
            />
            </div>
        </div>
      </div>
    </div>
  );
}

export default First;
