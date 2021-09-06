import React,{useState,useEffect} from 'react'
import Image from '../../assets/images/login/1.jpg'
import ScssStyle from './login.module.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Login = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const [startDate, setStartDate] = useState(new Date());

    const [d, setDate] = useState(new Date().getDate());
    const [m, setMonth] = useState(new Date().getMonth() + 1);
    const [y, setYear] = useState(new Date().getFullYear());


    const dateHandel = (date) => {
        setStartDate(date)
        
        let dt = new Date(date);
        // console.log(dt.getDate(), dt.getMonth() + 1, dt.getFullYear())
        setDate(dt.getDate())
        setMonth(dt.getMonth() + 1)
        setYear(dt.getFullYear())
    }
    
    return (
        <section className="mb-5" id="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-5 col-lg-7">
                                <img className="img-fluid" src={Image} alt="" />
                            </div>
                            <div className="col-12 col-md-7 col-lg-5">
                                <div className="fi">
                                    <div className="mb-5">
                                        <p>Welcome</p>
                                        <h2>Easylife</h2>
                                    </div>
                                    <div className="mb-4">
                                        <div className={`mb-4  ${ScssStyle.mobile}`}>
                                            <p style={{ color: "#C4C4C4" }} className="pb-2">Birthday</p>
                                            <label className={`d-flex align-items-center justify-content-around font-size-24 ${ScssStyle.lavel}`} htmlFor="cDatePicker">
                                                <span>{d}</span>
                                                <span>{m}</span>
                                                <span>{y}</span>
                                            </label>
                                            <DatePicker id="cDatePicker" selected={startDate} onChange={(date) => dateHandel(date) } className={`${ScssStyle.formControl} d-none`} />
                                        </div>
                                        <div className={ScssStyle.mobile}>
                                            <p style={{ color: "#C4C4C4" }} className="pb-2">Mobile</p>
                                            <input className={ScssStyle.formControl} type="number" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <button className={ScssStyle.blackOutlineBtn}>Login</button>
                                        <button className={ScssStyle.blackOutlineBtn}>Create account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login
