#PROGRAMA QUE CALCULA A DETERMINANTE DE UMA MATRIZ 3x3 NO METODO DE SARRUS

from time import sleep

matriz = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]

for linha in range(0, 3):
    for coluna in range(0, 3):
        matriz[linha][coluna] = (int(input(f'Digite o valor da posição [{linha+1}, {coluna+1}]: ')))

#Duplicação das duas primeiras colunas     
for linha in range(0, 3):
    for coluna in range(0, 2):
        matriz[linha].append(matriz[linha][coluna])
        
#Calculando a lista do lado direito(esquerdo para o direito)  
determinanteDireita = 0
for contador in range(0, 3):
    resultado = 1
    for coluna in range(0,3):
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

resultado = determinanteDireita-determinanteEsquerda
sleep(0.5)
print(f'\033[1mResultado da determinante:\033[m \033[32;1m{resultado}\033[m')
