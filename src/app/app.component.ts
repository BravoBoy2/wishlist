import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import {EventService} from './../shared/Services/EventService';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WishListComponent, RouterOutlet, WishFilterComponent, AddWishFormComponent, WishListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [

    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  filter: any; 


  constructor(events : EventService){
    events.listen('removeWish', (wish : any) =>{
      //todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }
}
