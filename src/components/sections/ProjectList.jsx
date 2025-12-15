import React, { useState } from 'react';
import { motion } from 'framer-motion';

const filters = ["All", "Modern", "Destination", "Traditional", "Intimate", "Luxury"];

const projects = [
  { title: 'The Ceremony', category: 'Traditional', image: '/7668778f922038b8918a2a861c163fda.jpg', year: '2024' },
  { title: 'Silent Vows', category: 'Intimate', image: '/861e6c81accd4a89c4204aa1524c006b.jpg', year: '2024' },
  { title: "Couple's Story", category: 'Modern', image: '/933b8432dfba625d14f66a6c326a303e.jpg', year: '2023' },
  { title: 'Intimate Moments', category: 'Intimate', image: '/b60a2293897606bf51ad2308f27a1e60.jpg', year: '2023' },
  { title: 'Golden Hour', category: 'Destination', image: '/0654ee3f349bfbcd170756a7accf6769.jpg', year: '2023' },
  { title: 'Urban Love', category: 'Modern', image: '/6aa51760bf51737de1af412f42e01b63.jpg', year: '2022' },
  { title: 'Tuscan Dreams', category: 'Destination', image: '/4af7b94cc3ed161f31dafd484733eb70.jpg', year: '2022' },
  { title: 'Royal Affair', category: 'Luxury', image: '/3035142c99313b4c0719b4d5ea75e951.jpg', year: '2022' },
  { title: 'Garden Romance', category: 'Traditional', image: '/4abc439817c53a9197cb6f38c03aced4.jpg', year: '2021' },
];

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-white z-10">
      
      {/* HEADER WITH FILTERS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 max-w-7xl mx-auto">
           <div>
              <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="font-secondary text-xs tracking-[0.2em] uppercase text-text-secondary block mb-4"
              >
                  Our Works
              </motion.span>
               <h2 className="font-primary text-4xl md:text-6xl text-text-primary leading-[0.9]">
                Selected <span className="italic text-text-secondary">Stories</span>
              </h2>
           </div>
           
           {/* FILTER TABS */}
           <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
               {filters.map((filter, idx) => (
                   <button 
                       key={idx}
                       onClick={() => setActiveFilter(filter)}
                       className={`px-4 py-2 rounded-full text-xs font-secondary uppercase tracking-wider transition-all duration-300 border ${
                           activeFilter === filter 
                           ? 'bg-text-primary text-white border-text-primary' 
                           : 'bg-transparent text-text-secondary border-black/10 hover:border-black/30'
                       }`}
                   >
                       {filter}
                   </button>
               ))}
           </div>
      </div>

      {/* GRID - Smaller cards, 3 rows */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, i) => (
              <motion.div 
                key={`${project.title}-${activeFilter}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                  {/* IMAGE */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg mb-3">
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                             <span className="font-secondary text-[10px] uppercase tracking-wider">View</span>
                          </div>
                      </div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                      />
                  </div>

                  {/* TEXT */}
                  <div className="flex justify-between items-start">
                      <div>
                          <h3 className="font-primary text-lg text-text-primary mb-1 group-hover:text-accent-gold transition-colors">
                            {project.title}
                          </h3>
                          <span className="font-secondary text-[10px] uppercase tracking-wider text-text-secondary">
                              {project.category}
                          </span>
                      </div>
                      <span className="font-secondary text-[10px] text-text-primary/30">
                          {project.year}
                      </span>
                  </div>
              </motion.div>
          ))}
      </div>

    </section>
  );
};

export default PortfolioGrid;
