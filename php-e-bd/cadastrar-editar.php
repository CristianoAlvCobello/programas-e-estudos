<?php include "includes/header.php"; 

    if(isset($_GET["objetivo"])){
        if($_GET["objetivo"] == "editar"){
            if(isset($_GET["id"])){
                $id = (int)$_GET["id"];
                $usuario = $conexao->query("SELECT * FROM usuarios WHERE id=$id")->fetch_assoc();
            }
        }
    }
?>

<div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2><?php if($_GET["objetivo"] == "cadastrar"){echo "Cadastrar";}
                            elseif($_GET["objetivo"] == "editar"){echo "Editar";}
                        ?>
                        <a href="index.php" class="btn btn-warning float-end"><i class="bi bi-arrow-return-left"></i></a>
                    </h2>
                </div>
                <div class="card-body">
                    <div class="msgErro text-danger fw-bold">
                        <!--Preenchido por JS-->
                    </div>
                    <form method="post" id="cadastro">
                        <div class="mb-3">
                            <label>Nome</label>
                            <input value="<?php echo $usuario["nome"] ?? '' ?>" type="text" id="nome" name="nome" class="form-control border-dark">

                            <label>Email</label>
                            <input value="<?php echo $usuario["email"] ?? '' ?>" type="text" id="email" name="email" class="form-control border-dark">

                            <label>Senha</label>
                            <input value="<?php echo $usuario["senha"] ?? '' ?>" type="password" id="senha" name="senha" class="form-control border-dark">

                            <label>Data de Nascimento</label>
                            <input value="<?php echo $usuario["nascimento"] ?? '' ?>" type="date" id="nascimento" name="nascimento" class="form-control border-dark">        
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
    
    if($_GET["objetivo"] == "cadastrar"){
        if(isset($_POST["salvar"])){
            $sql = $conexao->prepare("INSERT INTO usuarios (nome, email, senha, nascimento) VALUES (?, ?, ?, ?)");
            $sql->bind_param('ssss', $nome, $email, $senha, $nascimento);
            $sql->execute();
            header("location: index.php");
            exit;
        }
    }
    
    if($_GET["objetivo"] == "editar"){
        if(isset($_POST["salvar"])){
            $sql = $conexao->prepare("UPDATE usuarios SET nome=(?), email=(?), senha=(?), nascimento=(?) WHERE id=$id");
            $sql->bind_param('ssss', $nome, $email, $senha, $nascimento);
            $sql->execute();
            header("location: index.php");
            exit;
        }
    }

    include "includes/footer.php";
?>