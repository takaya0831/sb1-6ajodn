import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  login: async (email: string, password: string) => {
    // この例では、特定の認証情報でのみログインを許可
    if (email === 'admin@example.com' && password === 'admin123') {
      set({
        isAuthenticated: true,
        token: 'dummy-token',
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({
      isAuthenticated: false,
      token: null,
    });
  },
}));