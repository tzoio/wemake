<?php require_once 'header.php'; ?>
<link rel="stylesheet" type="text/css" href="assets/servicos.css">
<nav class="navigator">
  <ul>
    <li><a href="#appandroid" class="active"><span>Aplicativos Android</span><span class="circle"><svg xmlns="http://www.w3.org/2000/svg" width="149854.855" height="149854.855" viewBox="0 0 140.48893 140.48893"><g transform="translate(-150.474 -642.2)"><circle r="52.528" cy="712.446" cx="220.718" fill="#1b1e25"/><circle r="44.447" cy="712.446" cx="220.718" fill="#d90428"/></g></svg></span></a></li>

    <li><a href="#websites"><span>Desenvolvimento Web</span><span class="circle"><svg xmlns="http://www.w3.org/2000/svg" width="149854.855" height="149854.855" viewBox="0 0 140.48893 140.48893"><g transform="translate(-150.474 -642.2)"><circle r="52.528" cy="712.446" cx="220.718" fill="#1b1e25"/><circle r="44.447" cy="712.446" cx="220.718" fill="#1b1e25"/></g></svg></span></a></li>

  </ul>
</nav>
<section class="container">
    <div class="servico" id="appandroid">
        <h2 class="title">Aplicativos Android</h2>
        <ol class="aptidoes">
            <li>Bonzao</li>
            <li>Lindo</li>
            <li>Gatao</li>
        </ol>
        <div class="servico-image"></div>
    </div>
    <div class="servico right" id="websites">
        <h2 class="title">Sites</h2>
        <ol class="aptidoes">
            <li>Bonzao</li>
            <li>Lindo</li>
            <li>Gatao</li>
        </ol>
        <div class="servico-image"></div>
    </div>
</section>
<?php require_once 'footer.php'; ?>
<!-- build:js assets/js/navigator.min.js -->
<script src="assets/js/build/navigator.js"></script>
<!-- endbuild -->
