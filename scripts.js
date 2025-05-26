document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".convert-button")
    const currencySelect = document.querySelector(".currency-select") // Adicione um select no HTML

    function convertValue() {
        const inputCurrencyValue = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value")

        const dolarToday = 5.6
        const euroToday = 6.4
        const libraToday = 7.2
        const bitcoinToday = 300000
        
        // Verifica se o valor de entrada é um número válido

        let convertedValue, formatOptions, currencyNameText, currencyImgSrc

        switch (currencySelect.value) {
            case "euro":
                convertedValue = Number(inputCurrencyValue) / euroToday
                formatOptions = { locale: "de-DE", currency: "EUR" }
                currencyNameText = "Euro"
                currencyImgSrc = "./assets/euro.png"
                break
            case "libra":
                convertedValue = Number(inputCurrencyValue) / libraToday
                formatOptions = { locale: "en-GB", currency: "GBP" }
                currencyNameText = "Libra Esterlina"
                currencyImgSrc = "./assets/libra.png"
                break

            case "bitcoin":
                convertedValue = Number(inputCurrencyValue) / bitcoinToday
                formatOptions = { locale: "en-US", currency: "BTC" }
                currencyNameText = "Bitcoin"
                currencyImgSrc = "./assets/bitcoin.png"
                break
            default:
                convertedValue = Number(inputCurrencyValue) / dolarToday
                formatOptions = { locale: "en-US", currency: "USD" }
                currencyNameText = "Dólar americano"
                currencyImgSrc = "./assets/dolar.png"
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(Number(inputCurrencyValue))

        // Atualiza nome e símbolo da moeda convertida
        const currencyName = document.querySelectorAll(".currency")[1];
        const currencyImg = document.querySelectorAll(".currency-box img")[1];
        currencyName.innerText = currencyNameText;
        currencyImg.src = currencyImgSrc;
        currencyValueConverted.innerHTML = new Intl.NumberFormat(formatOptions.locale, {
            style: "currency",
            currency: formatOptions.currency
        }).format(convertedValue);
    }

    convertButton.addEventListener("click", convertValue)
})
