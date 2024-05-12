import { Component, Input } from '@angular/core';
import { MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';
import { WishItem } from '../../../shared/models/wishItem';



@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [MatListModule, MatCheckboxModule, MatButtonModule, MatInputModule, FormsModule, MatChipsModule, CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
 @Input() wishes : WishItem[] = [];



}
