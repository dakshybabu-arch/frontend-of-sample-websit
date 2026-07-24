import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { UserProfile } from '@/types';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | null>(null);
const STORAGE_KEY = 'amar-tours-auth';
const USERS_KEY = 'amar-tours-users';

function getStoredUser() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? (JSON.parse(stored) as UserProfile) : null;
}

function getRegisteredUsers() {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? (JSON.parse(stored) as Array<UserProfile & { password: string }>) : [];
}

function storeRegisteredUsers(users: Array<UserProfile & { password: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  async function signUp(email: string, password: string, fullName: string) {
    const users = getRegisteredUsers();
    if (users.some((existing) => existing.email === email)) {
      return { error: new Error('Email already registered.') };
    }

    const newUser: UserProfile = {
      id: crypto.randomUUID(),
      email,
      fullName,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    storeRegisteredUsers([...users, { ...newUser, password }]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);

    return { error: null };
  }

  async function signIn(email: string, password: string) {
    const users = getRegisteredUsers();
    const account = users.find((item) => item.email === email && item.password === password);
    if (!account) {
      return { error: new Error('Invalid email or password.') };
    }

    const profile = {
      id: account.id,
      email: account.email,
      fullName: account.fullName,
      role: account.role,
      createdAt: account.createdAt,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    setUser(profile);
    return { error: null };
  }

  async function signInWithGoogle() {
    const googleUser: UserProfile = {
      id: 'google-user',
      email: 'googleuser@amartours.com',
      fullName: 'Google Traveler',
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(googleUser));
    setUser(googleUser);
    return { error: null };
  }

  async function signOut() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  async function resetPassword(_email: string) {
    return { error: null };
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAdmin: user?.role === 'admin',
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
