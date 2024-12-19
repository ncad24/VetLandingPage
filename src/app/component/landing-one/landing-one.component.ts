import {Component, HostListener, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatToolbar} from '@angular/material/toolbar';
import {ViewportScroller} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-landing-one',
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatToolbar,
    MatMenuTrigger,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './landing-one.component.html',
  standalone: true,
  styleUrl: './landing-one.component.css'
})
export class LandingOneComponent {
  private viewportScroller: ViewportScroller = inject(ViewportScroller);
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

  scrollToSection(fragment: string): void {
    this.viewportScroller.scrollToAnchor(fragment);
  }

}
