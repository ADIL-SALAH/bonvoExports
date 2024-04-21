import React from 'react';
import Banner from '../Banner';
import bannerImage from '../../public/home/bnr3.png'; // Adjust the path as needed
import About from './About';
import Services from './OurProducts';
import Highlights from './Highlights';
import Quote from './Quote';

function HomePage() {
    return (
        <div className='w-screen'>

            <Banner
                image={bannerImage}
                title="BONVO EXPORTS"
                text={`Bonvo Exports is a dynamic and forward-thinking startup, dedicated to making a significant impact in the export industry.
                 Founded recently, we are driven by a passion for innovation, quality, and customer satisfaction. 
                 Despite being a new entrant, we are committed to upholding the highest standards of integrity, accountability,
                  and reliability in all our endeavors.`}
            />
            <About />
            <Highlights />
            <Services />
            {/* <Quote /> */}

        </div>

    );
}

export default HomePage;
