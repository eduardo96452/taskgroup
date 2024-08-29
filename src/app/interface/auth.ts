export interface loginI {
  email: string;
  password: string;
}

export interface UserLogin {
  message: string;
  user: User;
}

export interface User {
  names: string;
  last_names: string;
  email: string;
  username: string;
  password: string;
  user_type: string;
  course_id: number;
  user_id: number;
}

