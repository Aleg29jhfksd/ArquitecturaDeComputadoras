import React from 'react';  
import { motion } from 'framer-motion';  

const InfoSection = ({ title, text, imageSrc = '', index }) => {  
  return (  
    <motion.section   
      className="bg-[#BEEAA4] rounded-3xl p-8 mb-8 shadow-lg border border-purple-200/50"  
      whileHover={{ scale: 1.05 }}  
      transition={{ duration: 0.3, ease: "easeInOut" }}  
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true }}  
    >  
      <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">{title}</h2>  
      <div className="flex flex-col md:flex-row gap-6 items-center">  
        <div className="flex-1">  
          <p className="text-gray-700 leading-relaxed text-lg mb-4">{text}</p>  
        </div>  
        <div className="flex-shrink-0 w-full md:w-64 h-48 bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-green-200">  
          {imageSrc ? (  
            <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-xl" />  
          ) : (  
            <span className="text-green-500 font-medium">Espacio para imagen xd {index + 1}</span>  
          )}  
        </div>  
      </div>  
    </motion.section>  
  );  
};  

export default InfoSection;