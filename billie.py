from playwright.sync_api import sync_playwright
import time
from datetime import datetime

def verificar_e_anotar_outro_elemento(url, frase_alvo, seletor_alvo, seletor_secundario, log_file):
    try:
        # Inicia o Playwright e abre o navegador
        with sync_playwright() as p:
            navegador = p.chromium.launch(headless=True)
            pagina = navegador.new_page()
            pagina.goto(url)
            time.sleep(5)  # Aguarda o carregamento da página e do JavaScript
            
            # Verifica o seletor principal
            elemento_alvo = pagina.query_selector(seletor_alvo)
            
            if elemento_alvo:
                texto_alvo = elemento_alvo.inner_text()  # Obtém o texto do elemento principal
                
                if frase_alvo in texto_alvo:
                    # Encontra o texto no seletor secundário
                    elemento_secundario = pagina.query_selector(seletor_secundario)
                    texto_secundario = elemento_secundario.inner_text() if elemento_secundario else "Não encontrado"
                    
                    horario = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    print(f"'{frase_alvo}' - {texto_secundario} - {horario}.\n")
                    
                    # Registra no arquivo de log
                    with open(log_file, "a") as arquivo:
                        arquivo.write(f"'{frase_alvo}' - {texto_secundario} - {horario}.\n")
                else:
                    print(f"A frase '{frase_alvo}' NÃO foi encontrada no seletor '{seletor_alvo}' do site {url}.")
            else:
                print(f"Elemento com seletor '{seletor_alvo}' não encontrado no site {url}.")
            
            navegador.close()
    except Exception as e:
        print(f"Erro ao acessar o site ou verificar a frase: {e}")

def monitorar_site(url, frase_alvo, seletor_alvo, seletor_secundario, intervalo, log_file):
    while True:
        verificar_e_anotar_outro_elemento(url, frase_alvo, seletor_alvo, seletor_secundario, log_file)
        print(f"Esperando {intervalo} segundos antes da próxima verificação...\n")
        time.sleep(intervalo)

# Exemplo de uso
url = "https://www.radio-ao-vivo.com/mix-fm-sao-paulo"
frase_alvo = "Billie Eilish"  # A frase que será monitorada
seletor_alvo = "span.artist-name"  # Seletor onde a frase será procurada
seletor_secundario = "span.song-name"  # Seletor cujo texto será registrado se a frase for encontrada
intervalo = 120  # Intervalo de 2 minutos
log_file = "billie-na-radio.txt"  # Nome do arquivo de log

monitorar_site(url, frase_alvo, seletor_alvo, seletor_secundario, intervalo, log_file)
