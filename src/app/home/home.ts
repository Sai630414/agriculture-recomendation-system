import { Component } from '@angular/core';
import { Sidebar } from "./sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Content } from "./content/content";
import { Content2 } from "./content2/content2";


@Component({
  selector: 'app-home',
  imports: [Sidebar, RouterOutlet, Content, Content2],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


}
