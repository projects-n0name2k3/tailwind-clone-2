import Button from "./Button";
import EmailIcon from "./EmailIcon";
import Facebook2Icon from "./Facebook2Icon";
import Logo from "./Logo";

const FooterSignIn = () => {
  return (
    <footer className="flex w-full md:mt-16 md:bg-gray/11 pt-16 pb-[30px] flex-col gap-[30px] px-4 items-center">
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex items-center justify-center gap-1">
          <Logo />
          <p className="text-white text-base">YourBanK</p>
        </div>
        <ul className="gap-[14px] flex text-sm md:text-base 2xl:text-lg text-white/90 leading-normal">
          <li>Home</li>
          <li>Careers</li>
          <li>About</li>
          <li>Security</li>
        </ul>
        <div className="bg-gray/15 w-full h-[1px]"></div>
        <div className="flex items-center justify-center content-center gap-5 self-stretch flex-wrap">
          <Button
            title="hello@skillbirdge.com"
            icon={[<EmailIcon />, "left"]}
            variant="nobg"
          />
          <Button
            title="+91 91813 23 2309"
            icon={[<EmailIcon />, "left"]}
            variant="nobg"
          />
          <Button
            title="+91 91813 23 2309"
            icon={[<EmailIcon />, "left"]}
            variant="nobg"
          />
        </div>
        <div className="bg-gray/15 w-full h-[1px]"></div>
        <div className="md:bg-gray/10 md:border md:border-gray/15 rounded-[100px] md:p-3 md:pr-6 2xl:p-4 2xl:pr-[30px] md:py-0 flex md:flex-row md:justify-between flex-col items-center gap-[-24px] self-stretch text-sm md:text-base 2xl:text-lg text-gray/70 leading-normal font-light">
          <div className="flex items-start gap-2">
            <Button
              title=""
              icon={[<Facebook2Icon />, ""]}
              type="circle"
              size="circleSmall"
              variant="circleGreen"
            />
            <Button
              title=""
              icon={[<Facebook2Icon />, ""]}
              type="circle"
              size="circleSmall"
              variant="circleGreen"
            />
            <Button
              title=""
              icon={[<Facebook2Icon />, ""]}
              type="circle"
              size="circleSmall"
              variant="circleGreen"
            />
          </div>
          <h4 className="hidden md:block">YourBank All Rights Reserved</h4>
          <div className="flex pt-[50px] md:p-0 pb-[30px] px-3 md:flex-row flex-col items-center gap-5 self-stretch">
            <h4 className="md:hidden">YourBank All Rights Reserved</h4>
            <div className="flex items-center gap-2">
              <h4>Privacy Policy</h4>
              <div className="h-[21px] w-[1px] bg-gray/70"></div>
              <h4>Terms of Service</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSignIn;
