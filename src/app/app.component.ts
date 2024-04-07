import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatListModule, MatCheckboxModule, MatInputModule, MatButtonModule, FormsModule,MatChipsModule],
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
  listFilter : string = '0';
  newWishText = '';
  visibleItems : WishItem[] = this.items;

  addNewWish(){
    // todo: add wish to item array
    //clear the textbox
this.items.push(new WishItem(this.newWishText));
this.newWishText = '';
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  filterChanged(value : any){
    value = Number(value);
   switch (value){
    case 0:
      this.visibleItems = this.items;
      break;
      
      case 1:
        this.visibleItems = this.items.filter(item => !item.isComplete);
        break;

        case 2:
         this.visibleItems = this.items.filter(item => item.isComplete);
         break;

         default:
          this.visibleItems = this.items;
   }
  }
}
