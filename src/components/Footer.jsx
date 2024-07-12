import React from "react";
import "./footerStyle.css";

export default function Footer() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"/> 
<footer>
<div class="footer">
<div class="row" style={{display:'inline-block'}}>
<a href="/"><i class="fa fa-facebook"></i></a>
<a href="/"><i class="fa fa-instagram"></i></a>
<a href="/"><i class="fa fa-youtube"></i></a>
<a href="/"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li>Home</li>
<li>Gallery</li>
<li>Support</li>
<li>Meet Our Team</li>
<li>Terms and Conditions</li>
</ul>
</div>

<div class="row">
RK Gupta Copyright © 2021 RK Gupta- All rights reserved
</div>
</div>
</footer>
    </>
  );
}
