import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
   activeNavItem: string = 'home';
  isDropdown1Open = false;
  isDropdown2Open = false;

  setActive(item: string) {
    this.activeNavItem = item;
    this.isDropdown1Open = false;
    this.isDropdown2Open = false;
  }

  toggleDropdown(dropdownNumber: number) {
    if (dropdownNumber === 1) {
      this.isDropdown1Open = !this.isDropdown1Open;
      this.isDropdown2Open = false;
    } else {
      this.isDropdown2Open = !this.isDropdown2Open;
      this.isDropdown1Open = false;
    }
  }

  onDropdownClick(item: string) {
    alert(`You clicked: ${item}`);
  }
}