import React from 'react';

// component & images
import SectionContent from '../section-content';
import Image from 'next/image';

const infoContent = [
  {
    subtitle: 'flexible graphic',
    heading: 'Our AI tool enables you to practice at any time, from anywhere.',
    subtext:
      'Data suggests our users improve by a band of 0.5 with just 20 recordings, and this is while practicing from the comfort of your own room.',
    containerclr: '',
    bgColor: 'bg-lightOrange',
    img: '/images/info-1.png',
  },
  {
    subtitle: 'flexible graphic',
    heading: 'Our AI tool enables you to practice at any time, from anywhere.',
    subtext:
      'Data suggests our users improve by a band of 0.5 with just 20 recordings, and this is while practicing from the comfort of your own room.',
    containerclr: 'bg-lightbg',
    bgColor: 'bg-pink',
    img: '/images/info-2.png',
  },
  {
    subtitle: 'enjoyable learning',
    heading: 'Our online classes actually work. Psst, they are great fun too!',
    subtext:
      'Learn in a diverse mix of aspirants from around the world, with our video tools that are designed to give a fun user experience, all the while receiving guidance from band 8+ trainers.',
    containerclr: '',
    bgColor: 'bg-green',
    img: '/images/info-2.png',
  },
];

const Info = () => {
  return (
    <section className='space-y-10 '>
      {infoContent.map((item) => (
        <div key={item.heading} className={`${item.containerclr} px-4`}>
          <div className='container max-w-7xl mx-auto pt-16 md:pt-0'>
            <div className='violet-gradient flex md:gap-5 lg:gap-0 md:items-center flex-col md:flex-row md:py-10  '>
              <SectionContent
                subtitle={item.subtitle}
                heading={item.heading}
                subtext={item.subtext}
              />
              <div className={`${item.bgColor} rounded-2xl py-5 mt-5 md:mt-0`}>
                <Image
                  src={item.img}
                  alt='graphic'
                  width={700}
                  height={400}
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Info;
