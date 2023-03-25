import React from 'react'
import loginImg from "@/assets/img/login_illustration.png";
import Image from 'next/image';
import { Button, Checkbox, Input, Spacer } from "@nextui-org/react";
import GoogleLogo from "@/assets/img/Google_Logo.png";
import Link from 'next/link';
import Icons from '@/components/icons';
import { getGoogleAuthUrl } from './@core/authUtils';

function Login() {


    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 h-screen w-screen'>
            <div className='flex justify-center items-center bg-white'>
                <div className=' flex flex-col justify-center items-center w-3/4'>
                    <h3>Log in</h3>
                    <Spacer y={1} />

                    {/* Social login section */}
                    <div className='flex'>
                        <Link href={getGoogleAuthUrl()}>
                            <Button css={{ backgroundColor: '$btnBg', color: "#030229", height: 40 }} size="sm" >
                                <Image src={GoogleLogo} alt="Google Logo" className='mr-1' />
                                Google
                            </Button>
                        </Link>

                        <Spacer x={1} />

                        <Button onClick={() => { }} css={{ backgroundColor: '$black', height: 40 }} size="sm" >
                            <Icons iconName='Github' />
                            GitHub
                        </Button>

                    </div>

                    <Spacer y={1} />
                    {/* Divider */}
                    <div className='flex w-full items-center'>
                        <div className='border-t border-t-gray-300 w-full mr-2'></div>
                        <p>Or</p>
                        <div className='border-t border-t-gray-300 w-full ml-2'></div>
                    </div>

                    {/* Email */}
                    <Input label="Email" placeholder="johndoe@gmail.com" width='100%' />
                    <Spacer y={1} />
                    {/* Password */}
                    <Input.Password label="Password" width='100%' />
                    <Spacer y={1} />

                    <div className='flex w-full justify-between'>
                        <Checkbox size='sm'>Remember me</Checkbox>
                        <p> <Link href={"/reset-password"} className="text-primary">Reset Password?</Link></p>
                    </div>
                    <Spacer y={1} />
                    <Button onClick={() => {

                    }} style={{ width: "100%" }}>Log in</Button>
                    <Spacer y={1} />

                    <div>
                        <p>Don't have account yet? <Link href={"/sign-up"} className="text-primary">Create New</Link></p>
                    </div>
                </div>
            </div>
            <div className='lg:flex hidden col-span-2 bg-[#FAFAFA] justify-center items-center '>
                <div className='h-1/2 w-1/2'>
                    <Image src={loginImg} alt="login illustration" />
                </div>
            </div>
        </div>
    )
}

export default Login