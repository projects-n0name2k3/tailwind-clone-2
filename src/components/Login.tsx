import Form from "./Form";

const Login = () => {
  return (
    <main className="md:max-w-[1064px] md:py-[80px] md:px-[200px] m-auto w-full p-[30px] pt-0 mt-16 flex flex-col items-start gap-10 rounded-2xl bg-gray/11 border border-gray/10 relative">
      <>
        <div className="Text-Container flex flex-col items-center justify-center gap-[10px] self-stretch">
          <h1 className="text-green/60 text-center md:text-[38px] text-[28px] font-medium leading-normal">
            Login
          </h1>
          <p className="text-gray/75 text-center text-sm md:text-base font-light">
            Welcome back! Please log in to access your account.
          </p>
        </div>
        <Form />
        <img
          src=".\src\assets\AbstractDesign.svg"
          className="absolute right-0 select-none"
        />
      </>
    </main>
  );
};

export default Login;
