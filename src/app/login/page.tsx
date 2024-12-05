'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import FormControl from '@/components/ui/FormControl';
import Checkbox from '@/components/ui/Checkbox';
import Link from 'next/link';
import { checkUser } from '@/services/authService';
import { LoginData } from '@/types/login';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Image from 'next/image';

// Xác định schema Zod cho form validation
const schema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(3, 'Mật khẩu có ít nhất 6 ký tự'),
  remember: z.boolean(),
});

const Register = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoginData) => {
    setIsLoading(true);
    setTimeout(() => {
      const result = checkUser(data);
      if (result.status) {
        router.push('/'); // Chuyển hướng đến trang chủ
      } else {
        setError('email', {
          type: 'manual',
          message: 'Tài khoản hoặc mật khẩu không đúng',
        }); // Cập nhật lỗi cho trường "email"
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="hoanglamnguyentb"
              layout="intrinsic"
              width={32}
              height={32}
            />
            _T1_
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email của bạn
                  </label>
                  <FormControl
                    type="email"
                    placeHolder="name@company.com"
                    modelName="email"
                    registerProps={register('email')}
                    errorMessage={errors.email?.message as string}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
                  </label>
                  <FormControl
                    type="password"
                    placeHolder="Nhập mật khẩu"
                    modelName="password"
                    registerProps={register('password')}
                    errorMessage={errors.password?.message as string}
                  ></FormControl>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        modelName="remember"
                        labelName="Nhớ tài khoản"
                        registerProps={register('remember')}
                      ></Checkbox>
                    </div>
                  </div>
                  <Link
                    href="/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  ></Link>
                </div>
                <Button className="w-full" isLoading={isLoading}>
                  Đăng nhập
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Chưa có tài khoản?
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Đăng ký
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ThemeToggle></ThemeToggle>
    </>
  );
};

export default Register;
