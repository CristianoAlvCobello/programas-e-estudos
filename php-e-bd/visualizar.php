<?php include "includes/header.php" ?>

<div class="container mt-4">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Lista De Usuários
                        <a href="cadastra.php" class="btn btn-primary float-end">Cadastrar usuário</a>
                    </h2>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <thead class="text-center">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Nascimento</th>
                            </thead>
                            <tbody class="text-center">
                                <?php 
                                    $tabela = $conexao->query("SELECT * FROM usuarios");

                                    while($linha = $tabela->fetch_assoc()){
                                        echo"<tr>" .
                                            "<td>" . $linha["id"] . "</td>" .
                                            "<td>" . $linha["nome"] . "</td>" .
                                            "<td>" . $linha["email"] . "</td>" .
                                            "<td>" . $linha["nascimento"] . "</td>" .
                                            "</tr>"
                                        ;
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