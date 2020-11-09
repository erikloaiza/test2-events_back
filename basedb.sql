-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2020 a las 16:37:33
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rebus-events`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conferences`
--

CREATE TABLE `conferences` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `date` datetime NOT NULL,
  `quota` float NOT NULL,
  `location` varchar(255) NOT NULL,
  `state` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `conferences`
--

INSERT INTO `conferences` (`id`, `name`, `date`, `quota`, `location`, `state`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Evento4', '2020-11-09 12:45:22', 50, '', 1, '2020-11-09 12:47:25', '2020-11-09 23:16:30', NULL),
(2, 'Evento1', '2020-11-09 12:45:22', 100, '', 1, '2020-11-09 13:23:43', '2020-11-09 13:23:43', NULL),
(3, 'Evento1', '2020-11-09 12:45:22', 100, '', 1, '2020-11-09 13:23:54', '2020-11-09 13:23:54', NULL),
(4, 'Evento4', '2020-11-09 12:45:22', 100, '', 1, '2020-11-09 13:32:28', '2020-11-09 13:32:28', NULL),
(5, 'Evento4', '2020-11-09 12:45:22', 97, 'gg', 1, '2020-11-09 23:54:28', '2020-11-09 23:57:52', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `slug`, `name`, `roleId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'cconf', 'Create Conferences', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'jconf', 'Join Conferences', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'econf', 'Edit Conferences', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `slug`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'spk', 'speaker', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'att', 'attendand', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `roleId`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 'test@gmail.com', 'Vin Laden', 1, '$2b$10$H33ZRSartpKF3XzrKII47e96V/3c9wIl99IKAuYp32jenmm9f0DHC', '2020-11-09 11:27:15', '2020-11-09 11:27:15', NULL),
(3, 'test2@gmail.com', 'Vin Laden', 2, '$2b$10$E1G2Vh7Y/o1HIJSxPBjxMu5Gp2nAYy8tiuQy0I2id6sRUZ5f5Vyxa', '2020-11-09 13:45:46', '2020-11-09 13:45:46', NULL),
(4, 'test3@gmail.com', 'Vin Laden', 1, '$2b$10$zCKVXQGjwzEmreD1KOskJeBDtSHUD41ZY876pb2QXzmMz1oOBrq5y', '2020-11-09 23:13:22', '2020-11-09 23:13:22', NULL),
(5, 'attendand@gmail.com', 'Vin Laden', 2, '$2b$10$8wQig4Wk8eFeKVjvYPOKy.aYSFaEd/1nZPumiWP4ZBovxoJKGjUNy', '2020-11-09 23:54:53', '2020-11-09 23:54:53', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_conferences`
--

CREATE TABLE `user_conferences` (
  `userId` int(11) NOT NULL,
  `conferenceId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_conferences`
--

INSERT INTO `user_conferences` (`userId`, `conferenceId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(3, 1, '2020-11-09 14:11:22', '2020-11-09 14:11:22', NULL),
(4, 5, '2020-11-09 23:54:28', '2020-11-09 23:54:28', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `conferences`
--
ALTER TABLE `conferences`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- Indices de la tabla `user_conferences`
--
ALTER TABLE `user_conferences`
  ADD PRIMARY KEY (`userId`,`conferenceId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `conferences`
--
ALTER TABLE `conferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_conferences`
--
ALTER TABLE `user_conferences`
  ADD CONSTRAINT `user_conferences_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_conferences_ibfk_2` FOREIGN KEY (`conferenceId`) REFERENCES `conferences` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
