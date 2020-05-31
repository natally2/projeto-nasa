<template>
    <div>
        <div id="flex-menu">
            <div id="menu"></div>
            <div id="flex-title">
                <span id="title">VIDEO</span>
                <div id="box">
                    <div id="chat">
                        <div id="chat1">
                            <div id="circulo"></div>
                            <span id="nome">NATALLY RIQUETO</span>
                        </div>
                        <div id="chat2"></div>
                        <div id="chat3">
                            <div id="texto"></div>
                            <font-awesome-icon size="1x" icon="paper-plane" class="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#flex-menu {
    display: flex;
}

#menu{
  background: linear-gradient(180deg, #7873F5 0%, #FF6EC4 99.98%, #D96FD2 99.99%);
  width: 6rem;
  height: 100vh;
  border-top-right-radius: 65px;
  border-bottom-right-radius: 65px;
}

#flex-title {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 4rem;
    width: 100%;
    height: 100%;
}

#title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-transform: uppercase;
    color: #4F4F4F;
    margin-bottom: 1rem;
}

#box {
    background: #F2F2F2;
    border: 1px solid #4F4F4F;
    box-sizing: border-box;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    width: 72rem;
    height: 34rem;
    display: flex;
    justify-content: flex-end;
}

#chat {
    display: flex;
    flex-direction: column;
}

#chat1 {
    background: #C4C4C4;
    border: 1px solid #4F4F4F;
    box-sizing: border-box;
    width: 16.2rem;
    height: 2.7rem;
    border-top-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

#chat2 {
    border: 1px solid #828282;
    width: 16.2rem;
    height: 28.2rem;
}

#chat3 {
    background: #BDBDBD;
    border: 1px solid #4F4F4F;
    box-sizing: border-box;
    width: 16.2rem;
    height: 3.1rem;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

#circulo {
    border: 1px solid #000;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
}

#nome {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    color: #4F4F4F;
}

#texto {
    background: #E0E0E0;
    border: 0.522727px solid #4F4F4F;
    box-sizing: border-box;
    border-radius: 15.6818px;
    width: 12rem;
    height: 2rem;
}

#icon {
    font-size: 11231230rem;
}
</style>