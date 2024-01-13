import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from 'src/service/api/user';
import { Popup } from '@components/popup/Popup';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@store/user';
import { useStore } from 'zustand';

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
    // watch,
    formState: {
      /*errors*/
    },
  } = useForm<IUser>();

  const navigate = useNavigate();

  const { login } = useStore(useUserStore);

  const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
    // console.log(data);
    const { id, pw } = data;

    if (id === 'test' && pw === 'test') {
      login('test');
      navigate('/');
    } else {
      Popup({ title: 'title', message: 'message' });
    }
  };

  return (
    <div className="center">
      <form className="input-login-wrap" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="아이디"
            type="text"
            className="wd-350 pl-5 hg-35"
            {...register('id', { required: true })}
          />
          {/* {errors.id && <span>This field is required</span>} */}
        </div>

        <div>
          <input
            placeholder="비밀번호"
            type="password"
            className="mt-20 pl-5 wd-350 hg-35"
            {...register('pw', { required: true })}
          />
          {/* {errors.pw && <span>This field is required</span>} */}
        </div>

        <div className="mt-20 ta-c wd-350">
          <input type="submit" value={'제출'} />
        </div>
      </form>
      <div onClick={() => console.log('회원가입')}>회원가입</div>
      <div className="">
        <span onClick={() => console.log('아이디')}>아이디 </span>/
        <span onClick={() => console.log('비밀번호')}> 비밀번호 </span>
        찾기
      </div>
    </div>
  );
};

export default LoginPage;
