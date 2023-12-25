export interface LoginIconProps {
  icon: React.ReactNode;
}

export const LoginIcon = ({ icon }: LoginIconProps) => {
  return (
    <div className="flex items-start p-2 gap-2.5 rounded-[70px] gradient-1">
      <div className="p-[14px] rounded-[50px] gradient">{icon}</div>
    </div>
  );
};
