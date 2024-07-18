export function inputMask(numbers) {
  if (!numbers) {
    return undefined;
  }

  const document = numbers.replace(/\D/g, '');
  switch (true) {
    // CNPJ
    case document.length === 14:
      return document
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d+?$)/, '$1-$2');
    // CPF
    case document.length === 11:
      return document
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    default:
      return numbers;
  }
};

