import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  showDropdown: boolean = false;
  @Input()
  filterItems: Filter[] = [];
  @Input()
  filteredItems: string[] = [];

  @Output()
  onchange: EventEmitter<string[]> = new EventEmitter<string[]>();

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  close(){
    this.showDropdown = false
  }
  
  addRemoveFilter(item: string){
    if(!this.filteredItems.includes(item)){
      this.filteredItems.push(item);
    }
    else{
      let index = this.filteredItems.findIndex(f => f == item);
      this.filteredItems.splice(index, 1);
    }
    this.filterChanged();
  }

  filterChanged(){
    this.onchange.emit(this.filteredItems);
  }

}
