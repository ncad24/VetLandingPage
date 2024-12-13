import {Component, HostListener} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-one',
  imports: [
    NavbarComponent,
    MatButton,
    MatMenu,
    MatMenuItem,
    MatToolbar,
    MatMenuTrigger

  ],
  templateUrl: './landing-one.component.html',
  standalone: true,
  styleUrl: './landing-one.component.css'
})
export class LandingOneComponent {

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
