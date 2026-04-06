import { CommonModule } from '@angular/common';
import { Component, computed, effect, Renderer2, signal, ViewChildren, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
   private renderer: Renderer2
  ) {
    
  }

@ViewChildren('buttons') buttons : any[] = []

  count = signal(0)
  price = signal(3)

  total = computed(() => this.count() + this.price())

  countriesArr = [
    {
      "country": "United States",
      "code": "US",
      "states": [
        { "name": "California", "code": "CA" },
        { "name": "Texas", "code": "TX" },
        { "name": "New York", "code": "NY" },
        { "name": "Florida", "code": "FL" }
      ]
    },
    {
      "country": "India",
      "code": "IN",
      "states": [
        { "name": "Maharashtra", "code": "MH" },
        { "name": "Gujarat", "code": "GJ" },
        { "name": "Karnataka", "code": "KA" },
        { "name": "Tamil Nadu", "code": "TN" }
      ]
    },
    {
      "country": "Canada",
      "code": "CA",
      "states": [
        { "name": "Ontario", "code": "ON" },
        { "name": "Quebec", "code": "QC" },
        { "name": "British Columbia", "code": "BC" },
        { "name": "Alberta", "code": "AB" }
      ]
    },
    {
      "country": "Australia",
      "code": "AU",
      "states": [
        { "name": "New South Wales", "code": "NSW" },
        { "name": "Victoria", "code": "VIC" },
        { "name": "Queensland", "code": "QLD" },
        { "name": "Western Australia", "code": "WA" }
      ]
    }
  ]

  stateList: any
  selectedState: any

  buttonsArr = ['green', 'red', 'blue']

    // Write a function to return all unique values from an array of nested objects:
    // const data = [{ tags: ['a','b'] }, { tags: ['b','c'] }];
    data = [{ tags: ['a','b'] }, { tags: ['b','c'] }];


  ngOnInit() {
    this.stateList = this.countriesArr[0].states
    
    let temp = []
    this.data.forEach(e => {
      temp.push(...e.tags)
      console.log(new Set(temp));

      return new Set(temp)
    });

  }

  changeColor(color: string) {
    
    this.buttons.filter((el:any) => {
      
        if (el.nativeElement.id == color) {
          this.renderer.setStyle(el.nativeElement,'background',color) 
        }
    })

  }

  handleChange(country: any) {
    this.stateList = undefined
    this.stateList = country.states
  }

  handleSubmit( ) {
    // console.log('this are the selected states :',this.stateList);
    
  }

  setSelectedState(state: any) {
    this.selectedState = state
  }


  increment() {
    this.count.update(prev => prev + 1)
  }




}
