import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Faysal, nice to meet you. </p>
            </div>
            <div>
              <p>Motivated and adaptable software engineering student with a strong academic foundation and a real
interest in technology. I have developed my skills in a variety of programming languages, including
HTML, CSS, JavaScript, PHP, and C-Sharp (C#), through hands-on experience. My knowledge of
MySQL, Laravel, WordPress, and Figma expands my toolkit's adaptability. I'm motivated by a desire
to solve problems and keep up with the ever-changing technological scene. I am excited to begin a
lucrative career in software engineering as a devoted team player with great communication and
cooperation abilitie</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
