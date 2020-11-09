import { Role } from './role.interface';

export interface User {
  id: number;
  email: string;
  name: string;
  roleId:number;
  role: Role;
  password: string;
}
