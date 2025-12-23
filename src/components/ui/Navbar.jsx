import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiSearch } from 'react-icons/hi';
import MagneticWrapper from './MagneticWrapper';

const Navbar = () => {
    return (
        <div className="w-full h-24 flex items-center justify-between px-8 md:px-12 z-50 font-secondary bg-white relative">
             <div className="flex items-center">
                <MagneticWrapper>
                    <div className="text-4xl font-primary font-bold tracking-tighter text-text-primary cursor-pointer uppercase">
                        Fleur.
                    </div>
                </MagneticWrapper>
             </div>
  
            <div className="flex items-center gap-6 md:gap-10 text-sm font-medium text-text-primary tracking-wide">
                <MagneticWrapper className="hidden md:block">
                    <Link to="/"><span>Home</span></Link>
                </MagneticWrapper>
                <MagneticWrapper className="hidden md:block">
                    <Link to="/pages"><span>Pages</span></Link>
                </MagneticWrapper>
                <MagneticWrapper className="hidden md:block">
                    <a href="https://rohanmahato-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative px-4 py-1.5 bg-accent-gold/10 rounded-full border border-accent-gold/30 text-accent-gold hover:bg-accent-gold hover:text-white transition-all duration-300">
                        <span className="relative z-10">Portfolio</span>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-gold rounded-full animate-pulse"></span>
                    </a>
                </MagneticWrapper>
                <MagneticWrapper className="hidden md:block">
                    <Link to="/blog"><span>Blog</span></Link>
                </MagneticWrapper>
                <MagneticWrapper className="hidden md:block">
                    <Link to="/shop"><span>Shop</span></Link>
                </MagneticWrapper>
                <div className="w-[1px] h-4 bg-text-primary/20 hidden md:block"></div>
                <MagneticWrapper><HiSearch className="text-xl cursor-pointer" /></MagneticWrapper>
                <MagneticWrapper><HiMenuAlt4 className="text-3xl cursor-pointer" /></MagneticWrapper>
            </div>
        </div>
    );
};

export default Navbar;
