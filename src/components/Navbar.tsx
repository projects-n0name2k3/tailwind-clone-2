import BuggerMobileIcon from "./BuggerMobileIcon";
import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <header className="flex w-full py-[14px] pl-[24px] pr-[14px] justify-between items-center rounded-[100px] border border-gray/15 bg-gray/11">
        <div className="flex items-center justify-center gap-1 shrink-0">
          <Logo />
          <p className="text-white text-base 2xl:text-lg ">YourBanK</p>
        </div>
        <ul className="hidden md:flex text-sm md:text-base 2xl:text-lg leading-normal text-white items-center gap-[26px]">
          <li>Home</li>
          <li>Careers</li>
          <li>About</li>
          <li>Security</li>
        </ul>
        <div>
          <div className="md:hidden">
            <Button icon={[<BuggerMobileIcon />, ""]} title="" size={"nav"} />
          </div>
          <div className="hidden md:flex items-center gap-5">
            <Button title="Sign Up" size="small" variant="nobg" />
            <Button title="Login" size="small" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
