# filtro-alergenos-receitas

## Descrição do Problema
Filtrar uma lista de receitas para remover aquelas que contêm qualquer um dos alérgenos informados, capitalizando o nome e a categoria das receitas que passam no filtro.

## Requisitos
- Receber uma lista de receitas com nome, categoria e lista de ingredientes
- Receber uma lista de alérgenos a evitar
- Filtrar as receitas que não contenham nenhum alérgeno
- Capitalizar a primeira letra do nome e da categoria das receitas filtradas

## Exemplo de Uso
filtroAlergenos([{'nome': 'pizza', 'categoria': 'salgada', 'ingredientes': ['trigo', 'queijo']}, {'nome': 'sopa', 'categoria': 'salgada', 'ingredientes': ['cenoura', 'milho']}], ['trigo', 'soja'])

Saída:
[{"nome": "Pizza", "categoria": "Salgada", "ingredientes": ["trigo", "queijo"]}, {"nome": "Sopa", "categoria": "Salgada", "ingredientes": ["cenoura", "milho"]}]