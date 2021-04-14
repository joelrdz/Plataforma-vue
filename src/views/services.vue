<template>
<div>
  <div>
    <h2>Servicios</h2>
    <p>
      Consultora Integral de Negocios enfocada en la implementación de estrategias de negocios basadas en Tecnología, Diseño y Marketing.
    </p>
    <p>
      XIII CREATIVE AGENCY Nuestra cultura de trabajo busca desarrollar estrategias creativas que conectan los negocios con el estilo de vida y los valores de los consumidores.
      Analizamos factores políticos, ambientales, sociales, tecnológicos y económicos en busca de crear valor para la marca y el cliente.
      Contamos historias a través de las experiencias de nuestros clientes. Hacemos conexiones entre nuestros clientes y sus consumidores.
      Creamos experiencias con nuestros productos y servicios.
    </p>
  </div>
  <br>
  <div class="design">
    <h3>Diseño</h3>
    <p>Desarrollo de marca y branding, diseño web y diseño de aplicaciones web y nativas.</p>
    <div class="center">
      <div class="figure">
        <div class="square"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
  <br>
  <div class="development">
    <h3>Desarrollo</h3>
    <p>Desarrollo de software y aplicaciones.</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.design {
  .center {
    text-align: center;
    padding: 20px 10px;
  }

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

.dev {

}

.development {

}
</style>