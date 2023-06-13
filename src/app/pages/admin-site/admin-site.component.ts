import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-site',
  templateUrl: './admin-site.component.html',
  styleUrls: ['./admin-site.component.css']
})
export class AdminSiteComponent {
  registerForm!:FormGroup
  submitted = false;

  //constructor(private formBuilder:FormBuilder)
}
