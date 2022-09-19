import React, { useState } from 'react';
import SectionContent from '../section-content';

const faq = [
  {
    id: 1,
    question: 'Is it really effective and accurate?',
    answer:
      'Yes, we are the only AI tool that is trusted by teachers. Our tool is endorsed by 50+ teachers. We are 95% accurate in our predictions. We are also every effective in improving speaking scores of our users. For students who have made 30+ diligent recordings on our platform, we have seen an improvement of 0.5 band in the IELTS Speaking Band.',
  },

  {
    id: 2,
    question: 'How long do I have access to the tool?',
    answer: 'Your access to tool will be revoked after 3 months of buying.',
  },

  {
    id: 3,
    question: 'How can I get refund?',
    answer:
      'Kandor strives to achieve 100% customer satisfaction, and we believe our products and services are the finest in the industry. However, if for any reason you are not satisfied with our products and services, you may email us at navdeep@trykandor.com within 24 hours and we would be happy to refund your money.',
  },

  {
    id: 4,
    question: 'I have another question, who do I ask?',
    answer: 'You can contact us, at the following email: test@test.com',
  },
];

const Faq = () => {
  const [textShow, setTextShow] = useState('false');

  const answerToggleHandler = (id) => {
    const chosenText = faq.find((item) => {
      return item.id === id;
    });
    console.log(chosenText);
  };

  return (
    <section className='container mx-auto max-w-7xl py-20 px-4 md:px-5 xl:px-0'>
      <div className='flex flex-col items-center gap-8 md:gap-[60px]'>
        <SectionContent
          center='text-center'
          subtitle='why choose Kandor '
          heading='Questions? Look here.'
          subtext='Have a doubt about Kandor? Please feel free to reach out to us.'
        />

        {/* FAQ */}
        <div className='mx-auto w-full  space-y-6 self-start sm:w-3/4 md:space-y-14 '>
          {faq.map(({ id, question, answer }) => {
            return (
              <>
                <div key={id}>
                  <div className='flex gap-5 border-b-2 border-[#E2D6EC] text-left md:gap-8 '>
                    <div className='relative mt-3 flex items-start justify-center'>
                      <div className='orange-gradient h-1 w-5 '></div>
                      <div className='orange-gradient absolute top-[1px] h-1 w-5 rotate-90'></div>
                    </div>
                    <div className='w-screen-lg flex flex-col'>
                      <h4
                        onClick={answerToggleHandler()}
                        className='violet-gradient cursor-pointer'
                      >
                        {question}
                      </h4>
                      <div className='my-3 md:my-5'>
                        {!textShow && <h5>{answer}</h5>}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
