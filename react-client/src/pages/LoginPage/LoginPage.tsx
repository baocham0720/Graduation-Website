
const colors ={
    primary: "#060606",
    background: "#f5f5f5",
    disbaled: "#D9D9D9"
}
const LoginPage = () => {
    return (
        <div className="w-full h-full flex items-start">

          <div className="w-full h-full flex  flex-col max-w-[500px] ">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-3xl font-semibold mb-2">Login</h3>
                <p className="text-base mb-2">Welcome! </p>
              </div>

              <div className="w-full flex flex-col">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="w-full flex item-center">
                   <input type="checkbox" className="w-4 h-4 mr-2" />
                   <p className="text-sm">Remember Me</p>
                </div>

                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Passowrd</p>
              </div>

              <div className=" my-4 flex flex-col w-full">
                  <button className="w-full rounded-md font-semibold p-4 my-2 text-center flex items-center justify-center">
                       Login
                  </button>
                  <button className="w-full bg-white font-semibold border-2 border-black rounded-md p-4 my-2 text-center flex items-center justify-center">
                       Register
                  </button>
              </div>

              <div className="w-full flex items-center justify-center relative py-2">
                  <div className="w-full h-[1px] bg-black"></div>
                  <p className="absolute text-lg text-black/80 bg-[#f5f5f5] ">or</p>
              </div>
              <div className="w-full bg-white font-semibold border-2 border-black rounded-md p-4 my-2 text-center flex items-center justify-center">
                      Sign In With Google
              </div>

              <div className="w-full flex items-center justify-center">
                  <p className="text-sm font-normal ">Dont have a account? <span className="font-semibold underline-offset-2 cursor-pointer">Sign Up</span></p>
              </div>
          </div>
        </div>
    )
}

export default LoginPage