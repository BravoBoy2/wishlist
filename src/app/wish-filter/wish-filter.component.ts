import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { WishListComponent } from '../wish-list/wish-list.component';
import {FormsModule } from '@angular/forms';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [MatChipsModule, MatInputModule, CommonModule,
    MatListModule, WishListComponent, FormsModule], 
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
 
@Input() filter : any;
@Output() filterChange = new EventEmitter<any>();

 ngOnInit(): void {
    this.updateFilter('0');
  }

// @Input() listFilter: string = '0' ; // Default filter value
 

listFilter : any = '0';

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
 