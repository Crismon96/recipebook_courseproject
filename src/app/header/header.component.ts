import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private DataStorage: DataStorageService) { }

  ngOnInit() {
  }
  onSaveData() {
    this.DataStorage.putFirebaseData()
  }

  onFetchData() {
    this.DataStorage.fetchFirebaseData();
  }
}
