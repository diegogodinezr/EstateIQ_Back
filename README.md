# EstateIQ_Back

Este es el backend del proyecto EstateIQ, una aplicación para la gestión de propiedades inmobiliarias.

## Descripción

EstateIQ_Back es una API desarrollada con Node.js y Express que permite gestionar propiedades inmobiliarias. La API incluye funcionalidades para listar todas las propiedades, obtener detalles de una propiedad específica y crear nuevas propiedades con la posibilidad de subir múltiples imágenes.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

Sigue estos pasos para clonar y configurar el proyecto:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/diegogodinezr/EstateIQ_Back.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd EstateIQ_Back
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:3000`.

## Endpoints

Todos los endpoints están bajo el prefijo `/api`.

### Obtener todas las propiedades

```http
GET /api/properties
```

#### Respuesta

```json
[
  {
    "_id": "60c72b2f5f1b2c001cf7e7f6",
    "title": "Propiedad 1",
    "price": 100000,
    "location": "Ciudad",
    "bedrooms": 3,
    "bathrooms": 2,
    "squaremeters": 120,
    "description": "Descripción de la propiedad 1",
    "images": ["image1.jpg", "image2.jpg"]
  },
]
```

### Obtener una propiedad específica

```http
GET /api/properties/:id
```

#### Parámetros

- `id`: ID de la propiedad.

#### Respuesta

```json
{
  "_id": "60c72b2f5f1b2c001cf7e7f6",
  "title": "Propiedad 1",
  "price": 100000,
  "location": "Ciudad",
  "bedrooms": 3,
  "bathrooms": 2,
  "squaremeters": 120,
  "description": "Descripción de la propiedad 1",
  "images": ["image1.jpg", "image2.jpg"]
}
```

### Crear una nueva propiedad

```http
POST /api/properties
```

#### Parámetros

- `title` (string): Título de la propiedad (requerido).
- `price` (number): Precio de la propiedad (requerido).
- `location` (string): Ubicación de la propiedad (requerido).
- `bedrooms` (number): Número de habitaciones (requerido).
- `bathrooms` (number): Número de baños (requerido).
- `squaremeters` (number): Metros cuadrados de la propiedad (requerido).
- `description` (string): Descripción de la propiedad (requerido).
- `images` (array de strings): Imágenes de la propiedad (requerido, hasta 5 imágenes).

#### Ejemplo de solicitud

```json
{
  "title": "Nueva Propiedad",
  "price": 150000,
  "location": "Otra Ciudad",
  "bedrooms": 4,
  "bathrooms": 3,
  "squaremeters": 200,
  "description": "Descripción de la nueva propiedad",
  "images": ["image1.jpg", "image2.jpg"]
}
```

#### Respuesta

```json
{
  "message": "Propiedad creada exitosamente",
  "property": {
    "_id": "60c72b2f5f1b2c001cf7e7f7",
    "title": "Nueva Propiedad",
    "price": 150000,
    "location": "Otra Ciudad",
    "bedrooms": 4,
    "bathrooms": 3,
    "squaremeters": 200,
    "description": "Descripción de la nueva propiedad",
    "images": ["image1.jpg", "image2.jpg"]
  }
}
```
