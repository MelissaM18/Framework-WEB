import React from "react";

import photo from '../assets/nfl.png';
import back from '../assets/campo.jpg';

export default function Inicio(){
  return(
    <div>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                    <a href="/">
                        <img id="foto" src={ photo } alt="Logo" />
                    </a>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">
                        <li>
                            <a class="nav-link" href="/id">ID</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/idt">ID-Title</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/sridt">No Resueltos ID-Title</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/ridt">Resueltos ID-Title</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/idu">ID-userID</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/ridu">Resueltos ID-userID</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/sridu">No Resueltos ID-userID</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <img src={ back } alt="fondo" id="fondo" />
    </div>
  );
}
