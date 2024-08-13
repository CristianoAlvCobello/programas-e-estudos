base = int(input('Digite o tamanho da base: '))
espaco = ' '

for c in range(1, base+1):
    #faz a ponta do triangulo
    if c == 1:
        print(' '*(base-1), '*')

    #faz a parte logo abaixo da ponta
    elif c == 2:
        print(' '*(base-c),'*', '*')

    #faz todo o resto do triangulo, se eu lembrar eu anoto a lógica dnv
    elif c < base and c > 2:
        print(' '*(base-c), '*', espaco, '*')
        espaco = espaco + '  '

    #faz apenas a base 
    elif c == base:
        print(' *'*c)
        