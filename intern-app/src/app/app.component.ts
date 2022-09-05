import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intern-app';
  registerForm!: FormGroup;
  submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
    }
    get f(): { [key: string]: AbstractControl; }
{
  return this.registerForm.controls;
}

    formSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
