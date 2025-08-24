export default function generatePass(
    lengthPassword: number, 
    isEnabledeUppercaseLetters: boolean, 
    isEnabledLowerCaseLetters: boolean, 
    isEnabledCharactersSpecials: boolean
) {
    let password: string = '';
    let uppercaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseLetter: string = 'abcdefghijklmnopqrstuvwxyz';
    let charactersSpecials: string = '!@#$%^&*()-_=+[]{};:,.<>?/\\|`~'

    let modelSettingPassword = '';

    if(isEnabledeUppercaseLetters) {
        modelSettingPassword += uppercaseLetters
    }

    if(isEnabledLowerCaseLetters) {
        modelSettingPassword += lowercaseLetter
    }

    if(isEnabledCharactersSpecials) {
        modelSettingPassword += charactersSpecials
    }


    for(let index = 0; index < lengthPassword; index++) {
        password += modelSettingPassword.charAt(Math.floor(Math.random() * modelSettingPassword.length))
    }

    return password
}