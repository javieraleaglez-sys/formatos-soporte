# Formatos de Soporte Técnico

Aplicación web estática con dos formatos controlados:

| Formato | Clave | Página |
|---|---|---|
| Minuta de reunión | FOR-ASC-14-00-03 | `minuta.html` |
| Pruebas a pie de máquina | FOR-DID-01-03-03 | `prueba.html` |

No usa base de datos ni servidor propio. Cada persona trabaja en su navegador:

- **Borrador automático:** se guarda en el dispositivo (IndexedDB). No se sube a ningún lado.
- **Guardar / Abrir (.json):** sirve para pasar un formato a otro equipo o a otra persona.
- **Exportar Word / PDF:** el Word sale en .docx y el PDF con el encabezado del formato en cada hoja (Minuta en A4, Prueba en carta).
- **Elegir carpeta:** en Chrome y Edge de computadora, al exportar o guardar se abre «Guardar como» para elegir carpeta y nombre (recuerda la última carpeta). En el teléfono aparece un panel con cuatro opciones: «Compartir · OneDrive…» (menú de compartir del teléfono, solo para los tipos de archivo que el teléfono permite), «Descargar», «Descargar (otra forma)» y «Abrir archivo». Si una falla, el panel muestra el error y se puede usar otra; lo descargado se sube a OneDrive con la app de OneDrive (+ › Subir).
- **Reabrir un Word para modificarlo:** cada Word exportado lleva dentro los datos del formato. Con «Abrir» se carga de nuevo en la app para editarlo y volver a exportarlo. Los cambios hechos directamente en Word no se pasan a la app.
- **Funciona sin conexión** después de la primera visita, y se puede **instalar** como app en Android, iPhone y PC.

## Publicar en GitHub Pages

1. En GitHub, crea un repositorio nuevo, por ejemplo `formatos-soporte`.
2. Pulsa **Add file › Upload files** y arrastra **todo el contenido** de esta carpeta, incluidas las carpetas `vendor` e `icons`, y el archivo `.nojekyll`. Confirma con **Commit changes**.
3. Ve a **Settings › Pages**. En *Build and deployment*, elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y pulsa **Save**.
4. En uno o dos minutos la app queda en `https://TU-USUARIO.github.io/formatos-soporte/`. Comparte ese enlace con tu equipo.

> **Importante:** con una cuenta gratuita, GitHub Pages solo publica repositorios **públicos**. Cualquiera con el enlace puede abrir la app, pero no ve los datos de nadie, porque cada borrador se queda en el dispositivo de quien lo llena. No subas al repositorio formatos llenos ni archivos .json con información de clientes.

## Actualizar la app

1. Sube los archivos modificados al repositorio.
2. En `sw.js`, cambia `VERSION` (por ejemplo `formatos-v2`) y súbelo también, para que los equipos que ya la tienen instalada descarguen la versión nueva.

## Archivos

```
index.html            Portada para elegir el formato
minuta.html           Minuta FOR-ASC-14-00-03
prueba.html           Pruebas a pie de máquina FOR-DID-01-03-03
manifest.webmanifest  Datos para instalarla como app
sw.js                 Funcionamiento sin conexión
vendor/               Librerías para generar PDF (jsPDF, autotable) y Word (docx, JSZip)
icons/                Íconos de la app
.nojekyll             Indica a GitHub que publique los archivos tal cual
```
