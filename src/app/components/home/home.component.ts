import { Component } from '@angular/core';
import { ThemeMode } from 'src/app/constants/config.constant';
import { GlobalTheme } from 'src/app/interfaces/config.interface';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  theme: string = '';

  constructor(private readonly _configService: ConfigService) {
    this._configService.theme$
      .subscribe((selectedTheme: GlobalTheme) => this.theme = selectedTheme.mode);
  }

  toggleTheme(): void {
    this._configService.setThemeMode(this.theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
  }

}
