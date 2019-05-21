import { Role } from './role';

export class Monster {
    monsterid: number;
    monstername: string;
    password: string;
    role: Role;

    constructor(monsterid = 0, monstername = '', password = '', role) {
      this.monsterid = monsterid;
      this.monstername = monstername;
      this.password = password;;
      this.role = role;
    }
  }