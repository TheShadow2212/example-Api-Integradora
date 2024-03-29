# Nombre del Proyecto

Este es un proyecto desarrollado con Angular y Laravel.

## Instalación

Para instalar y ejecutar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.

2. Navega hasta el directorio del proyecto.

3. Instala las dependencias del proyecto con el siguiente comando:

    ```bash
    npm install
    ```

4. Abre el archivo `environment.ts` y cambia las variables `API_BASE_URL` y `Api_Base` a la IP de tu máquina. El archivo se verá algo así:

    ```typescript
    export const environment = {
      production: false,

      // Cambiar por la IP de la máquina donde se encuentre el backend
      API_BASE_URL: 'http://<tu-ip>:8000/api/auth',
      Api_Base: 'http://<tu-ip>:8000/api/'
    };
    ```

    Reemplaza `<tu-ip>` con la IP de tu máquina.

5. Inicia el servidor de desarrollo de Laravel con el siguiente comando, reemplazando `192.168.100.84` con la IP de tu máquina:

    ```bash
    php artisan serve --host=<tu-ip>
    ```

Ahora deberías poder acceder a la aplicación en tu navegador en `http://<tu-ip>:8000`.