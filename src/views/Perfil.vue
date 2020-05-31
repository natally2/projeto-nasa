<template>
  <div class="content">
    <Header/>
    <div class="conteudo">
      <div class="teste">
        <div id="nome_perfil">
          <img src="../assets/pp.jpg" id="pic_profile" alt="perfil_pic" width="130px" height="130px">
          <h3 class="name">Natally Riqueto</h3>
        </div>
        <div id="btn_all">
          <button class="btn_perfil">LEARN</button>
          <button class="btn_perfil">TEACH</button>
          <button class="btn_perfil">ABOUT</button>
        </div>
        <div id="video">
          <svg width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M106.896 67.7266L55.334 36.3789C50.7051 33.8008 44.875 37.1113 44.875 42.5312V103.469C44.875 108.859 50.6758 112.199 55.334 109.621L106.896 80.0312C111.701 77.3652 111.701 70.4219 106.896 67.7266ZM145.656 73C145.656 32.8633 113.137 0.34375 73 0.34375C32.8633 0.34375 0.34375 32.8633 0.34375 73C0.34375 113.137 32.8633 145.656 73 145.656C113.137 145.656 145.656 113.137 145.656 73ZM14.4062 73C14.4062 40.627 40.627 14.4062 73 14.4062C105.373 14.4062 131.594 40.627 131.594 73C131.594 105.373 105.373 131.594 73 131.594C40.627 131.594 14.4062 105.373 14.4062 73Z" fill="#4F4F4F"/>
        </svg>
        </div>
        <div id="comentarios">
          <div class="estrelas">
            <font-awesome-icon size="1x" icon="star" class="icon_star"/>
            <font-awesome-icon size="1x" icon="star" class="icon_star"/>
            <font-awesome-icon size="1x" icon="star" class="icon_star"/>
            <font-awesome-icon size="1x" icon="star" class="icon_star"/>
            <font-awesome-icon size="1x" icon="star" class="icon_star"/>
          </div>
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud laboris."</p>
          <div class="estrelas">
            <img src="../assets/pp.jpg" id="pic_profile" alt="perfil_pic" width="40px" height="40px">
            <p>Natally Riqueoto</p>
          </div>
        </div>
      </div>

      <div id="detalhes">
        <font-awesome-icon size="1x" icon="search"/>
        <input type="text" id="pesquisar">
        <div class="detalhes_">
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

<style>
  .name::after {
    content: '';
    display: block;
    height: 1px;
    width: 100px;
    margin: 10px auto 0;
    background: black;
  }
  .teste{
    width: 50%;
  }
  #btn_all{
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-around;
  }
  .conteudo{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .detalhes_{
    width: 100%;
    height: 400px;
    margin-top: 50%;
    background: lightgray;
    border-radius: 10px;
    border: solid 2px black;
  }
  #pesquisar{
    border-radius: 25px;
    margin-top: 10%;
    width:100%;
  }
  input{
    outline: none;
  }
  #comentarios{
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: solid 2px black;
  }
  #video{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 334px;
    margin-bottom: 5%;
    background: lightgray;
    border-radius: 10px;
    border: solid 2px black;
  }
  .btn_perfil{
    background-color: #2F80ED;
    border: none;
    border-radius: 5px;
    color: white;
    width: 20%;
  }
  #nome_perfil{
    margin-top: 10%;
    display: flex;
    align-items: center;
    width: 65%;
    justify-content: space-between;
  }
  body{
    margin: 0 auto;
  }
  .content{
    display: flex;
  }
  #pic_profile{
    border-radius: 50%;
    border: solid 3px black;
  }
  .icon_star{
    color: #DAA520;
  }
  .estrelas{
    margin: 2% 2% 2% 2%;
    justify-content: flex-end;
    display: flex;
  }
</style>
