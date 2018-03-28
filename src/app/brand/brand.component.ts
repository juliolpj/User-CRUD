import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @Input() nombreDeLaAplicacion;
  constructor() { 
  }

  ngOnInit() {
  }

}
