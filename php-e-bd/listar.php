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
                                <th>Nome</th>
                                <th>Acões</th>
                            </thead>
                            <tbody class="text-center">
                                <td >CRISTIANO</td>
                                <td>
                                    <a href="visualizar.php?=" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i> Visualizar</a>
                                    <a href="editar.php?=" class="btn btn-success btn-sm"><i class="bi bi-pen"></i> Editar</a>
                                    <a href="" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i> Deletar</a>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include "includes/footer.php" ?>

