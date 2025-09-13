
import React from 'react';
import { Car } from '../types';
import { XIcon, UsersIcon, FuelIcon, TransmissionIcon, CalendarIcon, CheckIcon } from './IconComponents';

interface CarDetailsModalProps {
  car: Car | null;
  onClose: () => void;
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-brand-light-dark rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
          <XIcon className="h-6 w-6" />
        </button>

        <div className="w-full md:w-1/2">
          <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h2 className="text-3xl font-bold text-white">{car.make} {car.model}</h2>
          <p className="text-lg text-gray-400 mb-6">{car.year} &bull; {car.type}</p>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="flex flex-col items-center bg-brand-gray p-3 rounded-lg">
                <UsersIcon className="h-7 w-7 mb-1 text-brand-blue"/>
                <span className="text-sm font-semibold">{car.seats} Seats</span>
            </div>
            <div className="flex flex-col items-center bg-brand-gray p-3 rounded-lg">
                <FuelIcon className="h-7 w-7 mb-1 text-brand-blue" />
                <span className="text-sm font-semibold">{car.fuelType}</span>
            </div>
            <div className="flex flex-col items-center bg-brand-gray p-3 rounded-lg">
                <TransmissionIcon className="h-7 w-7 mb-1 text-brand-blue"/>
                <span className="text-sm font-semibold">{car.transmission}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Features</h4>
            <ul className="space-y-2">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckIcon className="h-5 w-5 mr-2 text-brand-blue"/>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto bg-brand-gray p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-gray-300">Price</span>
                <p className="text-2xl text-white font-bold">${car.pricePerDay}<span className="text-base font-normal text-gray-400">/day</span></p>
            </div>
            <div className="space-y-3 mb-4">
                <div className="relative">
                    <label className="text-sm text-gray-400">Pick-up Date</label>
                    <input type="date" className="w-full bg-brand-light-dark p-2 rounded-md mt-1 border border-brand-gray focus:ring-brand-blue focus:border-brand-blue" defaultValue="2024-08-15" />
                </div>
                 <div className="relative">
                    <label className="text-sm text-gray-400">Drop-off Date</label>
                    <input type="date" className="w-full bg-brand-light-dark p-2 rounded-md mt-1 border border-brand-gray focus:ring-brand-blue focus:border-brand-blue" defaultValue="2024-08-20" />
                </div>
            </div>
            <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-opacity-80 transition-all duration-200">
                Confirm Rental
            </button>
          </div>
        </div>
      </div>
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default CarDetailsModal;
