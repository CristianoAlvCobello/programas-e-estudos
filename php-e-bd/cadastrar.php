<?php include "includes/header.php" ?>

<div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h2>Adicionar usuário</h2>
                </div>
                <div class="card-body">
                    <div class="msgErro text-danger fw-bold">
                        <!--Preenchido por JS-->
                    </div>
                    <form method="post" id="cadastro">
                        <div class="mb-3">
                            <label>Nome</label>
                            <input type="text" id="nome" name="nome" class="form-control border-dark">

                            <label>Email</label>
                            <input type="text" id="email" name="email" class="form-control border-dark">

                            <label>Senha</label>
                            <input type="password" id="senha" name="senha" class="form-control border-dark">

                            <label>Data de Nascimento</label>
                            <input type="date" id="nascimento" name="nascimento" class="form-control border-dark">        
                        </div>
                        <button type="submit" id="salvar" name="salvar" class="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
    $nome = $_POST['nome'] ?? "";
    $email = $_POST['email'] ?? "";
    $senha = $_POST['senha'] ?? "";
    $nascimento = $_POST['nascimento'] ?? "";
    $nascimento = date("Y-m-d", strtotime($nascimento));
    
    if(isset($_POST["salvar"])){
        $sql = $conexao->prepare("INSERT INTO usuarios (nome, email, senha, nascimento) VALUES (?, ?, ?, ?)");
        $sql->bind_param('ssss', $nome, $email, $senha, $nascimento);
        $sql->execute();
        header("location: index.php");
        exit;
    }

    include "includes/footer.php";
?>