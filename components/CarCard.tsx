
import React from 'react';
import { Car } from '../types';
import { UsersIcon, FuelIcon, TransmissionIcon } from './IconComponents';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  return (
    <div 
      className="bg-brand-light-dark rounded-xl overflow-hidden flex flex-col group border border-transparent hover:border-brand-blue transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-blue/20"
      onClick={() => onSelect(car)}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src={car.imageUrl} alt={`${car.make} ${car.model}`} />
        <div className="absolute top-0 right-0 bg-brand-dark/50 backdrop-blur-sm p-2 m-2 rounded-lg">
            <p className="text-white font-bold">${car.pricePerDay}<span className="text-xs font-normal text-gray-300">/day</span></p>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
        <p className="text-sm text-gray-400 mb-4">{car.year} &bull; {car.type}</p>
        
        <div className="mt-auto grid grid-cols-3 gap-4 text-center border-t border-brand-gray pt-4">
          <div className="flex flex-col items-center text-gray-300">
            <UsersIcon className="h-6 w-6 mb-1"/>
            <span className="text-xs">{car.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center text-gray-300">
            <FuelIcon className="h-6 w-6 mb-1" />
            <span className="text-xs">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center text-gray-300">
            <TransmissionIcon className="h-6 w-6 mb-1"/>
            <span className="text-xs">{car.transmission}</span>
          </div>
        </div>
        
        <button 
          className="mt-5 w-full bg-brand-blue text-white font-semibold py-2.5 rounded-lg hover:bg-opacity-80 transition-all duration-200 transform group-hover:scale-105"
          onClick={(e) => {
              e.stopPropagation();
              onSelect(car);
          }}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
