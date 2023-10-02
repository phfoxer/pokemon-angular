import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formGroup!: FormGroup;

  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() width!: string;
}
