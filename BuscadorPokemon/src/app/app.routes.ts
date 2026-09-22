import { Routes } from '@angular/router';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon.component';
import { Bulbasaur } from './components/bulbasaur/bulbasaur.component';
import { Charmander } from './components/charmander/charmander.component';
import { Eevee } from './components/eevee/eevee.component';
import { Shinx } from './components/shinx/shinx.component';
import { Snorlax } from './components/snorlax/snorlax.component';
import { Squirtle } from './components/squirtle/squirtle.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import {PokemonLista} from './components/pokemon-lista/pokemon-lista.component'

export const routes: Routes = [

  {path: '',redirectTo: 'registro',pathMatch: 'full'},
  {path: 'registro',component: RegistroUsuario},
  {path: 'buscador',component: BuscadorPokemon},
  {path: 'bulbasaur',component: Bulbasaur},
  {path: 'charmander',component: Charmander},
  {path: 'eevee',component: Eevee},
  {path: 'shinx',component: Shinx},
  {path: 'snorlax',component: Snorlax},
  {path: 'squirtle',component: Squirtle},
  {path: 'detalles',component: PokemonDetallesComponent},
  {path: 'lista',component: PokemonLista},
  {path: '**',redirectTo: 'registro'}

];