import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/coding.png';
import { Luxurious_Script, Merriweather } from '@next/font/google';

const luxurious = Luxurious_Script({
  weight: '400',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
});

interface NavbarProps {
  data: any;
}

export const Navbar = (props: NavbarProps) => {
  const { data } = props;
  const [showIcon, setShowIcon] = React.useState(false);
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#cbe7ff',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={() => setShowIcon(!showIcon)}
      >
        {showIcon && (
          <div style={{ padding: '1rem 0rem 1rem 1rem' }}>
            <Image
              src={logo}
              title="web development icons"
              width={30}
              height={30}
              alt={''}
            />
          </div>
        )}
        <div
          className={luxurious.className}
          style={{ fontSize: '2rem', fontWeight: 800, marginLeft: '1rem' }}
        >
          {data.fullname}
        </div>
      </div>
      <div className={merriweather.className}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!showIcon && (
          <div
            style={{ padding: '1rem' }}
            onClick={() => setShowIcon(!showIcon)}
          >
            <Image
              src={logo}
              title="web development icons"
              width={30}
              height={30}
              alt={''}
            />
          </div>
        )}
      </div>
    </div>
  );
};
