import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  const navigate = useNavigate();
  // console.log(user);

  const handleRoleSelection = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      })
      .catch((err) => {
        console.log("Error Updating Role: ", err);
      });
  };

  useEffect(() => {
    if (user.unsafeMetadata.role) {
      navigate(user?.unsafeMetadata?.role === "recruiter" ? "/post-job" : "/jobs");
    }
  }, [user]);

  return (
    <div className="flex items-center flex-col justify-center mt-32">
      <h2 className="bg-gradient-to-br from-gray-500 via-gray-200 to-white text-transparent bg-clip-text font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a ...
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button
          onClick={() => handleRoleSelection("candidate")}
          variant={"blue"}
          className={"h-36 text-2xl"}
        >
          Candidate
        </Button>
        <Button
          onClick={() => handleRoleSelection("recruiter")}
          variant={"destructive"}
          className={"h-36 text-2xl"}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
