import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishListComponent, MatChipsModule, MatListModule, MatInputModule, AddWishFormComponent, ReactiveFormsModule, WishFilterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [

    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  filter: any = () => {}; 
}
