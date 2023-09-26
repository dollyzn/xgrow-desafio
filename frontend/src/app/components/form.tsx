"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send } from "@mui/icons-material";
import Image from "next/image";
import { useAuth } from "@/app/context/authContext";

const styles = {
  main: "font-sans overflow-hidden",
  title: "text-lg pb-6",
  label: "text-green-2 text-xs ps-4 font-bold",
  input:
    "px-4 py-2 w-72 md:w-80 bg-transparent border-b text-sm font-normal focus:outline-none",
  button: {
    button: "bg-green-1 p-3 px-8 rounded-lg",
    icon: "w-5",
    text: "ps-4",
  },
  image: "pt-8",
};

export function Form() {
  const [email, setEmail] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(email);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <div className={styles.title}>Acesse usando seu e-mail</div>
      <div className={styles.label}>E-mail</div>
      <input
        className={styles.input}
        placeholder="Insira seu e-mail de acesso..."
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <div className="pt-8">
        <button className={styles.button.button}>
          <Send className={styles.button.icon} />
          <span className={styles.button.text}>Enviar token de acesso</span>
        </button>
      </div>
      <Image
        className={styles.image}
        src="/blindado.png"
        width={100}
        height={22}
        alt="Site blindado"
      />
    </form>
  );
}
