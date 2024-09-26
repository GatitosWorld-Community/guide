---
order: 700
icon: 
tags:
    - primeros pasos
    - vc
---

# Canales de voz

Los roles de voice son una novedosa implementación para la regulación del acceso a canales de voz, permitiendo implementar la nueva mecánica de restricción de acceso a canales de voz como sanción.

Son dos roles. El primero, [!button variant="info" text="@VC Access" size="xs"]() te otorga el permiso de acceso a los canales de voz, y se logra como un rol autoseleccionable en su correspondiente canal.

[!ref Roles autoseleccionables](../autoroles/)

El segundo rol, [!button variant="info" text="@VC Restrict" size="xs"]() será considerado un método de sanción y privará a cualquier usuario de acceder a los canales de voz mientras lo posea. Es un "rol pegajoso", por lo que aunque el usuario abandonase y reingresase al servidor, lo conservaría. Pero no recomendamos esta práctica. Es altamente probable que en el proceso de reingreso, el rol se vuelva permanente y el usuario no pueda volver a acceder a los canales de voz. En dicho caso, la administración no se hace cargo por la negligencia del usuario.