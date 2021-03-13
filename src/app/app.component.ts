import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIA';
  products =[{product:1,productName:'Glass',categoryId:1,unitPrice:5},
  {product:2,productName:'Book',categoryId:1,unitPrice:5},
  {product:3,productName:'Chair',categoryId:1,unitPrice:5},
  {product:4,productName:'Angular',categoryId:1,unitPrice:5}]
}
