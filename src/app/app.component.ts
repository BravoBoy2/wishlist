import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items = [
    new WishItem('To Learn Angular', 'using angular'),
    new WishItem('Get Coffee', 'Following Envado Tuts guide', true),
    new WishItem('Find grass that cuts itself', "I don't know if such thing exist")
  ];
  title = 'my wishlist';
}
