export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency', // FOrmate como moeda
    currency: 'BRL', // Coloca o R$ na frente do valor
})