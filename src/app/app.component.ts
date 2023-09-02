import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonService } from './pokemon.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperLista__Angular';
  resultados: any = [];
  constructor(pokemonService: PokemonService) {
    pokemonService
      .buscarPersonajeYDevolverImagenes('Rick')
      // .pipe(
      //   /* Forma 2 */
      //   map((respuesta) => respuesta.results.map((result: any) => result.image))
      // )
      .subscribe({
        next: (respuesta) => {
          /* Forma 1: */
          // this.resultados = personaje.results.map((r: any) => r.image)
          this.resultados = respuesta;
          console.log(respuesta);
        },
      });
  }
}
