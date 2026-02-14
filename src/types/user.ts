
export type role = "user" | "admin" | "moderator";
export type status = "active" | "inactive";

export interface User {
    id: string;
    username: string;
    password: string;
    name: string;
    role: role;
    status: status;
}
