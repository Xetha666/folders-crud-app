
type role = "user" | "admin" | "moderator";
type status = "active" | "inactive";

export interface User {
    id: string;
    username: string;
    password: string;
    name: string;
    role: role;
    status: status;
}
