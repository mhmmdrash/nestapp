import { Controller, Delete, Get, Param, Body, Post, Query } from '@nestjs/common';
import { CarService } from './car.service'
import { CreateCarDto } from './create-car.dto'

@Controller('car')
export class CarController {
    constructor(private carService: CarService) {}

    @Get()
    async getCars() {
        const cars = await this.carService.getCars();
        return cars;
    }

    @Get(':carId')
    async getCar(@Param('carId') carId) {
        const car = await this.carService.getCar(carId);
        return car;
    }

    @Post()
    async addCar(@Body() createCarDto: CreateCarDto) {
        const car = await this.carService.addCar(createCarDto);
        return car;
    }

    @Delete()
    async deleteCar(@Query() query) {
        const cars = await this.carService.deleteCar(query.carId);
        return cars;
    }

}
