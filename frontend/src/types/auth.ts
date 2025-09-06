export interface AuthTokens {
    access: string;
    refresh: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'operator' | 'viewer';
    company?: string;
    phone_number?: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterData extends LoginCredentials {
    email: string;
    role?: string;
    company?: string;
    phone_number?: string;
}
