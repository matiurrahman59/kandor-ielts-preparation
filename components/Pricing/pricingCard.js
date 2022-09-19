import Image from 'next/image';
import React from 'react';

import checkIcon from '../../public/images/check-icon.png';
import bgImage from '../../public/images/pricing-bg-1.png';

const priceContent = [
  { id: 1, item: 'Lorem ipsum dolor sit amet conse ctetur adipiscing' },
  { id: 2, item: 'Lorem ipsum dolor sit amet conse ctetur adipiscing' },
  { id: 3, item: 'Lorem ipsum dolor sit amet conse ctetur adipiscing' },
];

const PricingCard = ({
  bg,
  bgGradient1,
  bgGradient2,
  textClr,
  roundedTopRightNone,
  roundedTopLeftNone,
  roundedBottomLeftNone,
  roundedBottomRightNone,
}) => {
  return (
    <div
      className={`${bg} ${
        bgGradient1 ? 'bg-gradient-to-r' : ''
      } ${bgGradient1} ${bgGradient2}  relative z-10 rounded-[60px] shadow-sm drop-shadow-[#310c5721] duration-200 hover:shadow-lg hover:drop-shadow-[#310c5780] ${roundedTopLeftNone} ${roundedTopRightNone} ${roundedBottomRightNone} ${roundedBottomLeftNone} transform hover:-translate-y-5`}
    >
      <div className='px-5 pt-8 pb-10 '>
        <div className='flex flex-col gap-3 text-center'>
          {/* Header text */}
          <div className='flex flex-col space-y-3'>
            <span className='text-gradient tracking-widest'>IELTS Tool</span>
            <span className={`font-pacifico ${textClr}  text-5xl`}>$20</span>
            <p className={`text-[10px] ${textClr}`}>150 Recording minutes </p>
            <h6 className={textClr}>
              Best if you need <br /> +0.5 band improvement
            </h6>
          </div>
          {/* body text */}
          {priceContent.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className='mt-3 max-w-[234px] rounded-lg bg-white px-3 py-[10px] text-left drop-shadow-xl'
                >
                  <div className='flex items-center gap-2'>
                    <Image src={checkIcon} alt='icon' width={40} height={40} />
                    <div>
                      <p className='violet-gradient text-xs'>{item.item}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {/* Button container */}
          <div className='mt-5'>
            <div>
              <a href='#' className='btn orange-gradient'>
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bg image */}
      <div className='absolute top-0 right-0 -z-10 opacity-50'>
        <Image src={bgImage} alt='bg-image' />
      </div>
    </div>
  );
};

export default PricingCard;
