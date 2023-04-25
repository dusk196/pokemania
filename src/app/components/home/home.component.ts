import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  theme: string = '';

  constructor(private readonly _configService: ConfigService) {
    this._configService.theme$.subscribe((selectedTheme: string) => this.theme = selectedTheme);
  }

  toggleTheme(): void {
    this._configService.setTheme(this.theme === 'light' ? 'dark' : 'light');
  }

}
