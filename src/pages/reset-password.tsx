import Icons from "@/components/icons";
import { Button, Input, Spacer } from "@nextui-org/react";

export default function ResetPassword() {
  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="flex justify-center items-center bg-[#F7F7F8] w-full h-full">
        <div className=" flex flex-col justify-center items-center lg:w-2/6 lg:h-4/5 md:w-1/2 md:h-3/4 sm:w-full sm:h-full bg-white">
          <div className="flex flex-col items-center justify-center">
            <Icons iconName="Brand Logo" />
            <Spacer y={1.5} />
            <h3 className="text-2xl font-semibold tracking-normal">Recover</h3>
          </div>
          <div className="flex flex-col justify-center items-center w-3/4">
            {/* Email */}
            <Spacer y={2} />
            <Input
              label="Email Address"
              placeholder="johndoe@gmail.com"
              width="100%"
            />
            <Spacer y={2} />
            <Button style={{ width: "100%" }}>Reset Your Password</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
