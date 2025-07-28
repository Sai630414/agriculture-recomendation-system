import { Component } from '@angular/core';
import { Sidebar } from "./sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Content } from "./content/content";
import { Content2 } from "./content2/content2";
import { Content3 } from "./content3/content3";
import { Contactmeform } from "./contactmeform/contactmeform";


@Component({
  selector: 'app-home',
  imports: [Sidebar, RouterOutlet, Content, Content2, Content3, Contactmeform],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


}
