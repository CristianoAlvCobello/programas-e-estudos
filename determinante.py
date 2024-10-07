from time import sleep

matriz = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]

print('-'*32)
print('CALCULADORA DE DETERMINANTE 3x3')
print('-'*32)
for linha in range(0, 3):
    for coluna in range(0, 3):
        matriz[linha][coluna] = (int(input(f'Digite o valor da posição [{linha+1}, {coluna+1}]: ')))
        
for linha in range(0, 3):
    for coluna in range(0, 2):
        matriz[linha].append(matriz[linha][coluna])
        
#Separa a lista do lado direito(esquerda para direita)
contador = 0  
listaDireito = []
for contador in range(0, 3):
    for determinante in range(0,3):
        listaDireito.append(matriz[determinante][determinante+contador])
 
#Separa a lista do lado esquerdo(direita para esquerda)
contador = 0
listaEsquerda = []
for contador in range(0, 3):
    for determinante in range(2, -1, -1):
        contador += 1
        listaEsquerda.append(matriz[determinante][contador-1])

print('\n\033[1mA matriz gerada\033[m\n')
for linha in range(0, 3):
    for coluna in range(0, 3):
        print(f'[ {matriz[linha][coluna]:^1} ]', end='')
        sleep(0.5)
    print('\n')
    
print('\n\033[1mA matriz gerada na regra de Sarrus\033[m\n')
for linha in range(0, 3):
    for coluna in range(0, 5):
        if coluna == 2:
            print(f'[ {matriz[linha][coluna]:^1} ]\033[31;1m|\033[m', end='')
        else:
            print(f'[ {matriz[linha][coluna]:^1} ]', end='')
        sleep(0.5)
    print('\n')

#Calculo da reta dos positivos  
determinanteDireita = 0
for contador in range(0, 3):
    listaDireito = []
    resultado = 1
    for determinante in range(0,3):
        listaDireito.append(matriz[determinante][determinante+contador])
    for numero in listaDireito:
        resultado *= numero
    determinanteDireita += resultado

#Calculo da reta dos negativo 
determinanteEsquerda = 0
for contador in range(0, 3):
    listaEsquerda = []
    resultado = 1
    for determinante in range(2, -1, -1):
        contador += 1
        listaEsquerda.append(matriz[determinante][contador-1])
        
    for numero in listaEsquerda:
        resultado *= numero
    determinanteEsquerda += resultado

resultado = determinanteDireita-determinanteEsquerda
sleep(0.5)
print(f'\033[1mResultado da determinante:\033[m \033[32;1m{resultado}\033[m')
