<template>
<div>
  <div class="content-block">
    <div class="content-block__left">
      <h2>Servicios</h2>
    </div>
    <div class="content-block__right">
      <p>
        Consultora Integral de Negocios enfocada en la implementación de estrategias de negocios basadas en Tecnología, Diseño y Marketing.
      </p>
      <p>
        XIII CREATIVE AGENCY Nuestra cultura de trabajo busca desarrollar estrategias creativas que conectan los negocios con el estilo de vida y los valores de los consumidores.
        Analizamos factores políticos, ambientales, sociales, tecnológicos y económicos en busca de crear valor para la marca y el cliente.
        Contamos historias a través de las experiencias de nuestros clientes. Hacemos conexiones entre nuestros clientes y sus consumidores.
        Creamos experiencias con nuestros productos y servicios.
      </p>

      <div>
        <p>
            Somos una agencia de consultoría integral con más de 5 años de experiencia oroginada en Monterrey, Nuevo León, México.
          </p>
          <br>
          <p>
            Contamos con servivios en las ciudades de Monterrey, Guadalajara y la Ciudad de México.
          </p>
          <br>
          <p>
            El desarrollo de cliente es el acto  de ganar terreno con los mismos, creando y avanzando hacia el punto en donde las necesidades del cliente encajan con lo que el negocio ofrece.
          </p>
      </div>
    </div>
  </div>

  <br><br><br><br>

  <div class="content-block">
    <div class="content-block__left">
      <h3>Diseño</h3>
    </div>
    <div class="content-block__right">
      <div class="design">
        <p>Desarrollo de marca y branding, diseño web y diseño de aplicaciones web y nativas.</p>
        <div class="center">
          <!-- <div class="figure">
            <div class="square"></div>
            <div class="circle"></div>
          </div> -->
          <div>
            <img src="@/assets/figures/design.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br><br><br>

  <div class="content-block">
    <div class="content-block__left">
      <h3>Desarrollo</h3>
    </div>
    <div class="content-block__right">
      <div class="development">
        <p>Desarrollo de software y aplicaciones.</p>
        <div class="center">
          <img src="@/assets/figures/dev.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <br><br><br><br>

</div>
</template>

<style lang="scss" scoped>
.center {
  text-align: center;
  padding: 20px 10px;
}

.design {

  .figure {
    text-align: center;
    display: inline-block;
    position: relative;
  }
  .square {
    width: 340px;
    height: 340px;
    border: 1px solid white;
  }

  .circle {
    width: 265px;
    height: 265px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    right: -130px;
  }
}

.development {

}
</style>