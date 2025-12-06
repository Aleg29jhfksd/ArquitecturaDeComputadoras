import React from 'react';  
import InfoSection from './components/InfoSection';  
import { sectionData } from './mock/sectionData';  

export default function App() {  
  return (  
    <div className="min-h-screen bg-[#D7A7FF] py-8">  
      <div className="container mx-auto px-4 max-w-4xl">  
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">Arquitectura de Computadoras</h1>  
        {sectionData.map((section, index) => (  
          <InfoSection  
            key={index}  
            title={section.title}  
            text={section.text}  
            imageSrc={section.imageSrc}  
            index={index}  
          />  
        ))}  
      </div>  
    </div>  
  );  
}