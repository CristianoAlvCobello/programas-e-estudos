def montaMatriz(tamanho, sortear=False):
    """
    Tamanho: tamanho da matriz quadrada, exemplos: 2 para 2x2, 3 para 3x3...
    No fim ele retorna uma lista onde a linha é outra lista e a 
    colunas os indices. 
    Exemplo:
    
       0  1  2    0  1  2
    [ [1, 2, 3], [4, 5, 6] ]
          0          1

    ou seja, matriz[0][0] == 1
    """
    from random import randint
    matriz = []
    if sortear == False:
        #Solicitando o valor das posições
        for linha in range(0, tamanho):
            colunas = []
            for coluna in range(0, tamanho):
                valor = int(input(f'Digite o valor da posição [{linha + 1}][{coluna + 1}]: '))
                colunas.append(valor)
            matriz.append(colunas)
    else:
        #Fornecendo os valores aleatoriamente
        for linha in range(0, tamanho):
            colunas = []
            for coluna in range(0, tamanho):
                valor = randint(0,50)
                colunas.append(valor)
            matriz.append(colunas)
    return matriz

def determinante(matriz):
    """
    matriz: lista organizada com outras listas onde cada 
    lista interna é a linha da matriz e o indice dentro é a coluna 
    Exemplo: [ [1, 2, 3], [4, 5, 6] ]

    tamanho: é a quantidade de listas que tem dentro da sua lista, ou seja,
    a quantidade de linhas que possui
    Exemplo: [ [1, 2, 3], [4, 5, 6] ], tem 2 linhas

    OBS: O calculo é feito no metodo de sarrus então suporta 2x2 e 3x3 ainda.
    """
    tamanho = len(matriz)

    #Matriz na forma inicial
    print('\n\033[1mA matriz solicitada\033[m\n')
    for linha in range(0, tamanho):
        for coluna in range(0, tamanho):
            print(f'[ {matriz[linha][coluna]:^1} ]', end='')
        print('\n')

    if tamanho == 3:
        #Duplicando colunas para o calculo
        for linha in range(0, 3):
            for coluna in range(0, 2):
                matriz[linha].append(matriz[linha][coluna])
                
        #Calculando a lista do lado direito(esquerdo para o direito)  
        determinanteDireita = 0
        for contador in range(0, 3):
            resultado = 1
            for coluna in range(0, 3):
                resultado *= (matriz[coluna][coluna+contador])
            determinanteDireita += resultado

        #Calculando a lista do lado esquerdo(direito para o esquerdo) 
        determinanteEsquerda = 0
        for contador in range(0, 3):
            resultado = 1
            for coluna in range(2, -1, -1):
                contador += 1
                resultado *= (matriz[coluna][contador-1])
            determinanteEsquerda += resultado
            #Matriz após a regra de Sarrus aplicada      
        print('\n\033[1mA matriz na regra de Sarrus\033[m\n')
        for linha in range(0, 3):
            for coluna in range(0, 5):
                if coluna == tamanho-1:
                    print(f'[ {matriz[linha][coluna]:^1} ]\033[31;1m|\033[m', end='')
                else:
                    print(f'[ {matriz[linha][coluna]:^1} ]', end='')
            print('\n')

    elif tamanho == 2:
        determinanteDireita = matriz[0][0]*matriz[1][1]
        determinanteEsquerda = matriz[0][1]*matriz[1][0]

    resultado = determinanteDireita-determinanteEsquerda
    print(f'\033[1mResultado da determinante:\033[m \033[32;1m{resultado}\033[m')

matriz = montaMatriz(tamanho=3, sortear=True)
determinante(matriz)
