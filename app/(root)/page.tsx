import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      <div className="p-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default SetupPage;
