<template>
  <div id="perfil">
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
          asdsa
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
    border-radius: 10px;
    margin-top: 10%;
  }
  #comentarios{
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: solid 2px black;
  }
  #video{
    width: 100%;
    height: 334px;
    margin-bottom: 5%;
    background: lightgray;
    border-radius: 10px;
    border: solid 2px black;
  }
  .btn_perfil{
    background-color: #9B51E0;
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
  #perfil{
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
    margin-top: 2%;
    justify-content: flex-end;
    display: flex;
    margin-bottom: 2%;
  }
</style>
