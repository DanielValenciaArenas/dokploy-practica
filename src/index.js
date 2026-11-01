const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    mensaje: '¡Aplicación desplegada con Dokploy!',
    institucion: 'Universidad del Quindío',
    programa: 'Ingeniería de Sistemas y Computación',
    curso: 'Administración de Infraestructura de TI',
    plataforma: 'Dokploy Paas',
    fecha: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ estado: 'saludable', uptime: process.uptime() });
});

app.get('/info', (req, res) => {
  res.json({ node_version: process.version, platform: process.platform, arch: process.arch });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
