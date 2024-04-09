import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';





const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WishListComponent, MatChipsModule, FormsModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule],
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
  newWishText = '';

 get visibleItems() : WishItem[] {
  return this.items.filter(filters[this.listFilter]);
 };

  addNewWish(){
    // todo: add wish to item array
    //clear the textbox
this.items.push(new WishItem(this.newWishText));
this.newWishText = '';
  }

 

}
