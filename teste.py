import os

# Lista global para armazenar os restaurantes cadastrados
restaurantes = ['Madero', 'fogo de chão', 'Outback']

def exibir_nome_do_programa():
    print(''' 
      𝕊𝕒𝕓𝕠𝕣 𝔼𝕩𝕡𝕣𝕖𝕤𝕤
    ''')

def exibir_opcoes():
    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Ativar restaurante')
    print('4. Sair \n')

def finalizar_app():
    # Limpar o console, verificando o sistema operacional
    if os.name == 'nt':  # Se for Windows
        os.system('cls')
    else:  # Se for Linux ou MacOS
        os.system('clear')
    print('Finalizando o programa')

def voltar_ao_menu_principal():
      input('\nDigite uma tecla para voltar ao Menu')
      main()

def opcao_invalida():
    print('Opção inválida!\n')
    voltar_ao_menu_principal()

def exibir_subtitulo(texto):
    os.system('cls')
    print(texto)
    print()


def cadastrar_restaurante():
    exibir_subtitulo('Cadastro de novos restaurantes\n')
    nome_do_restaurante = input('Digite o nome do restaurante que deseja cadastrar: ')
    restaurantes.append(nome_do_restaurante)
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!')
    voltar_ao_menu_principal()

def listar_restaurantes():
    exibir_subtitulo('Listar restaurantes\n')
    for restaurante in restaurantes:
        print(f'. {restaurante}')
    voltar_ao_menu_principal()

    
    
def escolher_opcao():
    opcao_escolhida = int(input("Escolha uma opção: "))

    match opcao_escolhida:
        case 1:
            cadastrar_restaurante()
        case 2:
            listar_restaurantes()
        case 3:
            print('Ativar restaurante')
        case 4:
            finalizar_app()
        case _:
            opcao_invalida()

def main():
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()  # Obtemos a opção escolhida

if __name__ == '__main__':
    main()