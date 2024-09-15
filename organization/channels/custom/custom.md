---
order: 
icon: 
tags:
    - primeros pasos
    - vc
visibility: hidden
---

<style>
.disabled {
    opacity: .5
}

.disabled button:hover {
    cursor: not-allowed
}
</style>

# Voz personalizados

Los canales personalizados son todos de VC (Voice Chat o Chat de Voz). Es decir, será necesario el rol de acceso a canales de voz para poder utilizarlos.

Se caracterizan por ser personalizables por el usuario reconocido como el creador de éstos, siendo completamente editables, pudiendo estabecer reglas de visibilidad, acceso, y mucho más. Para permitirnos acceder a todas estas funciones, hacemos uso del bot Catto Coffee, afiliado al servidor.

<br>

## Mecánicas

Estos canales cuentan con sus propias mecánicas y reglas en cuanto a aspectos técnicos de trata. No siguen el funcionamiento habitual de los canales de voz de Discord, y por ello también cuentan con su propio reglamento en las [reglas del servidor](../../../rules/).

[!ref Reglas especiales](../../../rules/#v3--canales-de-voz-personalizados)

<br><br>

### Creación

Para crear un canal personalizado puedes unirte a canal de voz designado a esta tarea.

:::disabled
[!button text="Unirme" variant="ghost"]() *Función no disponible actualmente desde la guía.*
:::

Al acceder a este canal, Catto Coffee detectará tu presencia, creará un canal y te moverá a él. El bot recordará el usuario que creó dicho canal y responderá a los comandos de éste.

<br><br>

### Modificación

La modificación de los canales de voz personalizada se realizará siempre por medio de los comandos `/voice` del bot.

Aquí te dejamos una lista de comandos recomendados para empezar a usar los canales de voz.
- `/voice name`: Modifica el nombre del canal.<br>RECUERDA: Usa nombres apropiados. [Regla V.3.1](../../../rules/#v3--canales-de-voz-personalizados)
- `/voice limit`: Establece el máximo de usuarios en el canal.<br>RECUERDA: Máximo 15 usuarios. [Regla V.3.7](../../../rules/#v3--canales-de-voz-personalizados)
- `/voice lock`: Haz que el canal sea inaccesible para usuarios sin permisos.
- `/voice unlock`: Haz que el canal sea otra vez accesible.

<br><br>

### Eliminación
Los canales se eliminarán automáticamente cuando todos los integrantes lo hayan abandonado.