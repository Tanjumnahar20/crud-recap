import login from '../../../assets/images/login/login.svg'
const Login = () => {

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email= form.email.value;
    const password = form.password.value;
    console.log(email,password)

  }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="t mr-16 w-1/2">
                    <img className='top-1/2' src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl top-0 bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-4xl text-center text-orange-500 font-bold">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-neutral text-orange-500" type="submit" value='login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;