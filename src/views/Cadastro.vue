<template>
    <div>
        <div id="pagina">
            <div id="header">
                <div id="header-begin">
                    <img src="../assets/images/logo-login.svg" id="logo-title">
                    <span id="header-title">LEARNING<br>COMMUNITY</span>
                </div>
                <div id="header-end">
                    <div id="header-item">Home</div>
                    <div id="header-item">About</div>
                    <div id="header-item">Contact</div>
                    <div id="header-item">Login</div>
                    <button id="signup-btn">Sign Up</button>
                </div>
            </div>
            <div>
                <div id="center-form">
                    <div id="flex-form">
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
                <div id="footer">join the community!</div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style>
#pagina {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height:100vh;
    background-image: url(../assets/images/bg-login.svg);
    background-repeat: no-repeat;
    background-position: 0 20vh;
    background-size: 100% auto;
}

#header {
    display: flex;
    justify-content: space-between;
    margin: 2rem;
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
    width: 5rem;
    height: auto;
}

#header-title {
    font-family: Advent Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #2D9CDB;
}

#header-item {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #828282;
}

#signup-btn {
    padding-left: 1rem;
    padding-right: 1rem;
    background: #2D9CDB;
    border-radius: 25px;
    border: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #F2F2F2;
}

#center-form {
    display: flex;
    justify-content: center;
}

#flex-form {
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
    padding: 0.3rem;
}

#submit {
    background: #2F80ED;
    border: 2px solid #4F4F4F;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.1rem;
    color: #FFFFFF;
    padding: 0.3rem;
}

#footer {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    color: #F2F2F2;
    margin-top: 2rem;
}
</style>