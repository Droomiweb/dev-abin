import {useState} from 'react'

function MyForm() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [textt, setTextt] = useState("");
  
    return (
      <form action="https://formsubmit.co/designer.abinabi@gmail.com" method="POST">
       
          <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' name='name'required/><br/>
          <input type="email"  value={mail} onChange={(e) => setMail(e.target.value)} placeholder='E-mail' name='mail' required/><br/>
          <textarea type="text"  value={textt} onChange={(e) => setTextt(e.target.value)} placeholder='Write Here..' name='content'required/><br/>
        <button type="submit">Send</button>
      </form>
    )
  }


function Contact(){
    return(
    
 <>
 <code>
 
 &lt;h1&gt;Contact me &lt;/h1&gt;
 <br/><br/>
 <div className="par">
        <MyForm/>
 </div>
 </code>
 
 </>
    )
 }
 
 export default Contact;