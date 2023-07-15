export const ContactItem = ({ icon, info }) => (
  <div className="flex items-center">
    {icon}
    <span className="pl-2">{info}</span>
  </div>
);
