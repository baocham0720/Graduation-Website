import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='bg-gray-200 flex justify-center items-center min-h-screen min-w-screen'>
      <div className="bg-white p-8 rounded shadow-md w-4/12">
        <h2 className="text-2xl mb-4 text-center">Đăng nhập</h2>
        <form id="loginForm">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded mt-2" required />
            <a href="#" className="text-blue-500 text-sm mt-2 block">Quên mật khẩu?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Đăng nhập</button>
        </form>
        <div id="error-message" className="text-red-500 mt-4 hidden">Invalid email or password.</div>
        <div className="text-center mt-4">
          <span className="text-gray-700">Bạn chưa có tài khoản? </span>
          <Link to="/register" className="text-blue-500">Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
