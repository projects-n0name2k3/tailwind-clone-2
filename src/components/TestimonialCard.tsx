import TestimonialIcon from "./TestimonialIcon";
import TestimonialIconDesktop from "./TestimonialIconDesktop";

interface CardProps {
  content: string;
  owner: string;
  pos?: string;
}

const TestimonialCard = ({ content, owner, pos }: CardProps) => {
  return (
    <div className="flex md:p-0 p-5 2xl:gap-[50px] flex-col items-center gap-[30px] self-stretch rounded-xl border border-gray/15 relative">
      <div className="flex items-center gap-4 2xl:gap-5 self-stretch">
        <div className="w-[60%] bg-gray/15 h-[1px]"></div>
        <div className="2xl:hidden">
          <TestimonialIcon />
        </div>
        <div className="hidden 2xl:block">
          <TestimonialIconDesktop />
        </div>
        <div className="w-[60%] bg-gray/15 h-[1px]"></div>
      </div>
      <p className="text-sm 2xl:text-lg md:text-base text-white leading-normal text-center">
        {content}
      </p>
      <p className="text-green/60 2xl:text-lg text-base font-medium leading-normal text-center">
        {owner}
      </p>
      {!pos && (
        <>
          <div className="absolute ftl top-[20%] w-[86px] h-[200px] left-0"></div>
          <div className="absolute ftr top-[20%] w-[98px] h-[200px] right-0"></div>
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
