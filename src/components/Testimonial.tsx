import Button from "./Button";
import LeftArrowIcon from "./LeftArrowIcon";
import RightArrowIcon from "./RightArrowIcon";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <main className="md:gap-20 2xl:gap-[100px] w-full flex pt-16 flex-col items-start gap-10">
      <div className="flex md:flex-row md:items-end md:gap-[150px] 2xl:gap-[300px] flex-col items-center justify-center gap-5 self-stretch">
        <div className="flex flex-col md:items-start items-center gap-2.5 self-stretch">
          <h1 className="text-white text-[28px] md:text-[38px] 2xl:text-5xl font-medium leading-normal">
            Our <span className="text-green/60">Testimonials</span>
          </h1>
          <p className="text-gray/60 text-sm md:text-start md:text-base 2xl:text-lg text-center font-light leading-normal">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className="flex p-3 items-start md:w-[40%]">
          <Button title="For Individuals" size="semi" />
          <Button title="For Businesses" size="semi" variant="nobg" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] self-stretch">
        <div className="md:hidden">
          <TestimonialCard
            content={
              "I recently started my own business, and YourBank has been instrumentalin helping me set up my business accounts and secure the financing Ineeded. Their expert guidance and tailored solutions have been invaluable."
            }
            owner="John D"
          />
        </div>
        <div className="hidden md:flex items-center gap-10 self-stretch">
          <LeftArrowIcon />
          <div className="flex items-start gap-16 flex-[1_0_0]">
            <TestimonialCard
              content={
                "I recently started my own business, and YourBank has been instrumentalin helping me set up my business accounts and secure the financing Ineeded. Their expert guidance and tailored solutions have been invaluable."
              }
              owner="John D"
            />
            <TestimonialCard
              content={
                "I recently started my own business, and YourBank has been instrumentalin helping me set up my business accounts and secure the financing Ineeded. Their expert guidance and tailored solutions have been invaluable."
              }
              owner="John D"
              pos="center"
            />
            <TestimonialCard
              content={
                "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind."
              }
              owner="Emily G"
            />
          </div>
          <RightArrowIcon />
        </div>
        <div className="flex items-center gap-5 md:hidden">
          <Button
            icon={[<LeftArrowIcon />, ""]}
            title=""
            type="circle"
            size="circleSmall"
            variant="circleGray"
          />
          <Button
            icon={[<RightArrowIcon />, ""]}
            title=""
            type="circle"
            size="circleSmall"
            variant="circleGray"
          />
        </div>
      </div>
    </main>
  );
};

export default Testimonial;
