import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm",
        "placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-black/10",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "min-h-[140px] w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm",
        "placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-black/10",
        props.className ?? "",
      ].join(" ")}
    />
  );
}
