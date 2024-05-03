import Banner from '@/components/Banner'
import React from 'react'
// import bannerImage from '../../public/home/bnrAbt2.jpg'; // Adjust the path as needed
import Who_We_Are from '@/components/About/Who_We_Are';
import VisionAndMission from '@/components/About/VisionAndMission';
// import Certifications from '@/components/About/Certifications';

function page() {

    const bannerHead = `About Us`
    const bannerText = `
    Bonvo Exports is poised to revolutionize the export trade sector. Our team comprises talented professionals with diverse expertise and a shared vision for success. 
    We are committed to fostering a culture of creativity, collaboration, and continuous improvement within our organization.`
    return (
        <div className='min-h-screen w-screen flex flex-col justify-center items-center  font-'>
            {/* about */}
            <Banner title={bannerHead} text={bannerText} />
            <Who_We_Are />
            <VisionAndMission />
            {/* <Certifications /> */}
        </div>
    )
}

export default page