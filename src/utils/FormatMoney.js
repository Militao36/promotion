export function formatForMoney(value, locale = "pt-BR") {
  if (!value) {
    value = 0;
  }
  
  return parseFloat(value).toLocaleString(locale, {
    style: "currency",
    currency: "BRL",
  });
}

export const formatForFloat = (value) => {
  if (Number.isInteger(value)) {
    return value
  }

  if (String(value).length <= 2) {
    return value
  }

  const onlyDigits = String(value)
    .split("")
    .filter((s) => /\d/.test(s))
    .join("")
    .padStart(3, "0");
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);

  return parseFloat(digitsFloat);
}