from copy import deepcopy
from random import randint

def criaMatriz(QtdLinhas, QtdColunas=0, sortear=False):
    """
    QtdLinhas: quatidade de linhas da matriz
    QtdColunas: quantidade de colunas na matriz 
    A matriz é montada com listas internas e cada lista é um linha os indices dentro são colunas
    Exemplo:
    
       0  1  2    0  1  2
    [ [1, 2, 3], [4, 5, 6] ]
          0          1

    ou seja, matriz[0][0] == 1
    """

    matriz = []
    
    if QtdColunas == 0:
        QtdColunas = QtdLinhas

    if sortear == False:
        #Solicitando o valor das posições
        for linha in range(QtdLinhas):
            colunas = []
            for coluna in range(QtdColunas):
                valor = int(input(f'Digite o valor da posição [{linha + 1}][{coluna + 1}]: '))
                colunas.append(valor)
            matriz.append(colunas)
    else:
        #Fornecendo os valores aleatoriamente
        for linha in range(0, QtdLinhas):
            colunas = []
            for coluna in range(0, QtdColunas):
                valor = randint(0, 9)
                colunas.append(valor)
            matriz.append(colunas)
    return matriz

def determinante(matriz):
    """
    matriz: lista organizada com outras listas onde cada 
    lista interna é a linha da matriz e o indice dentro é a coluna 
    Exemplo: [ [1, 2, 3], [4, 5, 6] ]

    OBS: O calculo é feito no metodo de sarrus então suporta 2x2 e 3x3 ainda.
    """

    tamanho = len(matriz)
    #Copiando a matriz para não alterar a do úsuario
    matrizNova = deepcopy(matriz)

    if tamanho == 3:
        #Duplicando colunas para o calculo
        for linha in range(0, 3):
            for coluna in range(0, 2):
                matrizNova[linha].append(matriz[linha][coluna])
                
        #Calculando a lista do lado direito(esquerdo para o direito)  
        determinanteDireita = 0
        for contador in range(0, 3):
            resultado = 1
            for coluna in range(0, 3):
                resultado *= (matrizNova[coluna][coluna+contador])
            determinanteDireita += resultado

        #Calculando a lista do lado esquerdo(direito para o esquerdo) 
        determinanteEsquerda = 0
        for contador in range(0, 3):
            resultado = 1
            for coluna in range(2, -1, -1):
                contador += 1
                resultado *= (matrizNova[coluna][contador-1])
            determinanteEsquerda += resultado
            #Matriz após a regra de Sarrus aplicada      
        print('\n\033[1mA matriz na regra de Sarrus\033[m\n')
        for linha in range(0, 3):
            for coluna in range(0, 5):
                if coluna == tamanho-1:
                    print(f'[ {matrizNova[linha][coluna]:^1} ]\033[31;1m|\033[m', end='')
                else:
                    print(f'[ {matrizNova[linha][coluna]:^1} ]', end='')
            print('\n')

    elif tamanho == 2:
        determinanteDireita = matriz[0][0]*matriz[1][1]
        determinanteEsquerda = matriz[0][1]*matriz[1][0]

    resultado = determinanteDireita-determinanteEsquerda
    print(f'\033[1mResultado da determinante:\033[m \033[32;1m{resultado}\033[m')
    return resultado

def exibirMatriz(matriz):
    """    
    matriz: informe uma matriz e ela será exibida organizada na tela
    """
    QtdLinhas = len(matriz)
    QtdColunas = len(matriz[0])
    print('\033[1mExibição da matriz\033[m\n')
    for linha in range(0, QtdLinhas):
        for coluna in range(0, QtdColunas):
            print(f'[ {matriz[linha][coluna]:^1} ]', end='')
        print('\n')

def transporMatriz(matriz):
    """
    matriz: transforma cada linha da matriz fornecida vira coluna e vice e versa
    """
    matrizTransposta = []
    QtdLinhas = len(matriz)
    QtdColunas = len(matriz[0])
    for linha in range(0, QtdColunas):
        valor = []
        for coluna in range(0, QtdLinhas):
            valor.append(matriz[coluna][linha])
        matrizTransposta.append(valor)
    return matrizTransposta

matriz = criaMatriz(3, 3, True)
exibirMatriz(matriz)

transposta = transporMatriz(matriz)
exibirMatriz(transposta)

determinante(matriz)
