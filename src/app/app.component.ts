import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";
import { PrimeInputComponent } from "./prime-input/prime-input.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, PrimeInputComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "prime-ng";

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
