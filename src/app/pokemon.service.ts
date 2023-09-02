import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  buscarPersonaje(nombre: string): Observable<any> {
    const url = `${this.baseUrl}/character/?name=${nombre}`;
    return this.http.get(url);
  }

  buscarPersonajeYDevolverImagenes(nombre: string): Observable<any> {
    return this.buscarPersonaje(nombre).pipe(
      map((respuesta) =>
        respuesta.results.map((result: any) => {
          const { name, image } = result;
          return {
            name,
            image,
          };
        })
      )
    );
  }
}
