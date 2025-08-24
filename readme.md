# BatPassword - Gerador de Senhas Seguro

## Descrição

BatPassword é um aplicativo mobile desenvolvido em **React Native** que permite gerar senhas seguras de acordo com critérios selecionados pelo usuário. Ele permite configurar o comprimento da senha, o uso de letras maiúsculas, minúsculas e caracteres especiais, além de indicar a força da senha gerada.

## Funcionalidades

* Gerar senhas personalizadas de diferentes comprimentos (6, 8, 12, 16 caracteres).
* Seleção de tipos de caracteres:

  * Letras maiúsculas
  * Letras minúsculas
  * Caracteres especiais
* Avaliação da força da senha (Fraca, Média, Forte, Muito Forte) com feedback visual.
* Copiar senha gerada para a área de transferência.
* Exibição dinâmica da força da senha (com cores) apenas quando há critérios selecionados.

## Tecnologias

* **React Native**
* **TypeScript**
* **Expo** (Clipboard)
* **StyleSheet** (para estilização)

## Estrutura do Projeto

```
src/
├── components/
│   ├── BatButton/
│   │   └── index.tsx
│   │   └── BatButtonStyles.tsx
│   ├── BatTextInput/
│   │   └── index.tsx
│   │   └── BatTextInputStyles.tsx
│   ├── BatLogo/
│   │   └── index.tsx
│   │   └── BatLogoStyles.tsx
│   └── SettingsPassword/
│       └── index.tsx
│       └── BatLogoStyles.tsx
├── screens/
│   └── Home/
│       └── index.tsx
│       └── Style.tsx
├── services/
│   ├── passwordService.ts
│   └── passwordStrength.ts
└── App.tsx
```

## Como Funciona

1. O usuário seleciona os critérios da senha (comprimento, tipos de caracteres).
2. Ao clicar no botão **GENERATE**, o app gera uma senha aleatória de acordo com os critérios selecionados.
3. O app avalia a força da senha e mostra a classificação com cores:

   * **Fraca** → Vermelho
   * **Média** → Laranja
   * **Forte** → Verde
   * **Muito Forte** → Azul
4. O usuário pode copiar a senha gerada para a área de transferência usando o botão **COPY**.

## Exemplo de Uso

```tsx
<SettingsPassword
  lengthPassword={lengthPassword}
  setLengthPassword={setLengthPassword}
  isEnabledeUppercaseLetters={isEnabledeUppercaseLetters}
  setIsEnabledUppercaseLetters={setIsEnabledUppercaseLetters}
  isEnabledLowerCaseLetters={isEnabledLowerCaseLetters}
  setIsEnabledLowercaseLetters={setIsEnabledLowercaseLetters}
  isEnabledCharactersSpecials={isEnabledCharactersSpecials}
  setIsEnabledCharactersSpecials={setIsEnabledCharactersSpecials}
/>

<BatTextInput pass={pass} />

<Pressable onPress={handleGenerateButton}>
  <Text>GENERATE</Text>
</Pressable>

<Pressable onPress={handleCopyButton}>
  <Text>COPY</Text>
</Pressable>

{notifyStrengthPassword && (
  <Text style={{ ...styles.notify, backgroundColor: strengthColors[notifyStrengthPassword] }}>
    {notifyStrengthPassword}
  </Text>
)}
```

## Como Rodar

1. Clone o repositório:

```bash
git clone https://github.com/WillianAmorim/bat-pass-app.git
```

2. Instale as dependências:

```bash
cd BatPassword
npm install
# ou
yarn install
```

3. Rode o app no Expo:

```bash
npm start
# ou
yarn start
```

4. Abra no **emulador** ou no **celular** via QR Code do Expo.

## Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

3. Faça commit das alterações
4. Envie para o repositório remoto
5. Abra um Pull Request

## Licença

MIT License © Willian Silva Amorim
