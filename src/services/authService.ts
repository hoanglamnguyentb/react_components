import ResultBO from '@/models/ResultBO.model';
import { LoginData } from '@/types/login';

export const checkUser = (data: LoginData): ResultBO => {
  const result = new ResultBO();
  if (data.email === 'admin@gmail.com' && data.password === '12345678') {
    return result;
  }
  result.setFail('Đăng nhập thất bại');
  return result;
};
