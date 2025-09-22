type PasswordTypes = {
  length?: number;
  hasSymbols?: boolean;
  hasNumbers?: boolean;
  hasUpperLetters?: boolean;
  hasLowerLetters?: boolean;
};

const lowerLetters: string = "abcdefghijklmnopqrstuvwxyz";
const symbols: string = "!@#$%&*()_+";
const upperLetters: string = lowerLetters.toUpperCase();
const numbers: string = "1234567890";

function generatePassword({
  length = 10,
  hasSymbols = true,
  hasNumbers = true,
  hasUpperLetters = true,
  hasLowerLetters = true,
}: PasswordTypes) {
  let passwordOption: string[] = [];
  let password: string = "";

  if (hasSymbols) passwordOption.push(symbols);
  if (hasNumbers) passwordOption.push(numbers);
  if (hasUpperLetters) passwordOption.push(upperLetters);
  if (hasLowerLetters) passwordOption.push(lowerLetters);

  for (let i = 1; i <= length; i++) {
    const passwordOptionItem: number = Math.floor(
      Math.random() * passwordOption.length
    );
    password +=
      passwordOption[passwordOptionItem][
        Math.floor(Math.random() * passwordOption[passwordOptionItem].length)
      ];
  }
  console.log(password);
}

generatePassword({ hasSymbols: false, length: 20 });
