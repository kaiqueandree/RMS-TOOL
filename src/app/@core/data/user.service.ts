import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BaseService } from '../data/base.service';

// @Injectable()
// export class UserService extends BaseService<User>{
//   endpoints = {
//     index: '',
//     show: 'users/:id'
//   }
// };
@Injectable()
 export abstract class UserService {
   abstract getData(): any[];
 }