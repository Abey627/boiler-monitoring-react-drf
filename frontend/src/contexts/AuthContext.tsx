import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types/auth';
import { ApiService } from '../services/api';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string, email: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const tokens = localStorage.getItem('tokens');
                if (tokens) {
                    const userData = await ApiService.getCurrentUser();
                    setUser(userData);
                }
            } catch (error) {
                console.error('Auth initialization failed:', error);
                ApiService.logout();
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = async (username: string, password: string) => {
        await ApiService.login({ username, password });
        const userData = await ApiService.getCurrentUser();
        setUser(userData);
    };

    const register = async (username: string, password: string, email: string) => {
        await ApiService.register({ username, password, email });
        await login(username, password);
    };

    const logout = () => {
        ApiService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
