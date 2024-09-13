import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-prime-input",
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: "./prime-input.component.html",
  styleUrl: "./prime-input.component.css",
})
export class PrimeInputComponent {
  value = "";
}
