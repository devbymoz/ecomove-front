import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development.js';
import { Observable } from 'rxjs';
import { Response } from '../../models/response.interface.js';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  readonly url = environment.apiURL + '/brands/';
  private _http = inject(HttpClient);

  // Permet de récupérer toutes les marques
  fetchBrands(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }
}
