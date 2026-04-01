import React from 'react';
import logo from '../../assets/logo.png';
import dollarImg from '../../assets/Currency.png';

const Navbar = () => {
    return (
      <div className='w-11/12 mx-auto' >
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none">
            <div className="flex items-center gap-2 font-bold">
                0 Coin
                <img src={dollarImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;