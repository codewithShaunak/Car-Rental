
import React, { useState, useEffect } from 'react';
import { Car } from './types';
import { CAR_DATA } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import CarCard from './components/CarCard';
import CarDetailsModal from './components/CarDetailsModal';
import { SpinnerIcon } from './components/IconComponents';

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setCars(CAR_DATA);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Premium Fleet
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from a selection of the finest vehicles to elevate your driving experience.
          </p>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <SpinnerIcon className="h-12 w-12 text-brand-blue" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} onSelect={handleSelectCar} />
            ))}
          </div>
        )}
      </main>
      <Footer />
      <CarDetailsModal car={selectedCar} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
