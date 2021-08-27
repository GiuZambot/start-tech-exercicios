export const isPangram = (frase) => {
    if (!frase) return false;
    const fraseLowerCase = frase.toLowerCase();
    const fraseSet = new Set(fraseLowerCase.replace(/[^a-z]/g, "").split(''));
    return fraseSet.size === 26;
};