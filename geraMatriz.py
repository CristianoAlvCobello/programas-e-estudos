def montaMatriz(QtdLinhas, QtdColunas):
    """
    QtdLinhas: quantidade de linhas da matriz
    QtdColunas: quantidade de colunas da matriz 
    """
    matriz = {}

    for linha in range(0, QtdLinhas):
        colunas = []
        for coluna in range(0, QtdColunas):
            colunas.append(int(input(f'Digite o valor da posição [{linha+1}][{coluna+1}]: ')))
        matriz[f'{linha}'] = colunas.copy()

    print('\n\033[1mA matriz gerada\033[m\n')
    for coluna in range(0, QtdColunas):
        print(f'     {coluna} ', end='')
    print('\n')

    for linha in range(0, QtdLinhas):
        print(f'{linha}  ', end='')
        for coluna in range(0, QtdColunas):
            print(f'[ {matriz[f'{linha}'][coluna]:^1} ]  ', end='')
        print('\n')

    print(matriz)
montaMatriz(3, 4)
