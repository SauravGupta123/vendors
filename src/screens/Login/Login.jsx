import React,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom';

function Login() {
const navigate=useNavigate ();
  const [info, setInfo] = useState({ password: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: info.email,
          password: info.password,
         
        }),
      });
      const res= await response.json();
       alert(res.msg);
       if(res.success){
        localStorage.setItem('authToken',res.authToken);
        console.log(res.email)
        localStorage.setItem('userEmail',res.email);
            
            navigate('/')
       }
       else{
        setInfo({password:""});
       }
        
    
    } catch (err) {
          console.log(err);
    }
    
  
    // Clears the form
    // setInfo({ name: '', password: '', email: '', geolocation: '', confirmPassword: '' });
  };
  return (
<>
      <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')` }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login</h2>

                    {/* form starts here */}
                    <form onSubmit={handleSubmit}>
       

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="email"
                          value={info.email}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          name="password"
                          value={info.password}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit" // Change type to "submit" to trigger the form submission
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        New User? <Link to="/signup" className="fw-bold text-body"><u>Create New Account</u></Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
