import React from "react";
import Image from "next/image";

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center gap-5 py-6	px-10 border-b border-gray-300">
      {/* <h1 className="flex-1 text-3xl font-semibold text-gray-900">
        {children}
      </h1> */}
    </header>
  );
}
