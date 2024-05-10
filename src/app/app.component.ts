import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import {EventService} from './../shared/Services/EventService';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import {AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishService } from './wish.service';
import { error } from 'console';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WishListComponent, RouterOutlet, WishFilterComponent, AddWishFormComponent, WishListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  items : WishItem[] = [];

  filter: any; 


  constructor(events : EventService, private wishService : WishService ){
    events.listen('removeWish', (wish : any) =>{
      //todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }
  ngOnInit(): void {
  this.wishService.getWishes().subscribe(
    (data : any)=> {
    this.items = data;
  },
  (error : any)=>{
    alert(error.message);
  }

);
  }


}
