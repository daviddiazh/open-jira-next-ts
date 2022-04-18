# Next.js App Entries Task
Para correr localmente este proyecto, se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa __detached__

* La URL de MongoDB Local: 
```
    mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenaro Resetear la base de datos con datos de pruebas
Llamar el endPoint: 
```
    http://localhost:3000/api/seed
```