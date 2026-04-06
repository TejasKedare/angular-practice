import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomPipePipe } from '../../../pipe/custom-pipe.pipe';
import { ApiCallsService } from '../../../services/api-calls.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-become-a-partner',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CustomPipePipe, HttpClientModule],
  templateUrl: './become-a-partner.component.html',
  styleUrls: ['./become-a-partner.component.scss']
})
export class BecomeAPartnerComponent {

  constructor(
    private fb: FormBuilder,
    private apiCallsService: ApiCallsService,
  ) { }

  partnerForm!: FormGroup

  testString: string = ' this is a test string'

  ngOnInit() {
    this.initializeForm()
    this.getApiResponse()
  }

  initializeForm() {
    this.partnerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }

  submitForm() {
    console.log(this.partnerForm.value);
  }
  
  getApiResponse() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.apiCallsService.getRequest(url).subscribe({
      next: (res) => {
        console.log('Response:', res);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

}
