<template>
  <div class="container-actu">
    <div class="actu">
      <router-link to="/VActu/VArticle">
        <div class="actu__bloc hot-news">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc add">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc add">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
      <router-link to="/VActu">
        <div class="actu__bloc add">
          <img :src="img" alt="photo de l'article" />
          <h1 class="pt-roboto-condensed">Title Article</h1>
        </div>
      </router-link>
    </div>
    <div class="add-more">
      <input
        type="button"
        id="add-more-button"
        class="add-more__button"
        value="Voir plus"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container-actu {
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
}

.actu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  max-width: 1300px;
}

.box * {
  flex: 1;
}

/* ------------- */
/* ACTU BLOC */
/* ------------- */
a {
  margin: 10px;
}
.actu__bloc {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 400px;
  padding-bottom: 15px;
}
.actu__bloc img {
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
}
.actu__bloc h1 {
  margin: 10px;
  font-weight: bold;
  font-size: 1.25rem;
}

/* ------------- */
/* ADD MORE */
/* ------------- */
.display {
  display: block;
}
.displayNone {
  display: none;
}
/* .actu :nth-child(n + 7) {
  display: none;
} */
.add-more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.add-more__button {
  background: none;
  border: solid 2px #000;
  padding: 5px;
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  width: 100px;
}
.add-more__button:hover {
  background-color: #991917;
  border: solid 2px #991917;
  color: #fff;
}

@media (max-width: 1044px) {
  .actu__bloc{
    width: 100%;
  }
  .container-actu {
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>

<script>
import AuthService from '@/services/AuthService.js';
export default {
  name: "Actualités",
  data() {
    return {
      img: require("@/assets/img-article/img-1.jpg"),
      result: null
    };
  },
  async article() {
    let getArticle = await AuthService.getArticle();
    console.log(getArticle)
    this.result = getArticle
  },
  mounted() {
    let button = document.querySelector("#add-more-button");
    //Je réccupère tous les éléments à partir du 7ème
      let elements = document.querySelectorAll(".actu :nth-child(n + 7)");

    //Add display none
      for (var i=0; i<elements.length; i++){
         elements[i].classList.add('displayNone')
      }

    button.addEventListener("click", () => {
      
      for (var i=0; i<elements.length; i++){
         elements[i].classList.toggle("displayNone")
      }

      if (button.value === "Voir plus") {
        button.value = "Voir moins";
      } else {
        button.value = "Voir plus";
      }
    });
  },
};
</script>