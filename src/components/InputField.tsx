import { useState, useRef, useEffect } from "react";
import EyeSplashIcon from "./EyeSplashIcon";

export interface InputFieldProps {
  onChange?: (value: any) => void;
  size?: "small" | "medium" | "large";
  type: "text" | "password";
  placeholder: string;
  icon?: React.ReactNode;
}

const InputField = ({ onChange, placeholder, type, icon }: InputFieldProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef<HTMLInputElement>(null);
  {
    return icon ? (
      <div className="w-full relative">
        <input
          ref={passRef}
          type={isShowing ? type : "text"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={placeholder}
          className="w-full p-4 pr-10 flex items-center gap-2.5 self-stretch rounded-[88px] border border-gray/10 bg-gray/10 text-base 2xl:text-lg text-white font-light leading-tight placeholder:text-gray/35"
        />
        <div
          className="absolute top-[50%] right-4 translate-y-[-50%] "
          onClick={() => setIsShowing(!isShowing)}
        >
          {password !== "" ? isShowing ? icon : <EyeSplashIcon /> : null}
        </div>
      </div>
    ) : (
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 flex items-center gap-2.5 self-stretch rounded-[88px] border border-gray/10 bg-gray/10 text-base 2xl:text-lg text-white font-light leading-tight placeholder:text-gray/35"
      />
    );
  }
};

export default InputField;
