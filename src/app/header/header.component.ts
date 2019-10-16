import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() recipesClicked = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onSelect = (feature: string) => {
    this.recipesClicked.emit(feature)
  }


}
