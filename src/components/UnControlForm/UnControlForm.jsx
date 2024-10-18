import { useRef } from "react";

const UnControlForm = () => {

    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const contactRef = useRef();
    const cityRef = useRef();

    const dataRetrive = (e) => {

        e.preventDefault();

        console.log("Detail Information: ");
        console.log("Name : ", fnameRef.current.value, lnameRef.current.value);
        console.log("Email : ", emailRef.current.value);
        console.log("Password : ", passwordRef.current.value);
        console.log("Contact : ", contactRef.current.value);
        console.log("City : ", cityRef.current.value);
    }


    return(
        <>
            <h1>UnControl Form</h1>
            <form onSubmit={dataRetrive}>
                <label>First Name :</label>
                <input type="text"  placeholder="Enter First Name"  name="fname" ref={fnameRef}/><br /><br />

                <label>Last Name :</label>
                <input type="text"  placeholder="Enter Last Name"  name="lname" ref={lnameRef}/><br /><br />
                
                <label>Email :</label>
                <input type="email"  placeholder="Enter Your Email"  name="email" ref={emailRef}/><br /><br />

                <label>Password :</label>
                <input type="password"  placeholder="Enter Your Password" name="pass" ref={passwordRef}/><br /><br />

                <label>Contact :</label>
                <input type="text"  placeholder="Enter Your Contact" name="contact" ref={contactRef}/><br /><br />

                <label>City :</label>
                <input type="text" placeholder="Enter Your City" name="city" ref={cityRef}/><br /><br /><br /><br />

                <input type="submit" value={'Submit'}/>
            </form>
        </>
    )

}
export default UnControlForm;