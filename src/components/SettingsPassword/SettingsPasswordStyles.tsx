import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        overflow: "hidden", // pra borda englobar o Picker
        marginVertical: 10,
        width: '100%',
        height: 50
    },

    picker: {
        height: 50,
        width: 200,
        color: "white", // cor do texto
    },

    containerInputChecked: {
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 5
    },

    inputChecked: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});