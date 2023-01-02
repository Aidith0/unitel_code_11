function menushow() {
    let menumobile = document.querySelector('.mobile-menu');
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icon').src= "./img/close_white_36dp.svg";
    } else{
        menumobile.classList.add('open');
        document.querySelector('.icon').src= "./img/close_white_36dp.svg";
   }
}

/*
.menu{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 6rem;
     }
.menu_logo{
    display:flex;
    align-items:center;
}

.menu_logo h1{
    color: #ffff;
}
.nav{
    display: flex;
    align-items: center;
}

.nav .nav_lista{
    display: flex;
    justify-content: center;
    list-style: none;
}
.nav-item{
    margin: 0 15px;
}
.nav_link{
    text-decoration: none;
font-size: 1.5rem;
color: #ffff;
font-weight: 400;
  
}
.mobile-menu-icon{
    display: none;
}

.mobile-menu{
    display: none;
}

@media screen and (max-width: 730px) {
    .nav-bar {
        padding:1.5rem 4rem;
    
}
.nav-iten{
    display: none;
}
.login-button{
    display: none;
}
.mobile-menu-icon{
           display: block;
}
.mobile-menu-icon button{
    background-color: transparent;
   border: none;
   cursor: pointer;
}
.mobile-menu ul{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 1.2rem;
}
.mobile-menu .login-button button{
    width: 100%;

}
.open{
    display: block;
}
}


