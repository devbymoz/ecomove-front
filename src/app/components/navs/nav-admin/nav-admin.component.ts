import { Component } from '@angular/core';
import { HeaderBaseComponent } from '../../header-base/header-base.component.js';
import { ButtonComponent } from '../../buttons/button/button.component.js';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [HeaderBaseComponent, ButtonComponent, NgClass],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css'
})
export class NavAdminComponent {

}
