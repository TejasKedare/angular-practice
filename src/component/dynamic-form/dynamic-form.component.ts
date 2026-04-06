import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  form!: FormGroup;
 text = "Angular makes development easier and faster";
   search = "angular";
  countries = ['India', 'USA'];

  statesMap: any = {
    India: ['Maharashtra', 'Gujarat'],
    USA: ['California', 'Texas']
  };

  districtsMap: any = {
    Maharashtra: ['Mumbai', 'Pune', 'Nashik'],
    Gujarat: ['Ahmedabad', 'Surat'],
    California: ['LA', 'San Diego'],
    Texas: ['Houston', 'Dallas']
  };

  states: string[] = [];
  districts: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.handleUserTypeChanges();
    this.handleLocationChanges();
    this.handleAgeChanges();
  }

  // -------------------------------
  // 🔹 Initialize Form
  // -------------------------------
  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: [''],
      country: [''],
      state: [''],
      district: [''],
      userType: [''],
      extraField: [''],
      phones: this.fb.array([])
    });
  }

  // -------------------------------
  // 🔹 FormArray (Phones)
  // -------------------------------
  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }

  addPhone() {
    const age = this.form.get('age')?.value;

    // ❌ Do not allow if age ≤ 18
    if (age <= 18) return;

    this.phones.push(this.fb.control('', Validators.required));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  // -------------------------------
  // 🔹 Dynamic validation (User Type)
  // -------------------------------
  handleUserTypeChanges() {
    this.form.get('userType')?.valueChanges.subscribe(type => {
      const control = this.form.get('extraField');

      if (type === 'student') {
        control?.setValidators([Validators.required]);
      } else if (type === 'employee') {
        control?.setValidators([Validators.required]);
      } else {
        control?.clearValidators();
      }

      control?.updateValueAndValidity();
    });
  }

  // -------------------------------
  // 🔹 Dependent Dropdowns
  // -------------------------------
  handleLocationChanges() {
    this.form.get('country')?.valueChanges.subscribe(country => {
      this.states = this.statesMap[country] || [];
      this.districts = [];

      this.form.patchValue({ state: '', district: '' });
    });

    this.form.get('state')?.valueChanges.subscribe(state => {
      this.districts = this.districtsMap[state] || [];

      this.form.patchValue({ district: '' });
    });
  }

  // -------------------------------
  // 🔹 Dynamic control + logic based on age
  // -------------------------------
  handleAgeChanges() {
    this.form.get('age')?.valueChanges.subscribe(age => {

      const extraField = this.form.get('extraField');

      if (age < 18) {
        // Minor → extraField required
        extraField?.setValidators([Validators.required]);

        // ❌ Remove phones
        this.phones.clear();

        // ❌ Remove dynamic ID field
        if (this.form.contains('id')) {
          this.form.removeControl('id');
        }

      } else {
        // Adult → remove extraField validation
        extraField?.clearValidators();

        // ✅ Add phone if empty
        if (this.phones.length === 0) {
          this.addPhone();
        }

        // ✅ Add dynamic ID field
        if (!this.form.contains('id')) {
          this.form.addControl(
            'id',
            this.fb.control('', [
              Validators.required,
              Validators.minLength(5)
            ])
          );
        }
      }

      extraField?.updateValueAndValidity();
    });
  }

  // -------------------------------
  // 🔹 Submit
  // -------------------------------
  submit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}