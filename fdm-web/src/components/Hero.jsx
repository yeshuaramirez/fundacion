import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Divine_Mercy.jpeg/800px-Divine_Mercy.jpeg"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Fundación de la Divina Misericordia</h1>
        <p className="text-xl text-white mt-4">una fundación para todos</p>
      </div>
    </div>
  );
};

export default Hero;
