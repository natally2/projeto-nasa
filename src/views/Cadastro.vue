<template>
    <div id="cadastro">
        <header id="header">
            <div id="header-begin">
                <img src="../assets/images/logo-login.svg" id="logo-title" alt="Home">
                <span id="title">LEARNING COMMUNITY</span>
            </div>
            <div id="header-end">
                <div id="header-item"><p>Home</p></div>
                <div id="header-item">About</div>
                <div id="header-item">Contact</div>
                <div id="signup-btn"><span id="signup-txt">Sign Up</span></div>
            </div>
        </header>
        <body id="body">
            <div id="content">
                <span id="title-body">Welcome</span>
                <span id="label">Email</span>
                <input type="text">
                <span id="label">Password</span>
                <input type="text">
                <span id="label">Confirm Password</span>
                <input type="text">
                <button id="submit">Sign Up</button>
            </div>
            <div ></div>
        </body>
        <footer id="footer">join the community!</footer>
    </div>
</template>

<script></script>

<style>
#header {
    display: flex;
    justify-content: space-between;
}

#header-begin {
    width: 50%;
    display: flex;
}

#header-end {
    width: 50%;
    display: flex;
    justify-content: space-around;
}

#logo-title {
    width: 10%;
    height: auto;
}

#title {
    font-family: Advent Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 27.2883px;
    line-height: 33px;
    color: #9B51E0;
}

#header-item {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: #828282;
}

#signup-btn {
    width: 150px;
    height: 50px;
    background: rgba(87, 79, 221, 0.8);
    border-radius: 25px;
}

#signup-txt {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: #F2F2F2;
}

#footer {
    content: "";
    display: block;
    position: absolute;
    background: url(../assets/images/bg-login.svg) no-repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#content {
    display: flex;
    flex-direction: column;
    width: 25rem;
    padding: 2rem;
    background: #FFFFFF;
    border: 1px solid #828282;
    box-sizing: border-box;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#title-body {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    color: #4F4F4F;
}

#label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #4F4F4F;
}

input {
    background: #F2F2F2;
    border: 2px solid #4F4F4F;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 1rem !important;
}

#submit {
    background: #9B51E0;
    border: 2px solid #5B2B87;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
}

#footer {

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;

    /* Gray 6 */

    color: #F2F2F2;
}

#img-bg {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
</style>