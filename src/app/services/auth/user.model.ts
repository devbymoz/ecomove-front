type Role = 'admin' | 'user';

export class User {
  constructor(
    private email: string,
    private token: string,
    private role: Role
  ) {}

  getToken() {
    return this.token;
  }

  getRole() {
    return this.role;
  }
}
