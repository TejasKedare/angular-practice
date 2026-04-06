import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent {
  constructor(
    private userData: UserDataService,
  ) {

  }

  user!: any 
  tableHeader: string[] = []

  userForm = new FormGroup ({
    user: new FormControl('')
  })
// manager id - if employee is selected
// if manager - no need for this field
  ngOnInit() {
     this.userData.getUserList().subscribe((res: any) => {
      if(res) {
        this.user = res
        this.tableHeader = Object.keys(this.user[0]) 
      }
    })
  }
}
