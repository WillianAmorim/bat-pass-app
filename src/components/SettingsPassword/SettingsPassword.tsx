import React, { Dispatch, SetStateAction, useState } from 'react';
import { Switch, View, Text } from 'react-native';

import { styles } from './SettingsPasswordStyles';
import { Picker } from '@react-native-picker/picker';

interface SettingsPasswordProps {
    lengthPassword: number,
    setLengthPassword: Dispatch<SetStateAction<number>>;
    isEnabledeUppercaseLetters: boolean,
    setIsEnabledUppercaseLetters: Dispatch<SetStateAction<boolean>>
    isEnabledLowerCaseLetters: boolean,
    setIsEnabledLowercaseLetters: Dispatch<SetStateAction<boolean>>
    isEnabledCharactersSpecials: boolean,
    setIsEnabledCharactersSpecials: Dispatch<SetStateAction<boolean>>

}

export function SettingsPassword(props: SettingsPasswordProps) {
    return (
        <>
            <View style={styles.containerInputChecked}>
                <View style={styles.inputChecked}>
                    <Switch value={props.isEnabledeUppercaseLetters} onValueChange={props.setIsEnabledUppercaseLetters} />
                    <Text>Letras Maíusculas</Text>
                </View>

                <View style={styles.inputChecked}>
                    <Switch value={props.isEnabledLowerCaseLetters} onValueChange={props.setIsEnabledLowercaseLetters} />
                    <Text>Letras Minúsculas</Text>
                </View>

                <View style={styles.inputChecked}>
                    <Switch value={props.isEnabledCharactersSpecials} onValueChange={props.setIsEnabledCharactersSpecials} />
                    <Text>Caracteres Especiais</Text>
                </View>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={props.lengthPassword}
                    onValueChange={(itemValue) => props.setLengthPassword(itemValue)}
                    style={styles.picker} // aqui só width, height, color
                >
                    <Picker.Item label="6 caracteres" value={6} />
                    <Picker.Item label="8 caracteres" value={8} />
                    <Picker.Item label="12 caracteres" value={12} />
                    <Picker.Item label="16 caracteres" value={16} />
                </Picker>
            </View>
        </>
    );
}   