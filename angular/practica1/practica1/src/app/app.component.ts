import { Component, OnInit } from "@angular/core";

@Component({
  selector : "pm-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  
  title: string = "Pagina de prueba";
  menu: string = "<h4>HTLM injectado!</h4>";

  ngOnInit(): void {
    console.log("Principal")
  }

}

