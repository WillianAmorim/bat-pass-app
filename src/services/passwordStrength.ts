import { Dispatch, SetStateAction } from "react";

export default function passwordStrength(
    isEnabledeUppercaseLetters: boolean,
    isEnabledLowerCaseLetters: boolean,
    isEnabledCharactersSpecials: boolean,
    lengthPassword: number,
    setNotifyStrengthPassword: Dispatch<SetStateAction<string>>
) {

    let score = 0

    if (isEnabledeUppercaseLetters) score++;
    if (isEnabledLowerCaseLetters) score++;
    if (isEnabledCharactersSpecials) score++;

    if (lengthPassword > 6) score++;
    if (lengthPassword > 10) score++;
    if (lengthPassword >= 16) score++;

    if (score <= 2) {
        setNotifyStrengthPassword("Senha fraca");
    } else if (score <= 4) {
        setNotifyStrengthPassword("Senha média");
    } else if (score <= 5) {
        setNotifyStrengthPassword("Senha forte");
    } else {
        setNotifyStrengthPassword("Senha muito forte");
    }
} 