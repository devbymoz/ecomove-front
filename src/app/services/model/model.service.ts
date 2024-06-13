import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development.js';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Response } from '../../models/response.interface.js';
import { Model } from '../../models/models/model.interface.js';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  readonly url = environment.apiURL + '/models/';
  private _http = inject(HttpClient);

  // Permet de récupérer toutes les categories
  fetchModelsByBrand(brandId: number): Observable<Model[]> {
    return this._http.get<Response>(this.url).pipe(
      map(obj => obj.data.filter((model: Model) => model.brandId === brandId))
    )
  }
}
