//  images & components
import Image from 'next/image';
import map from '../../public/images/map.png';
import SectionContent from '../section-content';

const StateMent = () => {
  return (
    <>
      <section className='pt-20  md:pt-[104px] md:pb-[126px]'>
        <div className='flex gap-9 md:gap-0 flex-col-reverse md:items-center md:flex-row'>
          {/* Image container */}
          <div className='flex items-center pr-8'>
            <Image src={map} alt={map} />
          </div>

          {/* Content */}
          <div className='lg:ml-28 md:ml-10'>
            <div className='violet-gradient pl-4 '>
              <SectionContent
                subtitle='institute of the future'
                heading='We are the best online course worldwide.'
                subtext='Kandor was built with one thing in mind - to help students ace
                  the IELTS and immigrate to their dream university in the
                  fastest, cheapest, and least stressful way possible.'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StateMent;
