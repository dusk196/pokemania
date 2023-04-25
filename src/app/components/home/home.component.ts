import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ThemeMode } from 'src/app/constants/config.constant';
import { GlobalTheme } from 'src/app/interfaces/config.interface';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  theme: string = '';
  destroy$ = new Subject();

  constructor(private readonly _configService: ConfigService) { }

  ngOnInit(): void {
    this._configService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedTheme: GlobalTheme) => {
        this.theme = selectedTheme.mode;
        if (selectedTheme.mode === ThemeMode.Dark) {
          document.getElementsByTagName('html')[0].className = 'dark';
        } else {
          document.getElementsByTagName('html')[0].classList.remove('dark');
        }
      });
  }

  toggleThemeMode(): void {
    this._configService.setThemeMode(this.theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
