import { Component, Input } from '@angular/core';
import { MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [MatListModule, MatCheckboxModule, MatButtonModule, MatInputModule, FormsModule, MatChipsModule, CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent  {
 @Input() wishes : WishItem[] = [];

   toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
