<template>
  <div id="perfil">
    <Header/>
    <div id="chat">
      <div id="left">
        <div class="available">
          <div>
            <img src="../assets/pp.jpg" id="pic_profile" alt="perfil_pic" width="50px" height="50px">
          </div>
          <div>
            <h6>Natally Riqueto</h6>
            <font-awesome-icon size="1x" icon="circle" id="icon_circle"/>
            <span> Available </span>
          </div>
        </div>
        <div class="contatos">
          <img src="../assets/pp.jpg" id="pic_profile" alt="perfil_pic" width="30px" height="30px">
          <h6>Luana Diniz</h6>
        </div>
      </div>
      <div id="right">
        <div class="retangulo">
          <font-awesome-icon size="2x" icon="ban" class="icon_call"/>
          <font-awesome-icon size="2x" icon="phone" class="icon_call"/>
          <font-awesome-icon size="2x" icon="video" class="icon_call"/>
        </div>
        <div id="conversa">
        </div>
        <div class="retangulo baixo">
          <input type="text" id="input_chat">
          <font-awesome-icon size="2x" icon="paper-plane" class="icon_call"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default{
    components: {
      Header,
    }
  }

</script>

<style scopped="">
  .contatos{
    display: flex;
    margin-top: 30%;
    margin-left: 10%;
    background: linear-gradient(90deg, #DDDBDB 99.99%, #C4C4C4 100%);
  }
  .available{
    display: flex;
    justify-content: center;
    margin-top: 6%;
  }
  #input_chat{
    border-radius: 30px;
    width: 90%;
    height: 60%;
    border: 1px solid gray;
    background-color: #E0E0E0;
  }
  #conversa{
    height: 80%;
    width: 100%;
  }
  .retangulo{
    border-radius: 0 20px 0 0;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    background-color: #C4C4C4;
    width: 100%;
    height: 10%;
  }
  .retangulo.baixo{
    border-radius: 0 0 20px 0;
  }
  span{
    color: #828282;
  }
  #icon_circle{
    color:green;
  }
  .icon_call{
    color: #4F4F4F;
    margin: 2%;
  }
  #left{
    border-radius: 20px 0 0 20px;
    background-color: #E0E0E0;
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
  }
  #right{
    background-color: #F2F2F2;
    width: 70%;
    height: 80%;
    border-radius: 0 20px 20px 0;
  }
  h2{
    color: black;
  }
  #chat{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
