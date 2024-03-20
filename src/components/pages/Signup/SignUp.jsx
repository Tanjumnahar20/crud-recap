import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const SignUp = () => {
    const {createSignup} =useContext(AuthContext);
  
    const handleSignup=e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
         console.log(name,email,password);

         createSignup(email,password)
         .then(result=>{
            const user = result.user;
            console.log(user)
         })
         .catch(error=>{
            console.log(error.message);
         })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="t mr-16 w-1/2">
                <img className='top-1/2' src={login} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl top-0 bg-base-100">
                <form onSubmit={handleSignup} className="card-body">
                <h1 className="text-4xl text-center text-orange-500 font-bold">Sign up</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                    </div>
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
                        <input className="btn btn-neutral text-orange-500" type="submit" value='sign up' />
                    </div>
                    <p>Have an account? <Link  to='/login' ><small className='text-orange-500'>Sign up</small></Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;