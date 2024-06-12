import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment.development.js';
import { Response } from '../models/response.interface.js';
import { CreateVehicle } from '../models/vehicles/create-vehicle.interface.js';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  readonly url = environment.apiURL + "/vehicles/";
  private _http = inject(HttpClient);

  // Permet de récupérer un véhicule via son Id.
  fetDetailsVehicle(id: string): Observable<Response> {
    return this._http.get<Response>(this.url + id);
  }

  // Permet de supprimer un véhicule.
  fetchRemoveVehicle(id: string): Observable<Response> {
    // const validRemove = confirm("Voulez-vous supprimer ce véhicule ?");
      return this._http.delete<Response>(this.url + id)
  }

  // Permet de créer un vehicule
  fetchCreateVehicle(vehicle?: any): Observable<any> {
    return this._http.post<any>(this.url, vehicle);
  }



}
