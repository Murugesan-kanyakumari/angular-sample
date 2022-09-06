import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { StoreDataService } from './services/store-data.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'intern-app';
    registerForm!: FormGroup;
    submitted = false;

    particularList: any = [
        { id: 1, name: 'particular 1' },
        { id: 2, name: 'particular 2' },
        { id: 3, name: 'particular 3' },
        { id: 4, name: 'particular 4' },
        { id: 5, name: 'particular 5' }
      ];

    constructor(private formBuilder: FormBuilder, public myService: StoreDataService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            partyName: ['', Validators.required],
            mobileNo: ['', Validators.required],
            date: ['', Validators.required],
            productName: ['', Validators.required],
            price: ['', Validators.required],
            quantity: ['', Validators.required],
            cgst: ['', Validators.required],
            sgst: ['', Validators.required],
            amount: ['', Validators.required],
            totalAmount: ['', Validators.required],
            totalPayableAmount: ['', Validators.required],
            amountInWords: ['', Validators.required],
            particular: this.formBuilder.array([], [Validators.required])
        });
    }
    get formControls(): { [key: string]: AbstractControl; } {
        return this.registerForm.controls;
    }

    onCheckboxChange(e:any) {
        
        const particular: FormArray = this.registerForm.get('particular') as FormArray;
        if (e.target.checked) {
          particular.push(new FormControl({name:e.target.value}));
        } else {
           const index = particular.controls.findIndex(x => x.value === e.target.value);
           particular.removeAt(index);
        }
      }

    formSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
       const saveData =  this.myService.storeFormData(this.registerForm.value);
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
