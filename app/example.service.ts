/**
 * Created by taber.fitzgerald on 10/3/16.
 */
import { Injectable } from '@angular/core';

interface User {
  name: string;
}

@Injectable()
export class ExampleService {
  user: User = {name: ''};
  isLoggedIn: boolean = false;
}
