import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

import { FormsModule } from '@angular/forms';





const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WishListComponent, MatChipsModule, MatListModule, MatInputModule, AddWishFormComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [

    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  title = 'my wishlist';
  listFilter : any = '0';
  

 get visibleItems() : WishItem[] {
  return this.items.filter(filters[this.listFilter]);
 };



 

}
