
const Register = () => {
    return (
      <div className='bg-gray-100 flex justify-center items-center min-h-screen min-w-screen'>
    <div className="bg-white p-8 h-100 rounded shadow-md w-4/12">
      <h2 className="text-2xl mb-4 text-center">Đăng ký</h2>
      <form id="registerForm">
        <div className="mb-4">
          <label className="block text-gray-700">Tên</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mật khẩu</label>
          <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Xác nhận mật khẩu</label>
          <input type="password" id="confirm-password" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Đăng ký</button>
      </form>
      <div id="error-message" className="text-red-500 mt-4 hidden">Vui lòng kiểm tra thông tin của bạn.</div>
      <div className="text-center mt-4">
        <span className="text-gray-700">Đã có tài khoản? </span>
        <a href="#" className="text-blue-500">Đăng nhập ngay</a>
      </div>
    </div>
  </div>
    )
  }
  
  export default Register