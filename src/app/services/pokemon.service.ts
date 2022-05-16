import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { BasePortalOutlet } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  base_Url = environment.base_Url

  constructor(private http:HttpClient) { }

  getPokemons(index: number){
    return this.http.get<any>(`${this.base_Url}/pokemon/${index}`)
  }
}
