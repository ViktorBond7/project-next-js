"use client";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}
export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full cursor-pointer"
      >
        <FaCloudUploadAlt size={48} />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}