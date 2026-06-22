-- =============================================
-- EO App - Script de creacion de base de datos
-- Motor: MySQL 8.x
-- Ejecutar: mysql -u root -p < database/eoapp.sql
-- =============================================

CREATE DATABASE IF NOT EXISTS eoapp
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE eoapp;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  nombres       VARCHAR(100) NOT NULL,
  apellidos     VARCHAR(100),
  correo        VARCHAR(150) UNIQUE NOT NULL,
  cedula        VARCHAR(20),
  fecha_nacimiento DATE,
  password      VARCHAR(255) NOT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de categorias
CREATE TABLE IF NOT EXISTS categorias (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  tipo        ENUM('ingreso', 'gasto') NOT NULL,
  usuario_id  INT NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de ingresos
CREATE TABLE IF NOT EXISTS ingresos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT NOT NULL,
  fecha       DATE NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  categoria   VARCHAR(100),
  monto       DECIMAL(10, 2) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de gastos
CREATE TABLE IF NOT EXISTS gastos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT NOT NULL,
  fecha       DATE NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  categoria   VARCHAR(100),
  monto       DECIMAL(10, 2) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla de metas de ahorro
CREATE TABLE IF NOT EXISTS metas (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT NOT NULL,
  nombre      VARCHAR(150) NOT NULL,
  descripcion TEXT,
  actual      DECIMAL(10, 2) DEFAULT 0.00,
  total       DECIMAL(10, 2) NOT NULL,
  fecha       DATE,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
