import React from 'react';
import {FaYoutube,FaInstagram,FaGithub,FaTelegram} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-blue-500 min-h-[60px] flex items-center justify-center' >
            <div className='flex flex-col '>
            <div className='my-2 text-zinc-200 font-bold'>
              <h1>© 2005-2022 Plagiarism Today All Rights Reserved</h1>
          </div>
          <div>
              <ul className='flex justify-center my-5' >
                  <li className='text-xl mx-1'><FaYoutube color='#efefef'/></li>
                  <li className='text-xl mx-1'><FaGithub color='#efefef'/></li>
                  <li className='text-xl mx-1'><FaInstagram color='#efefef'/></li>
                  <li className='text-xl mx-1'><FaTelegram color='#efefef'/></li>
              </ul>
          </div>
            </div>
        </div>
    );
};

export default Footer;