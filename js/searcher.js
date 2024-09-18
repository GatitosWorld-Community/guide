// Array de páginas a buscar (URLs absolutas)
const pages = [
    { url: '/index.html', title: 'Inicio' },
    { url: '/rules/index.html', title: 'Reglas del servidor' },
    { url: 'mod/index.html', title: 'Moderación del servidor' }
];

// Función para resaltar coincidencias
const highlightMatch = (text, query) => text.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);

// Sinónimos o términos relacionados para sugerencias
const relatedTerms = {
    'normas': ['reglas', 'directrices'],
    'inicio': ['home', 'principal', 'página principal']
};

// Función para obtener sugerencias de búsqueda relacionadas
const getRelatedSuggestions = (query) => {
    const lowerQuery = query.toLowerCase();
    return relatedTerms[lowerQuery] || [];
};

// Función de búsqueda en páginas
const searchPages = (query) => {
    return new Promise(resolve => {
        const results = [];
        const regex = new RegExp(query, 'gi');

        pages.forEach(page => {

            // Buscar en el título de la página
            if (regex.test(page.title)) {
                results.push({
                    page: { url: page.url, title: page.title },
                    match: {
                        percentage: 100,
                        type: 'title',
                        result: highlightMatch(page.title, query)
                    }
                });
            }

            fetch(page.url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');

                    // Filtrar texto visible y excluir botones, inputs, selects
                    const textNodes = Array.from(doc.body.querySelectorAll('*'))
                        .filter(el => el.closest('.page') && !['BUTTON', 'INPUT', 'SELECT'].includes(el.tagName));

                    textNodes.forEach(node => {
                        const tomap = node.innerText.replace('\n', ' ').trim();
                        const matches = tomap.match(regex);
                        if (matches) {
                            matches.forEach(match => {
                                const start = tomap.indexOf(match);
                                const snippet = tomap.substring(Math.max(start - 30, 0), Math.min(start + 70, tomap.length));
                                const matchLength = match.length;
                                const snippetLength = snippet.length;
                                const percentage = (matchLength / snippetLength) * 100;
                                results.push({
                                    page: { url: page.url, title: page.title },
                                    match: {
                                        percentage: Math.round(percentage), // Redondear al entero más cercano
                                        type: 'text',
                                        result: highlightMatch(snippet, query)
                                    }
                                });
                            });
                        }
                    })
                }).catch(() => {
                    console.error("Imposible buscar en la página " + page.title)
                });
        });

        // Si hay menos de 5 coincidencias, mostrar sugerencias
        if (results.length < 5) {
            const related = getRelatedSuggestions(query);
            related.forEach(term => {
                results.push({
                    page: { url: "", title: "" },
                    match: {
                        percentage: 0, // No hay coincidencia exacta, solo sugerencias
                        type: 'suggestion',
                        result: `Quizás quisiste buscar: <em>${term}</em>`
                    }
                });
            });
        }

        resolve(results.sort((a, b) => b.match.percentage - a.match.percentage))
    })
};