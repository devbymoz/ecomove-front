import { Component } from '@angular/core';
import { HeaderBaseComponent } from '../../header-base/header-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-colab',
  standalone: true,
  imports: [HeaderBaseComponent, ButtonComponent, NgClass],
  templateUrl: './nav-colab.component.html',
  styleUrl: './nav-colab.component.css'
})
export class NavColabComponent {

}
