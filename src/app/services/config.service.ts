import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateManagement } from 'src/app/classes/state';
import { GlobalConfig, GlobalTheme } from 'src/app/interfaces/config.interface';
import { HelperService } from 'src/app/services/helper.service';
import { ThemeMode } from 'src/app/constants/config.constant';
import { LocalStorage } from 'src/app/constants/localstorage.constant';

const initialState: GlobalConfig = {
  theme: {
    mode: ThemeMode.Light,
    scale: 2
  }
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends StateManagement<GlobalConfig> {

  constructor(private readonly _helperService: HelperService) {
    super(initialState);
    const localConfig: string = localStorage.getItem(LocalStorage.Config) ?? '';
    if (this._helperService.isValid(localConfig)) {
      const globalConfig: GlobalConfig = JSON.parse(localConfig);
      this.setThemeMode(globalConfig.theme.mode);
    }
  }

  theme$: Observable<GlobalTheme> = this.select(state => state.theme);

  setThemeMode(newThemeMode: string): void {
    const newTheme = {
      theme: {
        ...this.state.theme,
        mode: newThemeMode
      }
    };
    this.setState({ ...newTheme });
    localStorage.setItem(LocalStorage.Config, JSON.stringify(newTheme));
  }

}
