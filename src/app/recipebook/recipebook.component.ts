import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.scss']
})
export class RecipebookComponent implements OnInit {
  selectedRecipe;
  constructor() { }

  ngOnInit() {
  }

}
