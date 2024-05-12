import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import {EventService} from './../shared/Services/EventService';
import { error } from 'console';
import { WishModule } from './wish/wish.module';
import { WishService } from './wish/wish.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  


}
