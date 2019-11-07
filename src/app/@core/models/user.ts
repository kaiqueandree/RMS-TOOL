import { UserService } from './../data/user.service';

export interface User {
  id: number;
  name: string;
  email: string;
  type: string,
  last_access: string;
}

export class User extends UserService {

 data = 
  [
  {id: 1, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 2, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 3, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 4, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 5, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 6, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 7, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 8, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 9, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 10, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 11, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  {id: 12, name: 'Kaique Lima Andre', email: 'kaique.lima@ibm.com', type:'SLM(RELATORIOS E SEF)', last_access: '25/04/2019 15:30:21.0'},
  ];

  getData() {
    return this.data;
  }
}