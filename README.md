# Formatos de Soporte Técnico — apps para PC y teléfono

Apps que funcionan **sin internet** para llenar, guardar y exportar dos formatos controlados:

| Formato | Clave |
|---|---|
| Minuta de reunión | FOR-ASC-14-00-03 |
| Pruebas a pie de máquina | FOR-DID-01-03-03 |

| App | Archivo | Cómo se guarda |
|---|---|---|
| Windows | `Formatos-Soporte-Portable-1.0.0.exe` (no requiere instalar) o `Formatos-Soporte-Instalador-1.0.0.exe` | Ventana «Guardar como»: eliges carpeta, incluida tu carpeta de OneDrive sincronizada |
| Android | `Formatos-Soporte-Android.apk` | Se guarda en **Documentos › Formatos Soporte** del teléfono; el botón «Enviar» lo manda a OneDrive, correo o WhatsApp (Word, PDF o .json) |

En ambas apps:

- **Borrador automático:** se guarda en el equipo. No se sube a ningún lado.
- **Guardar / Abrir (.json):** sirve para pasar un formato a otro equipo o a otra persona.
- **Exportar Word / PDF:** el Word sale en .docx y el PDF con el encabezado del formato en cada hoja (Minuta en A4, Prueba en carta).
- **Reabrir un Word para modificarlo:** cada Word exportado lleva dentro los datos del formato. Con «Abrir» se carga de nuevo en la app para editarlo y volver a exportarlo. Los cambios hechos directamente en Word no se pasan a la app.

## Para qué sirve este repositorio

GitHub ya no publica la app como página web. El repositorio solo guarda el código y **genera las apps** con GitHub Actions. Por eso puede ser **privado**: Actions funciona igual en repositorios privados.

## Generar las apps

1. Sube al repositorio todo el contenido de esta carpeta, incluidas `app`, `vendor`, `icons`, `fonts` y el archivo `.github/workflows/build-apps.yml`. Si la carpeta `.github` no se sube al arrastrar, créala con **Add file › Create new file**, escribiendo como nombre `.github/workflows/build-apps.yml`, y pega su contenido.
2. Entra a la pestaña **Actions**, elige **Generar apps** y pulsa **Run workflow**. Tarda de 5 a 10 minutos.
3. Al terminar, abre la ejecución y, en **Artifacts**, descarga **Formatos-Soporte-Android** y **Formatos-Soporte-Windows**.
4. Cada vez que subas cambios a la rama main, las apps se vuelven a generar solas.

## Instalar en Android

1. Pasa el archivo `.apk` al teléfono (por OneDrive, correo o cable) y ábrelo.
2. Si Android lo pide, permite **instalar apps de origen desconocido** para la app con la que lo abriste.
3. La app aparece como **Formatos Soporte**. Desde ahí todo funciona sin internet.

## Instalar en Windows

- **Portable:** guarda el `.exe` en cualquier carpeta y ábrelo con doble clic.
- **Instalador:** ejecútalo; crea un acceso directo en el escritorio.
- Como la app no está firmada digitalmente, Windows puede mostrar «Windows protegió su PC». Pulsa **Más información › Ejecutar de todas formas**.

## Borradores

Cada app guarda su propio borrador automático en ese equipo. Para pasar un formato entre la PC y el teléfono, usa el Word exportado (se puede reabrir con «Abrir») o el archivo .json.

## Archivos

```
index.html            Portada para elegir el formato
minuta.html           Minuta FOR-ASC-14-00-03
prueba.html           Pruebas a pie de máquina FOR-DID-01-03-03
vendor/               Librerías para generar PDF (jsPDF, autotable) y Word (docx, JSZip)
icons/                Íconos de la app
fonts/                Tipografías incluidas (no se descargan de internet)
app/                  Proyecto de las apps de Windows (Electron) y Android (Capacitor)
.github/workflows/    Generación automática de las apps en GitHub
manifest.webmanifest  Restos de la versión web; se pueden dejar
sw.js                 Restos de la versión web; se pueden dejar
```
