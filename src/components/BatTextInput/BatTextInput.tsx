import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './index.tsx';

interface BatTextInputProps {
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
            // multiline={true}
        />
  );
}