import {Component, HostListener} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-one',
  imports: [
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
    const logoImage = document.querySelector('.logo-image') as HTMLImageElement;

    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        if (logoImage) {
          logoImage.src = './dogIconScrolled.png'; // Cambia a la imagen deseada
        }
      } else {
        navbar.classList.remove('scrolled');
        if (logoImage) {
          logoImage.src = './dogIcon.png'; // Imagen original
        }
      }
    }
  }

}
