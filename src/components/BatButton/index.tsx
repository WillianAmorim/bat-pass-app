import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { SettingsPassword } from '../SettingsPassword/SettingsPassword';
import passwordStrength from '../../services/passwordStrength';

export function BatButton() {

    const [pass, setPass] = useState('')
    const [lengthPassword, setLengthPassword] = useState<number>(6);
    const [isEnabledeUppercaseLetters, setIsEnabledUppercaseLetters] = useState<boolean>(false)
    const [isEnabledLowerCaseLetters, setIsEnabledLowercaseLetters] = useState<boolean>(false)
    const [isEnabledCharactersSpecials, setIsEnabledCharactersSpecials] = useState<boolean>(false)
    const [notifyStrengthPassword, setNotifyStrengthPassword] = useState<string>('Selecione uma opção')


    function verifyPasswordStrength() {
        if (lengthPassword) {
            passwordStrength(isEnabledeUppercaseLetters, isEnabledLowerCaseLetters, isEnabledCharactersSpecials, lengthPassword, setNotifyStrengthPassword)
        }
    }

    function handleGenerateButton() {
        if (lengthPassword) {
            let generateToken = generatePass(lengthPassword, isEnabledeUppercaseLetters, isEnabledLowerCaseLetters, isEnabledCharactersSpecials)
            setPass(generateToken)
        }

        verifyPasswordStrength()
    }



    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
            <SettingsPassword
                lengthPassword={lengthPassword!}
                setLengthPassword={setLengthPassword}
                isEnabledeUppercaseLetters={isEnabledeUppercaseLetters!}
                setIsEnabledUppercaseLetters={setIsEnabledUppercaseLetters}
                isEnabledLowerCaseLetters={isEnabledLowerCaseLetters!}
                setIsEnabledLowercaseLetters={setIsEnabledLowercaseLetters}
                isEnabledCharactersSpecials={isEnabledCharactersSpecials!}
                setIsEnabledCharactersSpecials={setIsEnabledCharactersSpecials}

            />
            <BatTextInput
                pass={pass}
            />

            <Pressable
                style={styles.button}
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}>⚡ COPY</Text>
            </Pressable>

            <Text
                style={{
                    ...styles.notify,
                    backgroundColor:
                        notifyStrengthPassword === "Senha Fraca"
                            ? "red"
                            : notifyStrengthPassword === "Senha média"
                                ? "orange"
                                : notifyStrengthPassword === "Senha forte"
                                    ? "green"
                                    : notifyStrengthPassword === "Senha muito forte"
                                        ? "blue"
                                        : "gray", // cor padrão se não bater em nenhum

                }}
            >
                {notifyStrengthPassword}
            </Text >
        </>
    );
}