import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService, Pokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private pokemonService = inject(PokemonService);

  query = signal('ditto');
  pokemon = signal<Pokemon | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  search(): void {
    const value = this.query().trim();
    if (!value) {
      this.error.set('Escribe el nombre o número de un Pokémon.');
      this.pokemon.set(null);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.pokemonService.getPokemon(value).subscribe({
      next: (result) => {
        this.pokemon.set(result);
        this.loading.set(false);
      },
      error: () => {
        this.pokemon.set(null);
        this.error.set(`No se encontró ningún Pokémon llamado "${value}".`);
        this.loading.set(false);
      },
    });
  }
}
