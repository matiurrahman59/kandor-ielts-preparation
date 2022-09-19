import React from 'react';

// components & images
import SectionContent from '../section-content';
import PricingCard from './pricingCard';

const Price = () => {
  return (
    <section className='bg-lightbg '>
      <div className='container mx-auto max-w-7xl py-20  px-4 md:py-52 md:px-5 xl:px-0'>
        <div className='violet-gradient flex flex-col items-center justify-between gap-10 md:flex-row md:items-start md:gap-0'>
          {/* Pricing text */}
          <div className='self-start md:self-center'>
            <SectionContent
              subtitle='safe and secure'
              heading='Choose the best plan for you.'
              subtext='Save $200 on IELTS re-test by spending 1/10 of that price on Kandor'
            />
            <div className='mt-7 flex max-w-[363px] flex-col gap-6 sm:max-w-[400px] md:mt-8 md:max-w-[480px] md:gap-5  lg:mr-[100px]'>
              <div>
                <h4>Customised courses</h4>
                <h5 className='mt-2 md:mt-3'>
                  Get the perfect course that will help drive results better and
                  faster
                </h5>
              </div>
              <div>
                <h4>Advanced practice tools</h4>
                <h5 className='mt-2 md:mt-3'>
                  Kandor bleeding edge tech tools will help you practice
                  anytime, anywhere with no extra fees or sessions
                </h5>
              </div>
              <div>
                <h4>Motivational training</h4>
                <h5 className='mt-2 md:mt-3'>
                  Reduce your stress about the exam with the help of mental
                  fortitude exercises
                </h5>
              </div>
            </div>
          </div>
          {/* Pricing Card */}
          <div className='flex flex-col gap-6 sm:flex-row md:gap-8'>
            <PricingCard
              bg='bg-white'
              textClr='violet-gradient'
              roundedTopRightNone='rounded-tr-none'
              roundedBottomLeftNone='rounded-bl-none'
            />
            <PricingCard
              bg=''
              bgGradient1='from-darkViolet'
              bgGradient2='to-dark2'
              textClr='text-white'
              roundedTopLeftNone='rounded-tl-none'
              roundedBottomRightNone='rounded-br-none'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
