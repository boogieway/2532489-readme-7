import {UserRole} from "./user-role.enum";
export interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  role: UserRole;
}
