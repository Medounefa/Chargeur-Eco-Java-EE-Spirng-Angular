import { Component } from '@angular/core';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChargeurEcolo';
  product;

  constructor(private cata:CatalogueService){
  }
  
  ngOnInit():void{
    this.getProduct();
  }

  getProduct(){
   this.cata.getProduct().subscribe(data=>{
      this.product= data;
    }, error=>{
      console.log(error);
    })
  }
}
