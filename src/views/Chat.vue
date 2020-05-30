<template>
  <div id="perfil">
    <Header/>
    <div id="chat">
      <!-- <h2>CHAT</h2> -->
      <div id="left"> sd</div>
      <div id="right"> sd</div>
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
  #left{
    background-color: lightgray;
    width: 30%
  }
  #right{
    background-color: gray;
    width: 40%
  }
  h2{
    color: black;
  }
  #chat{
    width: 100%;
    display: flex;
    border-radius: 50px;
  }
</style>
