<?php include "includes/header.php" ?>

<div class="container mt-4">
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h2>Visualização
                        <a href="listar.php" class="btn btn-warning float-end"><i class="bi bi-arrow-return-left"></i></a>
                        <a href="cadastra.php" class="btn btn-primary float-end">Cadastrar usuário</a>
                    </h2>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <tbody class="text-center">
                                <?php 
                                    if(isset($_GET["id"])){
                                        $id = $_GET["id"];
                                        $tabela = $conexao->query("SELECT * FROM usuarios WHERE id=$id");
                                        while($linha = $tabela->fetch_assoc()){
                                            $nascimento = date("d/m/Y", strtotime($linha['nascimento']));
                                            echo
                                                "<th>ID</th><td>" . $linha["id"] . "</td></tr>" .
                                                "<th>Nome</th><td>" . $linha["nome"] . "</td></tr>" .
                                                "<th>Email</th><td>" . $linha["email"] . "</td></tr>" .
                                                "<th>Senha</th><td>" . $linha["senha"] . "</td></tr>" .
                                                "<th>Nascimento</th><td>" . $nascimento . "</td></tr>" .
                                                "</tr>";
                                        }
                                    }else{
                                        echo '<h2 class="text-center">Nenhum dado encontrado</h2>';
                                    }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include "includes/footer.php";?>