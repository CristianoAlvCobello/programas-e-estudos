def montaMatriz(QtdLinhas, QtdColunas):
    """
    QtdLinhas: quantidade de linhas da matriz
    QtdColunas: quantidade de colunas da matriz 
    """
    matriz = []

    for linha in range(QtdLinhas):
        colunas = []
        for coluna in range(QtdColunas):
            valor = int(input(f'Digite o valor da posição [{linha + 1}][{coluna + 1}]: '))
            colunas.append(valor)
        matriz.append(colunas)

    print('\n\033[1mA matriz gerada\033[m\n')
    
    # Imprime os cabeçalhos das colunas
    print('     ', end='')
    for coluna in range(QtdColunas):
        print(f' {coluna}     ', end='')
    print('\n')

    # Imprime a matriz com cabeçalhos das linhas
    for linha in range(QtdLinhas):
        print(f'{linha}  ', end='')
        for coluna in range(QtdColunas):
            print(f'[{matriz[linha][coluna]:^5}]', end='')
        print('\n')
    print(matriz)

montaMatriz(3, 3)
