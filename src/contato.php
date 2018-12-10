<?php require_once 'header.php'; ?>
<link rel="stylesheet" type="text/css" href="assets/contato.css">
<section class="container">
  <h1 class="title title-less-margin">Contato</h1>
  <h2 class="subtitle">Contate-nos e realize seu orçamento!</h2>
    <form class="form col-d-8 col-t-11 col-m-fluid">
      <label>Nome</label>
      <input type="text" name="nome" class="field text-field" placeholder="Digite aqui seu nome" />
      <label>Telefone</label>
      <input type="text" name="nome" class="field text-field" placeholder="Digite aqui seu telefone" />
      <label>E-mail</label>
      <input type="text" name="nome" class="field text-field" placeholder="Digite aqui seu e-mail" />
      <label>Mensagem</label>
      <textarea name="message" class="field text-area" placeholder="Digite aqui sua mensagem"></textarea> 
      <button class="button-form">enviar</button>
    </form>
</section>
<?php require_once 'footer.php'; ?>
