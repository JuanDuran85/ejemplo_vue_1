<template>
  <div class="container">
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th scope="col">Usuario Id</th>
          <th scope="col">Id</th>
          <th scope="col">Titulo</th>
          <th scope="col">Post</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <th scope="row">{{post.id}}</th>
          <td>{{post.userId}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  nombre: "Ejemplo de Nombre",
  data() {
    return {
      posts: []
    };
  },
    //antes de usar axios se debe instalar la libreria con npm o yarn
  created() {
      axios.get('http://jsonplaceholder.typicode.com/posts').then(posts=>{
          this.posts = posts.data
      });
  }
};
</script>

<style></style>
