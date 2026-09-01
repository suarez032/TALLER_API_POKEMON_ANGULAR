import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Pokemon {
  name: string;
  image: string;
}

interface PokeApiResponse {
  name: string;
  sprites: {
    other?: {
      'official-artwork'?: { front_default: string | null };
    };
    front_default: string | null;
  };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(nameOrId: string): Observable<Pokemon> {
    const query = nameOrId.trim().toLowerCase();
    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${query}`).pipe(
      map((res) => ({
        name: res.name,
        image:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
      }))
    );
  }
}
