import { Component, OnInit } from '@angular/core';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/Services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [WishComponent, WishFilterComponent, WishListComponent, WishListItemComponent, AddWishFormComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {

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
