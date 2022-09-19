import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../../public/images/logo.png';
import heroImg from '../../public/images/hero.png';
import feedbackUserImg from '../../public/images/feedback-user-img.png';
import menu from '../../public/images/hamburger.png';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto max-w-7xl mt-3 mb-3'>
        <div className='flex justify-between items-center px-4 md:px-0 '>
          {/* Logo */}
          <Image src={logo} alt='logo' className='h-[117px] w-[36px]' />
          {/* Main Nav */}
          <nav className='hidden md:block'>
            <ul className='flex items center space-x-5 font-normal hover:from-darkOrange  hover:to-lightOrange'>
              <li className='violet-gradient hover:from-darkOrange  hover:to-lightOrange'>
                <Link href='/'>Our vision</Link>
              </li>
              <li className='violet-gradient'>
                <Link href='/'>Features</Link>
              </li>
              <li className='violet-gradient'>
                <Link href='/'>Testimonials</Link>
              </li>
              <li className='violet-gradient'>
                <Link href='/'>Our trainers</Link>
              </li>
              <li className='violet-gradient'>
                <Link href='/'>Pricing</Link>
              </li>
            </ul>
          </nav>
          {/* Button container */}
          <div className='md:flex items-center space-x-7 uppercase text-lg hidden '>
            <button className='violet-gradient'>Login</button>
            <button type='button' className='btn orange-gradient '>
              Register
            </button>
          </div>
          {/* Mobile Menu */}
          <div className='flex md:hidden items-center'>
            <Image src={menu} alt='menu-btn' className='md:hidden' />
          </div>
        </div>
      </div>
      {/* Banner area */}
      <div className='bg-gradient-to-r to-darkViolet from-dark2 text-white rounded-bl-[60px] md:rounded-bl-[148px]'>
        <div className='container mx-auto max-w-7xl'>
          {/* <div className='flex flex-col md:items-start py-8 text-center md:text-start md:py-52 max-w-[343px] md:max-w-[638px]'> */}
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='pt-8 py-4 md:py-[210px] flex flex-col text-center md:text-left'>
              <span className='subtitle '>your learning partner</span>
              <h1>
                Go from IELTS band <br />
                <span className='underline underline-offset-8 decoration-pink'>
                  5 to 7.5
                </span>{' '}
                in 4 weeks
              </h1>
              <span className='subtext mt-3 mb-5'>
                With the Most Personalised <br className='md:hidden' /> Course
                designed to improve your <br className='md:hidden' /> weakest
                sections.
              </span>
              <div>
                <a href='#' className='btn orange-gradient'>
                  Start today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
