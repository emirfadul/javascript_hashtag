import webbrowser
import urllib.parse
import time
import csv
import datetime
import os
import sys
import threading

class WhatsAppAutomation:
    def __init__(self):
        self.base_url = "https://web.whatsapp.com/send?phone={}&text={}"
    
    def enviar_mensagem(self, numero, mensagem):
        """Envia uma mensagem para um único contato"""
        # Codifica a mensagem para URL
        mensagem_codificada = urllib.parse.quote(mensagem)
        
        # Cria o link do WhatsApp Web com o número e a mensagem
        url = self.base_url.format(numero, mensagem_codificada)
        
        # Abre o WhatsApp Web no navegador padrão
        webbrowser.open(url)
        
        print(f"WhatsApp Web aberto para o número {numero}!")
        print("Pressione Enter no WhatsApp Web para enviar a mensagem.")
        
        # Aguarda 10 segundos para o usuário confirmar o envio
        time.sleep(10)
    
    def enviar_arquivo(self, numero, caminho_arquivo, mensagem=""):
        """Envia um arquivo para um contato do WhatsApp"""
        if not os.path.exists(caminho_arquivo):
            print(f"Erro: O arquivo {caminho_arquivo} não foi encontrado.")
            return False
            
        # Primeiro abre o chat com o contato
        mensagem_codificada = urllib.parse.quote(mensagem)
        url = self.base_url.format(numero, mensagem_codificada)
        webbrowser.open(url)
        
        print(f"WhatsApp Web aberto para o número {numero}!")
        print("1. Aguarde o WhatsApp Web carregar completamente")
        print("2. Clique no ícone de anexo (clipe)")
        print("3. Selecione o arquivo manualmente: " + caminho_arquivo)
        print("4. Clique em enviar")
        
        return True
    
    def enviar_para_multiplos_contatos(self, arquivo_csv, coluna_numero, coluna_mensagem=None, mensagem_padrao=None):
        """Envia mensagens para múltiplos contatos a partir de um arquivo CSV"""
        if not os.path.exists(arquivo_csv):
            print(f"Erro: O arquivo {arquivo_csv} não foi encontrado.")
            return
        
        try:
            with open(arquivo_csv, 'r', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                
                for i, row in enumerate(reader):
                    try:
                        numero = row[coluna_numero].strip()
                        
                        # Verifica se o número está no formato correto
                        if not numero.startswith('+'):
                            numero = '+' + numero
                        
                        # Define a mensagem (personalizada ou padrão)
                        if coluna_mensagem and coluna_mensagem in row:
                            mensagem = row[coluna_mensagem]
                        elif mensagem_padrao:
                            mensagem = mensagem_padrao
                        else:
                            print(f"Erro: Mensagem não definida para o contato {numero}")
                            continue
                        
                        print(f"Enviando mensagem para {numero}...")
                        self.enviar_mensagem(numero, mensagem)
                        
                        # Aguarda entre os envios para evitar bloqueio
                        if i < len(list(reader)) - 1:  # Se não for o último contato
                            print("Aguardando para o próximo envio...")
                            time.sleep(5)
                            
                    except Exception as e:
                        print(f"Erro ao enviar para {numero}: {str(e)}")
                
                print("Envio para múltiplos contatos concluído!")
                
        except Exception as e:
            print(f"Erro ao ler o arquivo CSV: {str(e)}")
    
    def agendar_mensagem(self, numero, mensagem, hora, minuto):
        """Agenda uma mensagem para ser enviada em um horário específico"""
        agora = datetime.datetime.now()
        hora_envio = agora.replace(hour=int(hora), minute=int(minuto), second=0, microsecond=0)
        
        # Se o horário já passou hoje, agenda para amanhã
        if hora_envio < agora:
            hora_envio = hora_envio + datetime.timedelta(days=1)
        
        # Calcula o tempo de espera em segundos
        tempo_espera = (hora_envio - agora).total_seconds()
        
        print(f"Mensagem agendada para {hora_envio.strftime('%H:%M')}.")
        print(f"Aguardando {tempo_espera:.0f} segundos...")
        
        # Aguarda até o horário agendado
        time.sleep(tempo_espera)
        
        # Envia a mensagem
        self.enviar_mensagem(numero, mensagem)
    
    def resposta_automatica(self, numero, respostas_automaticas, tempo_monitoramento=3600):
        """Sistema de resposta automática simplificado"""
        # Prepara a mensagem inicial com instruções
        mensagem_inicial = "🤖 *SISTEMA DE RESPOSTA AUTOMÁTICA* 🤖\n\n"
        mensagem_inicial += "Este é um sistema de resposta automática. Envie uma das palavras-chave abaixo para receber uma resposta:\n\n"
        
        # Adiciona as palavras-chave e respostas à mensagem inicial
        for palavra_chave in respostas_automaticas.keys():
            mensagem_inicial += f"• *{palavra_chave}*\n"
        
        # Envia a mensagem inicial
        self.enviar_mensagem(numero, mensagem_inicial)
        
        # Inicia o monitoramento em uma thread separada
        def monitoramento():
            print(f"\nSistema de resposta automática iniciado para o número {numero}!")
            print(f"Monitorando por {tempo_monitoramento/60:.1f} minutos...")
            print("\nPalavras-chave configuradas:")
            for palavra, resposta in respostas_automaticas.items():
                print(f"- '{palavra}' → '{resposta}'")
            
            print("\nInstruções:")
            print("1. Quando o contato enviar uma mensagem contendo uma palavra-chave, você receberá uma notificação")
            print("2. Abra o WhatsApp Web e verifique a mensagem recebida")
            print("3. Copie e cole a resposta apropriada manualmente")
            print("\nRespostas disponíveis:")
            for palavra_chave, resposta in respostas_automaticas.items():
                print(f"Para '{palavra_chave}': {resposta}")
            
            print("\nO sistema está monitorando. Pressione Ctrl+C para encerrar.")
            
            try:
                # Simula o monitoramento
                inicio = time.time()
                while time.time() - inicio < tempo_monitoramento:
                    time.sleep(5)
            except KeyboardInterrupt:
                print("\nMonitoramento encerrado pelo usuário.")
        
        # Inicia a thread de monitoramento
        thread_monitoramento = threading.Thread(target=monitoramento)
        thread_monitoramento.daemon = True
        thread_monitoramento.start()
        
        # Aguarda o usuário encerrar o programa
        try:
            while thread_monitoramento.is_alive():
                time.sleep(1)
        except KeyboardInterrupt:
            print("\nSistema de resposta automática encerrado.")
            return

def mostrar_menu():
    """Exibe o menu de opções"""
    print("\n===== AUTOMAÇÃO DO WHATSAPP =====")
    print("1. Enviar mensagem para um contato")
    print("2. Enviar mensagens para múltiplos contatos (CSV)")
    print("3. Agendar mensagem")
    print("4. Enviar arquivo/mídia")
    print("5. Sistema de resposta automática")
    print("0. Sair")
    return input("Escolha uma opção: ")

def main():
    whatsapp = WhatsAppAutomation()
    
    while True:
        opcao = mostrar_menu()
        
        if opcao == "1":
            numero = input("Digite o número do destinatário (com código do país, ex: +5511987654321): ")
            if not numero:
                print("Erro: Número não pode estar vazio.")
                continue
            mensagem = input("Digite a mensagem: ")
            whatsapp.enviar_mensagem(numero, mensagem)
            
        elif opcao == "2":
            arquivo_csv = input("Digite o caminho do arquivo CSV: ")
            coluna_numero = input("Digite o nome da coluna que contém os números: ")
            usar_mensagem_padrao = input("Usar mensagem padrão para todos? (s/n): ").lower() == 's'
            
            if usar_mensagem_padrao:
                mensagem_padrao = input("Digite a mensagem padrão: ")
                coluna_mensagem = None
            else:
                coluna_mensagem = input("Digite o nome da coluna que contém as mensagens: ")
                mensagem_padrao = None
                
            whatsapp.enviar_para_multiplos_contatos(arquivo_csv, coluna_numero, coluna_mensagem, mensagem_padrao)
            
        elif opcao == "3":
            numero = input("Digite o número do destinatário (com código do país, ex: +5511987654321): ")
            mensagem = input("Digite a mensagem: ")
            hora = input("Digite a hora (0-23): ")
            minuto = input("Digite o minuto (0-59): ")
            
            try:
                hora = int(hora)
                minuto = int(minuto)
                whatsapp.agendar_mensagem(numero, mensagem, hora, minuto)
            except ValueError:
                print("Erro: Formato de hora ou minuto inválido. Use apenas números.")
        
        elif opcao == "4":
            numero = input("Digite o número do destinatário (com código do país, ex: +5511987654321): ")
            if not numero:
                print("Erro: Número não pode estar vazio.")
                continue
            caminho_arquivo = input("Digite o caminho completo do arquivo: ")
            mensagem = input("Digite uma mensagem opcional: ")
            whatsapp.enviar_arquivo(numero, caminho_arquivo, mensagem)
            
        elif opcao == "5":
            numero = input("Digite o número do destinatário (com código do país, ex: +5511987654321): ")
            if not numero:
                print("Erro: Número não pode estar vazio.")
                continue
                
            print("\nConfigurando respostas automáticas...")
            print("Para cada palavra-chave, defina uma resposta automática.")
            print("Digite 'fim' na palavra-chave para terminar.")
            
            respostas_automaticas = {}
            while True:
                palavra_chave = input("\nPalavra-chave (ou 'fim' para terminar): ")
                if palavra_chave.lower() == 'fim':
                    break
                    
                resposta = input(f"Resposta para '{palavra_chave}': ")
                respostas_automaticas[palavra_chave] = resposta
            
            if not respostas_automaticas:
                print("Erro: Nenhuma resposta automática configurada.")
                continue
                
            tempo_monitoramento = input("Por quanto tempo monitorar (em minutos, padrão 60): ")
            try:
                tempo_monitoramento = int(tempo_monitoramento) * 60 if tempo_monitoramento else 3600
            except ValueError:
                tempo_monitoramento = 3600
                print("Valor inválido, usando 60 minutos como padrão.")
                
            print("\nIniciando sistema de resposta automática...")
            whatsapp.resposta_automatica(numero, respostas_automaticas, tempo_monitoramento)
            
        elif opcao == "0":
            print("Saindo...")
            break
            
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()