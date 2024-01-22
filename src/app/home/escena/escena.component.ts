
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../../interfaces/istep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {

  @Input()
  public steps: iStep[] = [];

  public currentStep = 0;

  previous() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.currentStep = this.steps.length - 1;
    }
  }

  nextArticle() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.currentStep = 0
    }
  }

  activeStep() {
    this.currentStep = this.steps.length
  }
}



