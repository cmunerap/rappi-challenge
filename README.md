# RappiChallenge Cristian Múnera

Solución para la prueba de habilidades de front end de Rappi

## Como se hizo?

Este proyecto fue creado en Angular 7.

La aplicación sigue los patrones dados para proyectos de Angular según [Angular Style Guide](https://angular.io/guide/styleguide)

Es una aplicación totalmente reactiva utilizando RxJS manteniendo la práctica *single source of truth*. No se usa **ngrx** pero tengo el conocimiento y la experiencia en el uso del store de **ngrx** para implementarlo de la misma manera. Simplemente fue una decisión de gusto personal pues el patrón del store puede emularse con RxJS, pero no se maneja el concepto de *ACTIONS*.

No se utiliza ningún tipo de framework CSS para los estilos o para el manejo de grid system. Solo se utiliza *CSS Grid*  y un poco de *flexbox*.

La aplicación tiene varios temas para cambiar la apariencia. Para cambiar el tema, simplemente descomentar el color deseado en el archivo **colors.scss**.



## Instalación

  1. Instalar **@angular/cli** globalmente:
  ```
  npm install -g @angular/cli
  ```

  2. Clonar el proyecto en algún directorio:
  ```
  git clone https://github.com/cmunerap/rappi-challenge.git
  cd rappi-challenge
  ```

  3. Instalar dependencias del proyecto:
  ```
  npm install
  ```

  4. Ejecutar el proyecto:
  ```
  npm run start
  ```

  5. [Opcional] Ejecutar pruebas unitarias
  ```
  npm run test
  ```

  6. [Opcional] Ejecutar pruebas e2e
  ```
  npm run e2e
  ```

