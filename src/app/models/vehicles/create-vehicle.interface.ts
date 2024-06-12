import { Vehicle } from "./vehicle.interface.js";

export interface CreateVehicle extends Vehicle{
  categoryId: number;
  motorizationId: number;
  modelId: number;
}

