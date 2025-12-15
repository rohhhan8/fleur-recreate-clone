import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';
import { HiMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-bg-primary"
    >
        {/* LOGO */}
        <MagneticWrapper>
            <div className="text-2xl font-primary italic font-bold tracking-tighter">
                Fleur.
            </div>
        </MagneticWrapper>

        {/* MENU */}
        <div className="flex items-center gap-8 font-secondary text-xs tracking-[0.2em] font-medium">
            <MagneticWrapper className="hidden md:block">
                <span>PROJECTS</span>
            </MagneticWrapper>
            <MagneticWrapper className="hidden md:block">
                <span>AGENCY</span>
            </MagneticWrapper>
            <MagneticWrapper className="hidden md:block">
                <span>CONTACT</span>
            </MagneticWrapper>
            
            <MagneticWrapper>
                <div className="flex items-center gap-2">
                    <span className="hidden md:block">MENU</span>
                    <HiMenuAlt4 className="text-2xl" />
                </div>
            </MagneticWrapper>
        </div>
    </motion.nav>
  );
};

export default Navbar;
