// eslint-disable-next-line no-unused-vars
import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      icon: assets.ads_icon,
    },
    {
      title: 'Content Marketing',
      description: 'We help you create your plan and deliver results....',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content writing',
      description: 'We help to create a marketing strategy that aligns with your business goals and target audience....',
      icon: assets.content_icon,
    },
    {
      title: 'Social Media',
      description: 'We help you build a strong social media presence that resonates with your audience and drives engagement....',
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id='services'
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[30px] text-gray-700 dark:text-white'
    >
      <img
        src={assets.bgImage2}
        alt='Background decoration'
        className='absolute -top-[110px] -left-[70px] z-[-1] dark:hidden'
      />

      <Title
        title='How can we help?'
        desc='We provide a wide range of digital marketing services to help your business grow and succeed online.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;