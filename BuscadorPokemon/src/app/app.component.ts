import { style } from '@angular/animations';
import {Component, isStandalone} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router' ;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})

export class AppComponent{
  titulo = 'Bienvenido al mejor buscador pokemon';
}
