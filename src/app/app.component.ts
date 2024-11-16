import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { JsonReaderService } from './json-reader.service';

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
</div>

<div class="card-container">
    <div class="card flex justify-content-center" *ngFor="let card of cards">
        <p-card header="{{card.header}}">
            <!-- Clipboard icon -->
            <button class="clipboard-icon" (click)="copyToClipboard(card.header)">
            <i class="pi pi-clipboard" style="color: green"></i> <!-- Using Material icon -->
            </button>
            <!-- Card Content -->
            <ol class="m-0">
  <li *ngFor="let entry of card.content"> {{ entry }} </li>
</ol>
        </p-card>
    </div>
</div>



`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tools';
  jsonData: any = {};
  today: number = Date.now();

  cards = [
    {
      header: 'Daily',
      content: []
    },
    {
      header: 'Weekly',
      content: []
    },
    {
      header: 'Monthly',
      content: []
    }
  ];

  copyToClipboard(content: string): void {
    navigator.clipboard.writeText(content).then(
      () => {
        console.log('Content copied to clipboard');
        // Optionally, show a success message
        alert('Content copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text:', err);
      }
    );
  }

  constructor(private jsonReaderService: JsonReaderService) {}
  ngOnInit(): void {
    this.jsonReaderService.getJsonData().subscribe(
      (data) => {
        this.cards[0].content = data.data.daily
        this.cards[1].content = data.data.weekly
        this.cards[2].content = data.data.monthly
      },
      (error) => {
        console.error('Error loading JSON data:', error);
      }
    );
  }
}
