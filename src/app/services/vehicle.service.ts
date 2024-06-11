import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment.development.js';
import { Response } from '../models/response.interface.js';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  readonly url = environment.apiURL + "/vehicles/";
  private http = inject(HttpClient);

  // Permet de récupérer un véhicule via son Id.
  fetDetailsVehicle(id: string): Observable<Response> {
    return this.http.get<Response>(this.url + id);
  }

  // Permet de supprimer un véhicule.
  fetchRemoveVehicle(id: string) : Observable<Response> {
    // const validRemove = confirm("Voulez-vous supprimer ce véhicule ?");
      return this.http.delete<Response>(this.url + id)
  }


}
