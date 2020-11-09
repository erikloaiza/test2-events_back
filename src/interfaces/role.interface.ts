import { Permission } from './permission.interface';

export interface Role {
    id: number;
    name: string;
    date: string;
    quota: number;
    permissions: Permission[]
  }