import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { IfNotDirective } from './directives/if-not.directive';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { AuthorizationHeaderInterceptor } from './interceptors/authorization-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    ProductListComponent,
    HomePageComponent,
    LoginPageComponent,
    LoadingSpinnerComponent,
    ProductFormComponent,
    ProductFormPageComponent,
    DashboardProductsPageComponent,
    ProductCardComponent,
    FilterProductPipe,
    FilterProductByPricePipe,
    HighlightDirective,
    CategoryTableComponent,
    TodoListComponent,
    TodoItemComponent,
    IfNotDirective,
    OverlayLoadingComponent,
  ], // HTML taraf??ndaki angular bile??enlerini tan??mlar
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ], // Angular mod??lleri import edece??imiz yer
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHeaderInterceptor,
      multi: true,
    },
  ], // IoC Container'daki Dependency Injection'lar?? tan??mlar
  bootstrap: [AppComponent], // Hangi bile??enin ilk a????ld??????nda ??al????aca????n?? belirtir
})
export class AppModule {}
