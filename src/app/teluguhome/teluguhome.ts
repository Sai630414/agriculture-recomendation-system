import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Content } from './content/content';
import { Content2 } from './content2/content2';

@Component({
  selector: 'app-teluguhome',
  imports: [RouterOutlet,Sidebar,Content,Content2],
  templateUrl: './teluguhome.html',
  styleUrl: './teluguhome.css'
})
export class Teluguhome {

}
