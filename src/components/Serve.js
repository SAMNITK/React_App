import './Serve.css';
import React from 'react';
import img1 from '../Images/50.jpg'
import img2 from '../Images/51.jpg'
import img3 from '../Images/52.jpg'
import img4 from '../Images/53.jpg'
import img01 from '../Images/54.jpg'
import CardItem from './CardItem';


const Serve = () => {
    return (
        <div className = 'serve'>
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
             <div className = 'serve_container'>
             {/* <div className = 'heading'>
                <span>Our all services !</span>
            </div> */}
             <div className = 'mug'>
                    <p>  Special in Wedding, Pre - Wdding, Post - Wedding  </p>
            </div>
            <div className = 'top'>
            <CardItem
              src='images/10.jpg'
              text='Click Here to Check Out'
              label='Photos'
              path='/Explore'
            />
            <CardItem
              src='images/12.jpg'
              text='Click Here to Check Out'
              label='Photos'
              path='/Explore'
            />
            </div>
            <div className = 'service'>
            <div className = 'mug'>
                    <p>  * Photo Editing  </p>
                    <img className = 'imgs1'
                        src = {img01}
                        alt = ''
                    />
                </div>
                <div className = 'mug'>
                    <p>  * Mug & Water Bottol Printing  </p>
                    <img className = 'imgs1'
                        src = {img1}
                        alt = ''
                    />
                </div>
                <div className = 'mug'>
                    <p>  * T-Shirt & Pillow Printing  </p>
                    <img className = 'imgs1'
                        src = {img2}
                        alt = ''
                    />
                </div>
                <div className = 'mug'>
                    <p>  * School Bag & Mouse Pad Printing  </p>
                    <img className = 'imgs1'
                        src = {img3}
                        alt = ''
                    />
                </div>
                <div className = 'mug'>
                    <p>  * Key Rings & Wall Clock Printing  </p>
                    <img className = 'imgs1'
                        src = {img4}
                        alt = ''
                    />
                </div>
            </div>
             </div>
        </div>
    )
}

export default Serve
