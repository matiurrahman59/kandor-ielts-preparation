import Image from 'next/image';
import React from 'react';

// component & images
import SectionContent from '../section-content';

const Universities = () => {
  return (
    <section className='my-20 md:my-52 px-4 md:px-5 xl:px-0'>
      <div className='container mx-auto max-w-7xl'>
        <div className='flex flex-col space-y-8 md:space-y-0 violet-gradient md:justify-between items-start md:items-center md:flex-row'>
          <SectionContent
            subtitle='top universities'
            heading="Don't let your dreams stay dreams!"
            subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus '
          />
          <div className='flex flex-col gap-5 md:gap-10 self-center'>
            <div className='flex space-x-10 items-center'>
              <Image
                src='/images/varsity-1.png'
                width={172}
                height={70}
                alt='top universities'
              />
              <Image
                src='/images/varsity-2.png'
                width={172}
                height={70}
                alt='top universities'
              />
              <Image
                src='/images/varsity-3.png'
                width={172}
                height={70}
                alt='top universities'
              />
            </div>
            <div className='flex space-x-10 items-center md:ml-8'>
              <Image
                src='/images/varsity-4.png'
                width={172}
                height={70}
                alt='top universities'
              />
              <Image
                src='/images/varsity-5.png'
                width={172}
                height={70}
                alt='top universities'
              />
              <Image
                src='/images/varsity-6.png'
                width={172}
                height={70}
                alt='top universities'
              />
            </div>
            <div className='flex space-x-10 items-center'>
              <Image
                src='/images/varsity-7.png'
                width={172}
                height={70}
                alt='top universities'
              />
              <Image
                src='/images/varsity-8.png'
                width={172}
                height={70}
                alt='top universities'
              />
              <Image
                src='/images/varsity-9.png'
                width={172}
                height={70}
                alt='top universities'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
