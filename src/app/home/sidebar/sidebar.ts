import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  activeNavItem: string = 'home';
  isDropdown1Open = false;
  isDropdown2Open = false;
  loginVisible = false; // 🔁 Toggle flag

  constructor(private router: Router, private route: ActivatedRoute) {}

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

  openLogin() {
    if (this.loginVisible) {
      // 🔁 Close login outlet
      this.router.navigate([{ outlets: { loginOutlet: null } }], { relativeTo: this.route });
    } else {
      // ✅ Open login outlet
      this.router.navigate([{ outlets: { loginOutlet: ['login'] } }], { relativeTo: this.route });
    }
    this.loginVisible = !this.loginVisible;
  }
}
