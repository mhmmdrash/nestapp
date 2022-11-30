import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import  { CAR } from './mock.car'

@Injectable()
export class CarService {
    cars = CAR;

    getCars(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.cars);
        })
    }

    getCar(carId): Promise<any> {
        let id = Number(carId);
        return new Promise(resolve => {
            const car = this.cars.find(car => car.id === id);
            if(!car) {
                throw new HttpException('Car does not exist', 404);
            }
            resolve(car);
        })
    }

    addCar(car): Promise<any> {
        return new Promise(resolve => {
            this.cars.push(car)
            resolve(this.cars);
        })
    }

    deleteCar(carId): Promise<any> {
        let id = Number(carId);
        return new Promise(resolve => {
            let index = this.cars.findIndex(car => car.id === id);
            if(index === -1) {
                throw new HttpException('Car does not exist', 404);
            }
            this.cars.splice(index, 1)
            resolve(this.cars);
        })
    }
}
