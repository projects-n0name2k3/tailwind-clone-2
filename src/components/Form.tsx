import EyeIcon from "./EyeIcon";
import InputField from "./InputField";
import AppleIcon from "./AppleIcon";
import Button from "./Button";
import FacebookIcon from "./FacebookIcon";
import GoogleIcon from "./GoogleIcon";
import { LoginIcon } from "./LoginIcon";
const Form = () => {
  return (
    <main className="flex flex-col items-center gap-6 self-stretch w-full">
      <div className="flex md:flex-row flex-col justify-center items-start gap-5 self-stretch">
        <InputField placeholder={"Enter your Email"} type={"text"} />
        <InputField
          placeholder={"Enter your Password"}
          type={"password"}
          icon={<EyeIcon />}
        />
      </div>
      <div className="w-full">
        <p className="text-center text-white  text-sm md:text-base 2xl:text-lg leading-normal underline">
          Forget Password?
        </p>
      </div>
      <div className="flex md:px-[130px] flex-col gap-6 items-start self-stretch">
        <Button title="Login" width="full" size="small" />
        <Button title="Sign Up" width="full" variant="secondary" />
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="flex items-center gap-4 self-stretch">
            <div className=" w-[60%] h-[1px] bg-[#B3B3B3]"></div>
            <p className="text-sm md:text-base 2xl:text-lg w-full text-gray/70 text-center leading-normal">
              Or Continue with
            </p>
            <div className="w-[60%] h-[1px] bg-[#B3B3B3]"></div>
          </div>
          <div className="flex gap-5 items-center justify-center self-stretch">
            <LoginIcon icon={<GoogleIcon />} />
            <LoginIcon icon={<FacebookIcon />} />
            <LoginIcon icon={<AppleIcon />} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
