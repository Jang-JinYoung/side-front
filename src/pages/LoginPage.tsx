import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "src/service/api/user";

/*
register("name") 
필수값, 최소길이, 최대길이
{...register("firstName", { required: true, minLength: 5, maxLength: 20 })} />
유효성검사
{...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
최소값, 최대값
type="number" {...register("age", { min: 18, max: 99 })} />
*/

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
    console.log(data);
  };

  return (
    <div className="center">
      <form className="input-login-wrap" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="아이디" type="text" className="wd-350 pl-5 hg-35 ml-10" {...register("id", { required: true })} />
          {errors.id && <span>This field is required</span>}
        </div>

        <div>
          <input placeholder="비밀번호" type="password" className="mt-20 pl-5 wd-350 hg-35 ml-10" {...register("pw", { required: true })} />
          {errors.pw && <span>This field is required</span>}
        </div>

        <input type="submit" className="mt-20" />
      </form>
      <div>회원가입</div>
      <div>아이디 찾기</div>
      <div>비밀번호 찾기</div>
    </div>
  );
};

export default LoginPage;
