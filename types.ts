
export type Transmission = 'Automatic' | 'Manual';
export type FuelType = 'Gasoline' | 'Electric' | 'Hybrid' | 'Diesel';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  type: string;
  pricePerDay: number;
  seats: number;
  transmission: Transmission;
  fuelType: FuelType;
  imageUrl: string;
  features: string[];
}
