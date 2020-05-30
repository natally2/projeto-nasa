<template>
    <div id="cadastro">
        <header id="header">
            <div id="header-begin">
                <img src="../assets/images/logo-login.svg" id="logo-title">
                <span id="title">LEARNING<br>COMMUNITY</span>
            </div>
            <div id="header-end">
                <div id="header-item">Home</div>
                <div id="header-item">About</div>
                <div id="header-item">Contact</div>
                <button id="signup-btn">Sign Up</button>
            </div>
        </header>
        <body id="body">
            <div id="center">
                <div id="content">
                    <span id="title-body">Welcome</span>
                    <span id="label">Email</span>
                    <input type="text">
                    <span id="label">Password</span>
                    <input type="password">
                    <span id="label">Confirm Password</span>
                    <input type="password">
                    <button id="submit">Sign Up</button>
                </div>
            </div>
        </body>
        <footer id="footer">join the community!</footer>
    </div>
</template>

<script></script>

<style>
#header {
    display: flex;
    justify-content: space-between;
    margin: 2em;
}

#header-begin {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#header-end {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#logo-title {
    width: 5em;
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
    background: rgba(87, 79, 221, 0.8);
    border-radius: 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: #F2F2F2;
    padding: 0.3em;
}

#body {
    background: url(../assets/images/bg-login.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center top;
    background-attachment: fixed;
}

#center {
    display: flex;
    justify-content: center;
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
}

#title-body {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    color: #4F4F4F;
    text-align: center;
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
    padding: 0.3em;
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
    padding: 0.3em;
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
    color: #F2F2F2;
    margin-top: 2em;
}

bg {
    position: absolute;
    height: 100%;
    z-index: -99999;
}
</style>