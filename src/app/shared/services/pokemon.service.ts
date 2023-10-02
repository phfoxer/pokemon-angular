import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TPokemonByType, TPokemonResponse, TPokemonTypes } from '../types';
import { Observable, forkJoin, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonTypeList(): Observable<TPokemonResponse<TPokemonTypes>> {
    return this.http.get<TPokemonResponse<TPokemonTypes>>('type');
  }

  getPokemonType(url: string): Observable<TPokemonByType> {
    return this.http.get<TPokemonByType>(url);
  }

  getPokemon(urls: string[]): Promise<TPokemonByType[]> {
    const requestList: Promise<TPokemonByType>[] = [];
    urls.forEach(url => {
      const request = new Promise<TPokemonByType>((resolve, reject) => {
        this.http.get<TPokemonByType>(url).subscribe({
          next: result => resolve(result),
          error: error => reject(error)
        });
      });
      requestList.push(request)
    });
    return Promise.all(requestList)
  }

}
