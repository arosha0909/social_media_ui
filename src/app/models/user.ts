import { Role } from "../common/user-types";

export interface User {
    permissions: any;
    role: Role;
    _id: string;
    fullName: string;
    userName?: string;
    email: string;
    password: string;
    lastLogin: Date;
    dob: Date;
    company?: string;
    photo: any;
    country: string;
    phone: string;
    socialContact?: string;
    title?: string;
    overview?: string;
    experience?: string[];
    education?: string[];
    location?: string[];
    skill?: string[]
}
