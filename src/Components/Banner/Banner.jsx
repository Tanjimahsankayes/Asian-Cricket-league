import React from 'react';
import backgroundImage from '../../assets/bg-shadow.png';
import BannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
      <div className="w-11/12 mx-auto">
        <div
          className="h-screen bg-cover bg-center flex items-center justify-center rounded-2xl mb-5 overflow-hidden "
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="bg-black/30 w-full h-full flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <img src={BannerImg} alt="" className='mx-auto' />
              <h1 className="text-4xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="text-lg text-gray-400 ">Beyond Boundaries Beyond Limits</p>

              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg cursor-pointer border border-blue-500 ">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;