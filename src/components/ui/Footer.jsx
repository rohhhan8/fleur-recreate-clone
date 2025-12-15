import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black/5 pt-24 pb-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-0">
            
            {/* BRAND & SUBSCRIBE */}
            <div className="w-full md:w-1/3">
                 <div className="text-4xl font-primary font-bold tracking-tighter text-text-primary uppercase mb-8">
                     Fleur.
                 </div>
                 <p className="font-secondary text-text-secondary text-sm mb-8 max-w-xs">
                     Crafting digital experiences that transcend the ordinary. Join our newsletter for insights and inspiration.
                 </p>
                 <div className="flex border-b border-black/20 py-2 w-full max-w-xs transition-colors focus-within:border-black">
                     <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-transparent outline-none font-secondary text-sm placeholder:text-text-secondary/50 text-text-primary"
                     />
                     <button className="font-secondary text-xs uppercase tracking-widest text-text-primary hover:text-accent-gold transition-colors">
                         Subscribe
                     </button>
                 </div>
            </div>

            {/* LINKS */}
            <div className="flex gap-16 md:gap-32 w-full md:w-auto">
                <div className="flex flex-col gap-4">
                    <span className="font-secondary text-xs font-bold uppercase tracking-widest text-text-primary mb-2">Socials</span>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Instagram</a>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Twitter</a>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Behance</a>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="font-secondary text-xs font-bold uppercase tracking-widest text-text-primary mb-2">Sitemap</span>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Home</a>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Services</a>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Our Works</a>
                    <a href="#" className="font-secondary text-sm text-text-secondary hover:text-text-primary transition-colors">Contact</a>
                </div>
            </div>

        </div>

        {/* BOTTOM */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-black/5 opacity-50">
            <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary">© 2024 Fleur Agency. All Rights Reserved.</span>
            <span className="font-secondary text-[10px] uppercase tracking-widest text-text-secondary mt-2 md:mt-0">Privacy Policy / Terms of Use</span>
        </div>
    </footer>
  );
};

export default Footer;
