import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardModule, CommonModule],
  template: `<div class="card flex justify-content-center">
  <p-card header="Week number">
      <p class="m-0">
        Today is {{today | date}} and week number is {{today | date:'w'}}
      </p>
  </p-card>
</div>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tools';
  today: number = Date.now();
}
