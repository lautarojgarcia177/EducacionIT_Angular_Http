import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'superlista-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
