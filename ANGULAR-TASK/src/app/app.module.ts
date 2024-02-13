import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageFooterComponent } from './core/components/page-footer/page-footer.component';
import { TopMenuComponent } from './core/components/top-menu/top-menu.component';
import { UserDetailsListComponent } from './core/features/user-details-list/user-details-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCreateDetailsComponent } from './core/features/edit-create-details/edit-create-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
    TopMenuComponent,
    UserDetailsListComponent,
    EditCreateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
