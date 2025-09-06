import { AuthTokens, LoginCredentials, RegisterData, User } from '../types/auth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:80/api';

export class ApiService {
    private static async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || 'An error occurred');
        }
        return response.json();
    }

    private static getHeaders(): HeadersInit {
        const tokens = localStorage.getItem('tokens');
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        if (tokens) {
            const { access } = JSON.parse(tokens) as AuthTokens;
            headers['Authorization'] = `Bearer ${access}`;
        }

        return headers;
    }

    static async login(credentials: LoginCredentials): Promise<AuthTokens> {
        const response = await fetch(`${API_URL}/users/token/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        const tokens = await this.handleResponse<AuthTokens>(response);
        localStorage.setItem('tokens', JSON.stringify(tokens));
        return tokens;
    }

    static async register(data: RegisterData): Promise<User> {
        const response = await fetch(`${API_URL}/users/register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        return this.handleResponse<User>(response);
    }

    static async refreshToken(refresh: string): Promise<AuthTokens> {
        const response = await fetch(`${API_URL}/users/token/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh }),
        });

        const tokens = await this.handleResponse<AuthTokens>(response);
        const existingTokens = JSON.parse(localStorage.getItem('tokens') || '{}') as AuthTokens;
        const newTokens = { ...existingTokens, access: tokens.access };
        localStorage.setItem('tokens', JSON.stringify(newTokens));
        return newTokens;
    }

    static async getCurrentUser(): Promise<User> {
        const response = await fetch(`${API_URL}/users/me/`, {
            headers: this.getHeaders(),
        });

        return this.handleResponse<User>(response);
    }

    static logout(): void {
        localStorage.removeItem('tokens');
    }
}
