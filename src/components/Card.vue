<template>
  <div class="card">
    <div class="header">
      <h2>{{titulo}}</h2>
    </div>
    <div class="conteudo">
      <slot></slot>
    </div>
</div>
</template>

<script>
    export default {
        props: {
          titulo: String
        }
    }
</script>

<style  scoped>
.card {
  background-color: #fff;
  box-shadow: 0 0 1em rgba(58, 59, 69, 0.15);
  margin-bottom: 20px;
  border: 1px solid #e3e6f0;
  border-radius: 5px;
}
.card .header {
  background-color: #f8f9fc;
  color: #4e73df;
  padding: 1px 15px;
  border-bottom: 1px solid #e3e6f0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card .header h2 {
  font-size: 1em;
}

.card .conteudo {
  padding: 30px 20px;
}
</style>