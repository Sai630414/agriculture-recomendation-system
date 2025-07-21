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
   showLanguages = false;
  showServices = false;

  toggleDropdown(menu: string) {
    if (menu === 'languages') {
      this.showLanguages = !this.showLanguages;
      this.showServices = false;
    } else if (menu === 'services') {
      this.showServices = !this.showServices;
      this.showLanguages = false;
    }
  }

}
