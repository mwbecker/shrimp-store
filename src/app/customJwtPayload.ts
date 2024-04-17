import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload {
    given_name?: string; 
    family_name?:string;
    name?:string;
    email?:string;
    picture?:string;
}
  