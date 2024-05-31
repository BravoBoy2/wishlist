import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {MatIconModule } from '@angular/material/icon';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/Services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [MatListModule, MatCheckboxModule, CommonModule, MatIconModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wish! : WishItem;
  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();


  get cssClasses() {
    //  return this.fullfilled ? ['strikeout opacity'] : [];
    return {'strikeout opacity' : this.fullfilled};

  }
  constructor(private events : EventService){

  }

  removeWish() {
  this.events.emit('removeWish', this.wish);
  }
     toggleFullFilled(){
    this.wish.isComplete = !this.wish.isComplete;
  }

}