import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef; 
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef; 
  @Output() newIngredientAdded = new EventEmitter<Ingredient>()
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onAddItem = () => {
    const newIngredient: Ingredient = {
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    }
    this.shoppingService.addIngredient(newIngredient)
  }
}
