export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  gender: string;
}

export interface User {
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
  password: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
}
