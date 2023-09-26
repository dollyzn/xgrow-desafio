export interface Course {
  id: number;
  photo: string | null;
  name: string;
  description: string;
  category: string;
  type: string;
  accessLink: string;
  supportLink: string;
  userId: number;
  user?: User; // You'll need to define the User type as well
}

export interface User {
  id: number;
  name?: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string) => void;
}

export interface TokenPayload {
  sub: number;
  email: string;
  iat?: number;
  exp?: number;
}
