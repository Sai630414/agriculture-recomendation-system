import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { Sidebar } from "./home/sidebar/sidebar"; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'farmer';
}
