import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  ngOnInit() {
    this.headers = Object.keys(this.data[0])
  }

  headers: string[] = [];


  data: any[] = [
  { ID: 1, Name: "Tejas", Email: "tejas@mail.com", City: "Mumbai", Role: "Frontend Dev", Status: "Active" },
  { ID: 2, Name: "Maulik", Email: "maulik@mail.com", City: "Pune", Role: "Manager", Status: "Active" },
  { ID: 3, Name: "Sumit", Email: "sumit@mail.com", City: "Nagpur", Role: "Lead", Status: "Inactive" },
  { ID: 4, Name: "Tushar", Email: "tushar@mail.com", City: "Delhi", Role: "Senior Dev", Status: "Active" },
  { ID: 5, Name: "Akanksha", Email: "akanksha@mail.com", City: "Mumbai", Role: "HR", Status: "Active" },
  { ID: 6, Name: "Rahul", Email: "rahul@mail.com", City: "Pune", Role: "Tester", Status: "Inactive" },

  { ID: 7, Name: "Amit", Email: "amit@mail.com", City: "Chennai", Role: "Backend Dev", Status: "Active" },
  { ID: 8, Name: "Priya", Email: "priya@mail.com", City: "Hyderabad", Role: "UI/UX Designer", Status: "Active" },
  { ID: 9, Name: "Karan", Email: "karan@mail.com", City: "Bangalore", Role: "Frontend Dev", Status: "Inactive" },
  { ID: 10, Name: "Sneha", Email: "sneha@mail.com", City: "Delhi", Role: "Tester", Status: "Active" },
  { ID: 11, Name: "Rohit", Email: "rohit@mail.com", City: "Pune", Role: "DevOps", Status: "Active" },
  { ID: 12, Name: "Neha", Email: "neha@mail.com", City: "Mumbai", Role: "HR", Status: "Inactive" },
  { ID: 13, Name: "Vikas", Email: "vikas@mail.com", City: "Chennai", Role: "Backend Dev", Status: "Active" },
  { ID: 14, Name: "Tanvi", Email: "tanvi@mail.com", City: "Bangalore", Role: "Frontend Dev", Status: "Active" },
  { ID: 15, Name: "Sagar", Email: "sagar@mail.com", City: "Indore", Role: "Manager", Status: "Inactive" },
  { ID: 16, Name: "Meera", Email: "meera@mail.com", City: "Pune", Role: "HR", Status: "Active" },
  { ID: 17, Name: "Jay", Email: "jay@mail.com", City: "Mumbai", Role: "Tester", Status: "Active" },
  { ID: 18, Name: "Riya", Email: "riya@mail.com", City: "Nagpur", Role: "Frontend Dev", Status: "Inactive" },
  { ID: 19, Name: "Harsh", Email: "harsh@mail.com", City: "Delhi", Role: "DevOps", Status: "Active" },
  { ID: 20, Name: "Pooja", Email: "pooja@mail.com", City: "Chennai", Role: "Senior Dev", Status: "Active" },
  { ID: 21, Name: "Nitin", Email: "nitin@mail.com", City: "Hyderabad", Role: "Lead", Status: "Inactive" },
  { ID: 22, Name: "Komal", Email: "komal@mail.com", City: "Bangalore", Role: "UI/UX Designer", Status: "Active" },
  { ID: 23, Name: "Deepak", Email: "deepak@mail.com", City: "Pune", Role: "Backend Dev", Status: "Active" },
  { ID: 24, Name: "Aisha", Email: "aisha@mail.com", City: "Mumbai", Role: "Frontend Dev", Status: "Inactive" },
  { ID: 25, Name: "Dhruv", Email: "dhruv@mail.com", City: "Delhi", Role: "Tester", Status: "Active" },
  { ID: 26, Name: "Rashmi", Email: "rashmi@mail.com", City: "Nagpur", Role: "HR", Status: "Active" },
  { ID: 27, Name: "Kunal", Email: "kunal@mail.com", City: "Chennai", Role: "DevOps", Status: "Inactive" },
  { ID: 28, Name: "Shruti", Email: "shruti@mail.com", City: "Bangalore", Role: "Senior Dev", Status: "Active" },
  { ID: 29, Name: "Gaurav", Email: "gaurav@mail.com", City: "Pune", Role: "Backend Dev", Status: "Active" },
  { ID: 30, Name: "Ananya", Email: "ananya@mail.com", City: "Hyderabad", Role: "Lead", Status: "Inactive" },

  { ID: 31, Name: "Yash", Email: "yash@mail.com", City: "Indore", Role: "Tester", Status: "Active" },
  { ID: 32, Name: "Muskan", Email: "muskan@mail.com", City: "Delhi", Role: "HR", Status: "Active" },
  { ID: 33, Name: "Arjun", Email: "arjun@mail.com", City: "Chennai", Role: "Frontend Dev", Status: "Inactive" },
  { ID: 34, Name: "Sana", Email: "sana@mail.com", City: "Mumbai", Role: "UI/UX Designer", Status: "Active" },
  { ID: 35, Name: "Aditya", Email: "aditya@mail.com", City: "Pune", Role: "DevOps", Status: "Active" },
  { ID: 36, Name: "Isha", Email: "isha@mail.com", City: "Hyderabad", Role: "Tester", Status: "Inactive" },
  { ID: 37, Name: "Manish", Email: "manish@mail.com", City: "Bangalore", Role: "Backend Dev", Status: "Active" },
  { ID: 38, Name: "Vidhi", Email: "vidhi@mail.com", City: "Mumbai", Role: "HR", Status: "Active" },
  { ID: 39, Name: "Ramesh", Email: "ramesh@mail.com", City: "Nagpur", Role: "Manager", Status: "Inactive" },
  { ID: 40, Name: "Jaya", Email: "jaya@mail.com", City: "Delhi", Role: "Senior Dev", Status: "Active" },

  { ID: 41, Name: "Parth", Email: "parth@mail.com", City: "Surat", Role: "Frontend Dev", Status: "Active" },
  { ID: 42, Name: "Tina", Email: "tina@mail.com", City: "Jaipur", Role: "Tester", Status: "Inactive" },
  { ID: 43, Name: "Himanshu", Email: "himanshu@mail.com", City: "Indore", Role: "Backend Dev", Status: "Active" },
  { ID: 44, Name: "Kirti", Email: "kirti@mail.com", City: "Mumbai", Role: "HR", Status: "Active" },
  { ID: 45, Name: "Shivam", Email: "shivam@mail.com", City: "Pune", Role: "DevOps", Status: "Inactive" },
  { ID: 46, Name: "Mallika", Email: "mallika@mail.com", City: "Chennai", Role: "Lead", Status: "Active" },
  { ID: 47, Name: "Ayush", Email: "ayush@mail.com", City: "Delhi", Role: "Frontend Dev", Status: "Active" },
  { ID: 48, Name: "Naina", Email: "naina@mail.com", City: "Bangalore", Role: "Tester", Status: "Inactive" },
  { ID: 49, Name: "Raj", Email: "raj@mail.com", City: "Hyderabad", Role: "Senior Dev", Status: "Active" },
  { ID: 50, Name: "Soniya", Email: "soniya@mail.com", City: "Mumbai", Role: "UI/UX Designer", Status: "Active" },

  { ID: 51, Name: "Farhan", Email: "farhan@mail.com", City: "Pune", Role: "Backend Dev", Status: "Inactive" },
  { ID: 52, Name: "Lavanya", Email: "lavanya@mail.com", City: "Hyderabad", Role: "HR", Status: "Active" },
  { ID: 53, Name: "Abhishek", Email: "abhishek@mail.com", City: "Nagpur", Role: "DevOps", Status: "Active" },
  { ID: 54, Name: "Pallavi", Email: "pallavi@mail.com", City: "Delhi", Role: "Tester", Status: "Inactive" },
  { ID: 55, Name: "Sahil", Email: "sahil@mail.com", City: "Chennai", Role: "Frontend Dev", Status: "Active" },
  { ID: 56, Name: "Mahima", Email: "mahima@mail.com", City: "Indore", Role: "Lead", Status: "Active" },
  { ID: 57, Name: "Chetan", Email: "chetan@mail.com", City: "Surat", Role: "Backend Dev", Status: "Inactive" },
  { ID: 58, Name: "Zara", Email: "zara@mail.com", City: "Bangalore", Role: "UI/UX Designer", Status: "Active" },
  { ID: 59, Name: "Ravindra", Email: "ravindra@mail.com", City: "Pune", Role: "Senior Dev", Status: "Active" },
  { ID: 60, Name: "Heena", Email: "heena@mail.com", City: "Mumbai", Role: "HR", Status: "Inactive" },

  { ID: 61, Name: "Sumeet", Email: "sumeet@mail.com", City: "Delhi", Role: "Backend Dev", Status: "Active" },
  { ID: 62, Name: "Bhavana", Email: "bhavana@mail.com", City: "Chennai", Role: "Frontend Dev", Status: "Inactive" },
  { ID: 63, Name: "Viraj", Email: "viraj@mail.com", City: "Mumbai", Role: "Tester", Status: "Active" },
  { ID: 64, Name: "Nikita", Email: "nikita@mail.com", City: "Pune", Role: "UI/UX Designer", Status: "Active" },
  { ID: 65, Name: "Arnav", Email: "arnav@mail.com", City: "Bangalore", Role: "DevOps", Status: "Inactive" },
  { ID: 66, Name: "Simran", Email: "simran@mail.com", City: "Hyderabad", Role: "Senior Dev", Status: "Active" },
  { ID: 67, Name: "Rajat", Email: "rajat@mail.com", City: "Delhi", Role: "Frontend Dev", Status: "Active" },
  { ID: 68, Name: "Harini", Email: "harini@mail.com", City: "Chennai", Role: "Tester", Status: "Inactive" },
  { ID: 69, Name: "Madhav", Email: "madhav@mail.com", City: "Indore", Role: "Lead", Status: "Active" },
  { ID: 70, Name: "Shreya", Email: "shreya@mail.com", City: "Mumbai", Role: "HR", Status: "Active" },

  { ID: 71, Name: "Pratik", Email: "pratik@mail.com", City: "Pune", Role: "Backend Dev", Status: "Inactive" },
  { ID: 72, Name: "Kavya", Email: "kavya@mail.com", City: "Bangalore", Role: "Frontend Dev", Status: "Active" },
  { ID: 73, Name: "Dev", Email: "dev@mail.com", City: "Hyderabad", Role: "Tester", Status: "Active" },
  { ID: 74, Name: "Sushma", Email: "sushma@mail.com", City: "Surat", Role: "UI/UX Designer", Status: "Inactive" },
  { ID: 75, Name: "Mayur", Email: "mayur@mail.com", City: "Delhi", Role: "DevOps", Status: "Active" },
  { ID: 76, Name: "Alisha", Email: "alisha@mail.com", City: "Nagpur", Role: "HR", Status: "Active" },
  { ID: 77, Name: "Rishi", Email: "rishi@mail.com", City: "Chennai", Role: "Senior Dev", Status: "Inactive" },
  { ID: 78, Name: "Divya", Email: "divya@mail.com", City: "Mumbai", Role: "Frontend Dev", Status: "Active" },
  { ID: 79, Name: "Sandeep", Email: "sandeep@mail.com", City: "Pune", Role: "Backend Dev", Status: "Active" },
  { ID: 80, Name: "Trisha", Email: "trisha@mail.com", City: "Bangalore", Role: "Tester", Status: "Inactive" },

  { ID: 81, Name: "Naman", Email: "naman@mail.com", City: "Hyderabad", Role: "Lead", Status: "Active" },
  { ID: 82, Name: "Esha", Email: "esha@mail.com", City: "Mumbai", Role: "UI/UX Designer", Status: "Active" },
  { ID: 83, Name: "Kabir", Email: "kabir@mail.com", City: "Delhi", Role: "Frontend Dev", Status: "Inactive" },
  { ID: 84, Name: "Payal", Email: "payal@mail.com", City: "Chennai", Role: "Tester", Status: "Active" },
  { ID: 85, Name: "Aarav", Email: "aarav@mail.com", City: "Surat", Role: "Backend Dev", Status: "Active" },
  { ID: 86, Name: "Jhanvi", Email: "jhanvi@mail.com", City: "Indore", Role: "HR", Status: "Inactive" },
  { ID: 87, Name: "Tarun", Email: "tarun@mail.com", City: "Pune", Role: "DevOps", Status: "Active" },
  { ID: 88, Name: "Swara", Email: "swara@mail.com", City: "Bangalore", Role: "Frontend Dev", Status: "Active" },
  { ID: 89, Name: "Omkar", Email: "omkar@mail.com", City: "Nagpur", Role: "Senior Dev", Status: "Inactive" },
  { ID: 90, Name: "Mitali", Email: "mitali@mail.com", City: "Hyderabad", Role: "UI/UX Designer", Status: "Active" },

  { ID: 91, Name: "Ashish", Email: "ashish@mail.com", City: "Delhi", Role: "Backend Dev", Status: "Active" },
  { ID: 92, Name: "Vaishnavi", Email: "vaishnavi@mail.com", City: "Mumbai", Role: "Tester", Status: "Inactive" },
  { ID: 93, Name: "Shantanu", Email: "shantanu@mail.com", City: "Pune", Role: "Lead", Status: "Active" },
  { ID: 94, Name: "Rekha", Email: "rekha@mail.com", City: "Bangalore", Role: "HR", Status: "Active" },
  { ID: 95, Name: "Mohan", Email: "mohan@mail.com", City: "Chennai", Role: "DevOps", Status: "Inactive" },
  { ID: 96, Name: "Kritika", Email: "kritika@mail.com", City: "Hyderabad", Role: "Frontend Dev", Status: "Active" },
  { ID: 97, Name: "Bhavesh", Email: "bhavesh@mail.com", City: "Surat", Role: "Backend Dev", Status: "Active" },
  { ID: 98, Name: "Anushka", Email: "anushka@mail.com", City: "Indore", Role: "Tester", Status: "Inactive" },
  { ID: 99, Name: "Hardik", Email: "hardik@mail.com", City: "Mumbai", Role: "Senior Dev", Status: "Active" },
  { ID: 100, Name: "Priti", Email: "priti@mail.com", City: "Delhi", Role: "UI/UX Designer", Status: "Active" },
];


}
