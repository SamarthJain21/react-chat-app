import { useState } from "react"
import axios from "axios";



const LoginForm=()=>{
    const [userName,setUsername]=useState("");
    const [userSecret,setUserSecret]=useState("");
    const [error,setError] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
    
        // username passsword -> give messages
        // if error -> try other credentials
        console.log(userName, userSecret)
    
        const authObject = {'Project-ID':'fb2f150c-ea44-420d-b9bf-836f1929965a','User-Name':userName,'User-Secret':userSecret}
        console.log(authObject)
        try{
            await axios.get('https://api.chatengine.io/chats',{
                headers:authObject
            })
            localStorage.setItem('userName',userName);
            localStorage.setItem('userSecret',userSecret);
            window.location.reload();
    
    
        }catch(error){
            setError('Incorrect Credentials')

        }
    
    
    }

    

  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">
                Chat Application
            </h1>
            <form onSubmit={handleSubmit}>
                <input className="input" placeholder="Username" type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} required/>
                <input className="input" placeholder="Password" type="password" value={userSecret} onChange={(e)=>setUserSecret(e.target.value)} required/>
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">
                    {error}
                </h2>

                </form>

        </div>
    </div>
  )
}

export default LoginForm