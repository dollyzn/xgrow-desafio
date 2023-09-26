"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AuthContextType, TokenPayload, User } from "@/app/types";
import jwt_decode from "jwt-decode"; // Certifique-se de instalar o pacote 'jwt-decode'
import { redirect, useRouter } from "next/navigation";

const defaultAuthState: AuthContextType = {
  user: null,
  token: null,
  login: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();

  async function login(email: string) {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        const { access_token } = data;

        setToken(access_token);

        if (access_token) {
          const decodedToken = jwt_decode<TokenPayload>(access_token);

          setUser({ id: decodedToken.sub, email: email });
          setToken(access_token);
          console.log(access_token);
          router.replace("/cursos");
        }
      } else {
        console.error("Erro ao enviar e-mail:", response.statusText);
      }
    } catch (error) {
      console.error("Erro de requisição:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
