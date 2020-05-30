<template>
  <div id="perfil">
    <Header/>
    <input type="text" id="pesquisar">
    <font-awesome-icon size="1x" icon="search"/>
    <p>  1 2 3 ... 10  </p>
    <div class="card">
      <img src="../assets/pp.jpg" id="pic_profile" alt="perfil_pic" width="40px" height="40px">
      <p>Eduardo Lima</p>
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
  .card{
    border: 2px solid black;
    border-radius: 10px;
  }
</style>
