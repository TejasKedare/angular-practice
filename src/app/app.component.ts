import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SearchHighlightDirective } from '@tejaskedare/search-highlight';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, SearchHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';

 text = "Angular makes development easier and faster";
 searchTerm = "angular";;

}
