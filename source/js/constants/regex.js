const REGEX = {
    companyName: {
        regex: /^[A-ZĆŁŚŹŻ][a-ząćęłńóśźż0-9\._\- ]+((-| )[A-ZĆŁŚŹŻ][a-ząćęłńóśźż0-9\._\- ]+){0,4}( (Sp\. z o\.o\.|S\.A\.|Sp\.J\.|s\.c\.))?$/,
        errorPL: "Użyj wyłącznie wielkich i małych liter, cyfr oraz znaków: '.', '_', '-', ' '."
    },
    zipCode: {
        regex: /^\d{2}(-| )?\d{3}$/,
        errorPL: "Użyj pięciu cyfr rozdzielonych spacją lub myślnikiem (po dwóch pierwszych)."
    },
    cityName: {
        regex: /^[A-ZĆŁŚŹŻ][a-ząćęłńóśźż]+((-| )[A-ZĆŁŚŹŻ][a-ząćęłńóśźż]+)?$/,
        errorPL: "Użyj wielkich i małych liter oraz spacji lub myślnika w nazwach dwuczłonowych."
    },
    address: {
        regex: /^(ul\.|al\.|pl\.|os\.) [A-ZĆŁŚŹŻ][a-ząćęłńóśźż]+((-| )[A-ZĆŁŚŹŻ][a-ząćęłńóśźż]+){0,2}( \d{1,4}(\/\d{1,4})?){1}$/,
        errorPL: "Użyj skrótu przed nazwą ulicy/alei/placu/osiedla oraz wielkich i małych liter w nazwie."
    }
}

export default REGEX
