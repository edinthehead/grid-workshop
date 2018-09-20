import { Component, OnInit } from '@angular/core';
import { ISerie } from './shared/ISeries.model';
import { SeriesService } from './shared/series.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Grid-Pocket Wokshop';
  series: ISerie[];
  anyErrors: boolean;
  constructor(private seriesService: SeriesService) {}

  getSeries() {
    const observer = {
      next: values => {
        if (values === 'error') {
          this.anyErrors = true;
        } else {
          this.series = values;
        }
      },
      complete: () => {
        if (this.anyErrors === true) {
          console.log('ok');
        }
      }
    };
    this.seriesService.getSeries().subscribe(observer);
  }

  ngOnInit(): void {
    this.getSeries();
  }
}
