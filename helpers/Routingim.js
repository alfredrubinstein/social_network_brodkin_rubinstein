import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Home} from "../pages/Home";
import {Posts} from "../pages/Posts";
import {Albums} from "../pages/Albums";
import {Todos} from "../pages/Todos";
import {NotFound} from "../pages/NotFound";
import { LogIn } from '../pages/LogIn';

import "../styles/Routingim.css"

export function Routingim() {
  return (
    <div>


<BrowserRouter>
<nav>
<Link to="/logIn">יציאה</Link>
<Link to="/">דף הבית</Link>
<Link to="/posts">מאמרים</Link>
<Link to="/albums">אלבום</Link>
<Link to="/todos">מטלות</Link>

</nav>
<Routes>
<Route path="*" element={<NotFound/>}/>
<Route path="/login" element={<LogIn/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/posts" element={<Posts/>}/>
  <Route path="/albums" element={<Albums/>}/>
  <Route path="/todos" element={<Todos/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}
