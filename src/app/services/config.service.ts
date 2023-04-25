import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateManagement } from 'src/app/classes/state';
import { GlobalConfig } from 'src/app/interfaces/config.interface';
import { HelperService } from './helper.service';

const initialState: GlobalConfig = {
  theme: ''
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends StateManagement<GlobalConfig>{

  constructor(
    private readonly _helperService: HelperService
  ) {
    super(initialState);
    const localTheme = localStorage.getItem('theme');
    console.log(this._helperService.isValid(localTheme));
  }

  theme$: Observable<string> = this.select(state => state.theme);

  setTheme(newTheme: string) {
    this.setState({ theme: newTheme })
  }

}
