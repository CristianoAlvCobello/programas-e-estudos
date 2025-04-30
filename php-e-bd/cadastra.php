<?php include "includes/header.php" ?>

<div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h2>Adicionar usuário</h2>
                </div>
                <div class="card-body">
                    <form method="post">
                        <div class="mb-3">
                            <label>Nome</label>
                            <input type="text" name="nome" class="form-control">

                            <label>Email</label>
                            <input type="text" name="email" class="form-control">

                            <label>Data de Nascimento</label>
                            <input type="date" name="nascimento" class="form-control">                            
                        </div>
                        <button type="submit" name="salvar" class="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
    $nome = $_POST['nome'] ?? "";
    $email = $_POST['email'] ?? "";
    $nascimento = $_POST['nascimento'] ?? "";
    $nascimento = date("Y-m-d", strtotime($nascimento));
    
    if(isset($_POST["salvar"])){
        $sql = $conexao->prepare("INSERT INTO usuarios (nome, email, nascimento) VALUES (?, ?, ?)");
        $sql->bind_param('sss', $nome, $email, $nascimento);
        $sql->execute();
    }

?>

<?php include "includes/footer.php" ?>