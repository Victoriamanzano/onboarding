import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from './escena/escena.component';
import { StepsService } from '.././services/steps.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EscenaComponent, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public stepsServices: StepsService) {

  }

}
