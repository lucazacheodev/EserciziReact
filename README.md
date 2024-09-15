
# React & React Native Projects

Questo repository contiene progetti sviluppati con **React** e **React Native**. Di seguito vengono forniti i passaggi per creare un nuovo progetto sia in React che in React Native.

## Creare un nuovo progetto React con Vite

1. Aprire un terminale nella directory in cui si desidera creare il progetto.
2. Eseguire il comando:

   ```bash
   npm create vite@latest
   ```

3. Seguire i passaggi:
   - Digitare il nome della webapp.
   - Selezionare `React` come framework.
   - Selezionare `TypeScript` come linguaggio.

4. Installare le dipendenze del progetto con uno dei seguenti comandi (entrambi equivalenti):

   ```bash
   npm install
   ```

   oppure

   ```bash
   npm i
   ```

5. Eseguire la webapp:

   ```bash
   npm run dev
   ```

## Creare un nuovo progetto React Native

1. Scaricare e installare **Android Studio** da [qui](https://developer.android.com/studio). Durante l'installazione, assicurarsi di includere il **Android SDK**, **Android SDK Platform** e l'**Android Virtual Device** (AVD).

2. Configurare le variabili d'ambiente richieste:

   - Aggiungere `ANDROID_HOME` puntando alla directory `sdk` di Android Studio.
   - Aggiungere `JAVA_HOME` puntando alla directory di installazione di [JDK](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html). (La documentazione di React Native consiglia JDK 17)

   Per Windows, aggiungere i seguenti percorsi nelle variabili d'ambiente del sistema:

   - `%ANDROID_HOME%\platform-tools\`
   - `%JAVA_HOME%\bin\`

3. Installare **Node.js**, se non già installato, da [qui](https://nodejs.org/). (La documentazione di React Native consiglia Node 18.18 o più recente)


4. Per qualunque problema consultare la [documentazione ufficiale](https://reactnative.dev/docs/set-up-your-environment)

5. Creare un nuovo progetto React Native:

   ```bash
   npx react-native init NomeProgetto
   ```

6. Spostarsi nella directory del progetto e avviare l'emulatore Android:

   ```bash
   cd android
   ./gradlew clean
   cd.. 
   npx react-native run-android
   ```
   
Ora sei pronto per sviluppare la tua applicazione in React Native!
