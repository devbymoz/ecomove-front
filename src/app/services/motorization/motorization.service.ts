import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../models/response.interface.js';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development.js';

@Injectable({
  providedIn: 'root'
})
export class MotorizationService {
  readonly url = environment.apiURL + "/motorizations/";
  private _http = inject(HttpClient);

  // Permet de récupérer un véhicule via son Id.
  fetchMotorizations(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }

}
