import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateManagement } from 'src/app/classes/state';
import { GlobalConfig } from 'src/app/interfaces/config.interface';

const initialState: GlobalConfig = {
  theme: ''
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends StateManagement<GlobalConfig>{

  constructor() {
    super(initialState);
  }

  theme$: Observable<string> = this.select(state => state.theme);

  setTheme(newTheme: string) {
    this.setState({ theme: newTheme })
  }

}
