<?php include "includes/header.php" ?>

<div class="container mt-4">
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h2>Lista De Usuários
                        <a href="cadastra.php" class="btn btn-primary float-end">Cadastrar usuário</a>
                    </h2>
                    <div class="card-body">
                        <table class="table table-bordered table-striped">
                            <thead class="text-center">
                                <th>Nome</th>
                                <th>Acões</th>
                            </thead>
                            <tbody class="text-center">
                                <?php 
                                $tabela = $conexao->query("SELECT id, nome FROM usuarios");
                                
                                    if($tabela->num_rows > 0){
                                        while($linha = $tabela->fetch_assoc()){
                                            echo "<tr>";
                                            echo "<td>" . $linha["nome"] . "</td>";
                                            echo "<td>";
                                            echo '<a href="visualizar.php?id=' . $linha["id"] . '" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i> Visualizar</a> ';
                                            echo '<a href="editar.php?id=' . $linha["id"] . '" class="btn btn-success btn-sm"><i class="bi bi-eye"></i> Editar</a> ';
                                            echo '<a href="deletar.php?id=' . $linha["id"] . '" class="btn btn-danger btn-sm"><i class="bi bi-eye"></i> Deletar</a>';
                                            echo "</td>";
                                            echo "</tr>";
                                        }
                                    }else{
                                        echo "<tr><td>Sem usuários existentes</td>";
                                    }

                                    if(isset($_GET["deletar"])){
                                        $id = $_GET["deletar"];
                                        $sql = $conexao->prepare("DELETE FROM usuarios WHERE id=(?)");
                                        $sql->bind_param('i', $id);
                                        $sql->execute();
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

<?php include "includes/footer.php" ?>

