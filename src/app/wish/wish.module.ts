import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import {AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishService } from './wish.service';
import { WishComponent } from './wish.component';



@NgModule({
  declarations: [],
  imports: [WishComponent],
    exports: [WishComponent],
    providers: [WishService]
})
export class WishModule { }
