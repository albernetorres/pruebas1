import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
 // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `<h1>{{title}}</h1> 
    <div [innerHTML]="menu">{{menu}}</div>
  `
})
export class AppComponent {
  title: string = 'Primera practica de angular';
  menu: string = `<ul><li>Inicio</li><li>opciones <ul><li>opcion 1</li><li>opcion 2</li></ul></li></ul>`;
}
