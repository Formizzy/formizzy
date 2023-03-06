import React from 'react'
import loginImg from "@/assets/img/login_illustration.png";
import Image from 'next/image';
import { Button, Checkbox, Input, Spacer, theme } from "@nextui-org/react";
import GoogleLogo from "../assets/img/Google_Logo.png";
import Link from 'next/link';

function LoginPage() {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 h-screen w-screen'>
            <div className='flex justify-center items-center bg-white'>
                <div className=' flex flex-col justify-center items-center w-3/4'>
                    <h3>Log in</h3>
                    <Spacer y={1} />

                    {/* Social login section */}
                    <div className='flex'>
                        <Button css={{ backgroundColor: '$btnBg', color: "#030229", height: 40 }} size="sm" >
                            <Image src={GoogleLogo} alt="Google Logo" className='mr-1' />
                            Google
                        </Button>
                        <Spacer x={1} />
                        <Button css={{ backgroundColor: '$black', height: 40 }} size="sm" >
                            <svg className='fill-white' height="23" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
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
                    <Button style={{ width: "100%" }}>Log in</Button>
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

export default LoginPage