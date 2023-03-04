import React from 'react';
import Typewriter from 'typewriter-effect';
import { Space_Mono } from '@next/font/google';
import Image from 'next/image';

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
});

interface ProfileProps {
  data: any;
}

export const Profile = (props: ProfileProps) => {
  const { data } = props;
  return (
    <div className={`profile_container ${spaceMono.className}`}>
      <style jsx>{`
        .profile_container {
          display: flex;
          height: 100%;
          margin-top: 3rem;
        }
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
        .image_container {
          z-index: -2;
        }
        .profile_image {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: mover 5s ease-in-out;
        }
        .background_svg {
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: -1;

          svg {
            position: relative;
            height: 100px;
          }
        }
        .left_Section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          flex: 1;
        }
        .right_Section {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          flex: 1;
        }

        @keyframes mover {
          0% {
            transform: translateY(20rem);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="left_Section">
        {/*my image*/}
        <div className="image_container">
          <Image
            src="/my_image.png"
            alt="profile"
            width={400}
            height={400}
            className="profile_image"
            style={{ animation: 'mover 5s  ease-in-out' }}
          />
        </div>
      </div>
      <div className="right_Section">
        <div>
          <h1 className="profile_title">Hello, I&apos;m</h1>
          <h1 className="profile_name">{data.name}</h1>
          <h1 className="profile_title">I&apos;m a</h1>
          <h1 className="profile_title">
            <Typewriter
              options={{
                strings: data.profession,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1671642996 background_svg">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};
