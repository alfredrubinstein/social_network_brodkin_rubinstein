import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import {App} from '../App'
import '../styles/LogIn.css';

const initialForm = {
  name: "",
  password: "",
  id: null,
};

export const LogIn = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.password) {
      alert('נא למלא את כל השדות');
    } else {
      navigate('/');  
    }
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };
  return (
    
    <>
      <h1>דף הרשמה</h1>
      <form onSubmit={handleSubmit}>
        <div id='princple'>
        <input
          type='text'
          name='name'
          placeholder='הכנס את השם שלך'
          onChange={handleChange}
          value={form.name}
        />
        <br />
        <input
          type='text'
          name='password'
          value={form.password}
          onChange={handleChange}
          placeholder='הכנס את הסיסמה'
        />
        </div>
        <br />
        <input type="submit" value="כניסה" />
        <input type="reset" value="מחק" onClick={handleReset} />
      </form>
    </>
  );
};
