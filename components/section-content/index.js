const SectionContent = ({ subtitle, heading, subtext, center }) => {
  return (
    <div
      className={`${center} max-w-[363px] sm:max-w-[400px] md:max-w-[480px]  lg:mr-[100px]`}
    >
      <span className='subtitle'>{subtitle}</span>
      <h2 className='violet-gradient mt-1'>{heading}</h2>
      <h5 className='mt-4 md:mt-6'>{subtext}</h5>
    </div>
  );
};

export default SectionContent;
