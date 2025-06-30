# Calculadora de Estimativa de Três Pontos (CTFL Study Tool)

Bem-vindo(a) à Calculadora de Estimativa de Três Pontos! Esta ferramenta simples e intuitiva foi desenvolvida para ajudar a calcular estimativas de projetos e tarefas, utilizando uma técnica comum no mundo da gestão de projetos e testes de software.

## Sobre o Projeto

A ideia para esta calculadora surgiu durante meus estudos para a certificação **CTFL (Certified Tester Foundation Level)** do ISTQB. Um dos tópicos abordados na certificação é a importância de técnicas de estimativa para planejar atividades de teste de forma mais realista. A estimativa de três pontos é uma dessas técnicas valiosas, que nos permite considerar diferentes cenários (otimista, mais provável e pessimista) para chegar a uma estimativa mais robusta.

Este projeto é uma forma prática de aplicar e solidificar esse conhecimento, oferecendo uma ferramenta fácil de usar para quem precisa realizar esse tipo de cálculo no dia a dia ou para quem está, como eu, se aprofundando nos conceitos da área de testes de software.

## Como Usar

A calculadora é muito simples de usar:

1.  **Estimativa Otimista (o):** Insira o valor da estimativa para o cenário mais favorável, onde tudo corre perfeitamente.
2.  **Estimativa Mais Provável (m):** Insira o valor da estimativa para o cenário mais realista, com as condições normais.
3.  **Estimativa Pessimista (p):** Insira o valor da estimativa para o cenário mais desfavorável, considerando os possíveis obstáculos.
4.  **Quantidade de Casos de Teste (Opcional):** Se você souber a quantidade de itens (como casos de teste, tarefas, etc.) que precisam ser estimados, pode informar aqui. A calculadora multiplicará a estimativa final por essa quantidade, fornecendo uma estimativa total. Se este campo for deixado em branco, a estimativa será calculada para uma única ocorrência.

Após preencher os campos, clique em "Calcular" e você verá os seguintes resultados:

* **Estimativa Final (E):** O valor médio ponderado das suas três estimativas, que é a estimativa mais provável para a tarefa ou projeto.
* **Desvio Padrão (SD):** Uma medida da incerteza da sua estimativa. Quanto maior o desvio padrão, maior a variação esperada em relação à estimativa final.
* **Estimativa Total (E * Casos de Teste):** Se você informou a quantidade de casos de teste, este será o valor total da estimativa para todos os itens, caso contrário o valor padrão é 1.
* **Desvio Padrão Total:** Faz um cálculo usando o SD multiplicado pela raiz quadrada da quantidade de casos de teste.

## Por que usar esta ferramenta?

* **Simplicidade:** Interface limpa e direta ao ponto.
* **Praticidade:** Realize cálculos rápidos sem a necessidade de planilhas complexas.
* **Apoio aos Estudos:** Ferramenta útil para quem está estudando sobre técnicas de estimativa em gerenciamento de projetos e testes.

Espero que esta calculadora seja útil para você!
