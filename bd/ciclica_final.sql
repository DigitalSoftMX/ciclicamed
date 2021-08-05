-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-08-2021 a las 22:20:00
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ciclica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `branches`
--

CREATE TABLE `branches` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branchstatus_id` smallint(5) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `branch_statuses`
--

CREATE TABLE `branch_statuses` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `branch_statuses`
--

INSERT INTO `branch_statuses` (`id`, `name`) VALUES
(1, 'Abierto'),
(2, 'Cerrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkups`
--

CREATE TABLE `checkups` (
  `id` int(10) UNSIGNED NOT NULL,
  `checkupcategory_id` smallint(5) UNSIGNED NOT NULL,
  `patient_id` mediumint(8) UNSIGNED NOT NULL,
  `checkupstatus_id` tinyint(3) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkup_categories`
--

CREATE TABLE `checkup_categories` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `checkup_categories`
--

INSERT INTO `checkup_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Mature', '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(2, 'Mujer cíclica', '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(3, 'Teen', '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(4, 'Mom', '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(5, 'Diagnóstico prenatal', '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(6, 'Convenio institucional', '2021-08-06 01:18:06', '2021-08-06 01:18:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkup_statuses`
--

CREATE TABLE `checkup_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `checkup_statuses`
--

INSERT INTO `checkup_statuses` (`id`, `name`) VALUES
(1, 'En estudios'),
(2, 'Estudios completados'),
(3, 'En consultas'),
(4, 'Completado'),
(5, 'Cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cellphone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employeestatus_id` tinyint(3) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `gender`, `birthday`, `address`, `phone`, `cellphone`, `email`, `photo`, `employeestatus_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Laboratorio', '', 0, '2001-01-12', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(2, 'Imagenología', '', 0, '1962-11-19', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(3, 'Marlin', 'Wuckert', 0, '1964-07-01', '199 Hillary Groves\nLeannberg, WI 09249', '6801297408', '4733756955', 'johnpaul.bayer@example.net', 'j8clhOWBnuceQxYzjot022frR', 1, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee_days_off`
--

CREATE TABLE `employee_days_off` (
  `employee_id` mediumint(8) UNSIGNED NOT NULL,
  `day_off` date NOT NULL,
  `start_time` time DEFAULT NULL,
  `finish_time` time DEFAULT NULL,
  `branch_id` smallint(5) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee_licenses`
--

CREATE TABLE `employee_licenses` (
  `employee_id` mediumint(8) UNSIGNED NOT NULL,
  `degree_title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `license_number` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `school_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `medicalspecialty_id` smallint(5) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee_schedules`
--

CREATE TABLE `employee_schedules` (
  `employee_id` mediumint(8) UNSIGNED NOT NULL,
  `start_day` tinyint(4) NOT NULL,
  `start_time` time NOT NULL,
  `finish_day` tinyint(4) NOT NULL,
  `finish_time` time NOT NULL,
  `branch_id` smallint(5) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee_statuses`
--

CREATE TABLE `employee_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `employee_statuses`
--

INSERT INTO `employee_statuses` (`id`, `name`, `color`) VALUES
(1, 'Empleado', '#4CAF50'),
(2, 'Cesado', '#F44336');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoice_data`
--

CREATE TABLE `invoice_data` (
  `patient_id` mediumint(8) UNSIGNED NOT NULL,
  `business_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rfc` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cfdi` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_attachments`
--

CREATE TABLE `medical_attachments` (
  `patient_id` mediumint(8) UNSIGNED NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`)),
  `medicalspecialty_id` smallint(5) UNSIGNED NOT NULL,
  `updated_by` mediumint(8) UNSIGNED NOT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_attachment_follow_ups`
--

CREATE TABLE `medical_attachment_follow_ups` (
  `medicalconsult_id` int(10) UNSIGNED NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`)),
  `medicalspecialty_id` smallint(5) UNSIGNED NOT NULL,
  `updated_by` smallint(5) UNSIGNED NOT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_consults`
--

CREATE TABLE `medical_consults` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` mediumint(8) UNSIGNED NOT NULL,
  `doctor_id` mediumint(8) UNSIGNED DEFAULT NULL,
  `created_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `medicalconsultcategory_id` tinyint(3) UNSIGNED NOT NULL,
  `updated_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `consult_reason` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `consult_schedule_start` datetime DEFAULT NULL,
  `consult_schedule_finish` datetime DEFAULT NULL,
  `consult_start_at` datetime DEFAULT NULL,
  `consult_finish_at` datetime DEFAULT NULL,
  `nurse_start_at` datetime DEFAULT NULL,
  `nurse_finish_at` datetime DEFAULT NULL,
  `assistant_start_at` datetime DEFAULT NULL,
  `assistant_finish_at` datetime DEFAULT NULL,
  `branch_id` smallint(5) UNSIGNED NOT NULL,
  `medicalconsultstatus_id` tinyint(3) UNSIGNED NOT NULL,
  `medicalspecialty_id` smallint(5) UNSIGNED NOT NULL,
  `checkup_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_consult_categories`
--

CREATE TABLE `medical_consult_categories` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medical_consult_categories`
--

INSERT INTO `medical_consult_categories` (`id`, `name`) VALUES
(1, 'Primera cita'),
(2, 'Cita médica'),
(3, 'Estudio de imagenología'),
(4, 'Estudio de laboratorio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_consult_statuses`
--

CREATE TABLE `medical_consult_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medical_consult_statuses`
--

INSERT INTO `medical_consult_statuses` (`id`, `name`, `color`) VALUES
(1, 'Agendado', '#5E35B1'),
(2, 'Confirmado', '#43A047'),
(3, 'Ausente', '#F4511E'),
(4, 'En consulta', '#1E88E5'),
(5, 'Finalizado', '#546E7A'),
(6, 'Cancelado', '#212121');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_histories`
--

CREATE TABLE `medical_histories` (
  `id` int(10) UNSIGNED NOT NULL,
  `patient_id` mediumint(8) UNSIGNED NOT NULL,
  `medicalconsult_id` int(10) UNSIGNED DEFAULT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`)),
  `updated_by` smallint(5) UNSIGNED NOT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_prescriptions`
--

CREATE TABLE `medical_prescriptions` (
  `medicalconsult_id` int(10) UNSIGNED NOT NULL,
  `medicament_id` mediumint(8) UNSIGNED NOT NULL,
  `administration_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_specialties`
--

CREATE TABLE `medical_specialties` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medical_specialties`
--

INSERT INTO `medical_specialties` (`id`, `name`) VALUES
(1, 'Uroginecología'),
(2, 'Climaterío y salud ósea'),
(3, 'Materno fetal'),
(4, 'Nutrición perinatal'),
(5, 'Nutrición general'),
(6, 'Genética perinatal'),
(7, 'Biología de la reproduccion'),
(8, 'Cirugía endoscópica'),
(9, 'Oncología'),
(10, 'Colposcopía'),
(11, 'Laboratorio'),
(12, 'Imagenologia'),
(13, 'Ginecología');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_tests`
--

CREATE TABLE `medical_tests` (
  `id` int(10) UNSIGNED NOT NULL,
  `test_code` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_in` int(10) UNSIGNED DEFAULT NULL,
  `scheduled_in` int(10) UNSIGNED DEFAULT NULL,
  `finished_at` datetime DEFAULT NULL,
  `medicalteststatus_id` tinyint(3) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_test_orders`
--

CREATE TABLE `medical_test_orders` (
  `medicaltest_id` int(10) UNSIGNED NOT NULL,
  `product_id` mediumint(8) UNSIGNED NOT NULL,
  `updated_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_test_order_annotations`
--

CREATE TABLE `medical_test_order_annotations` (
  `product_id` mediumint(8) UNSIGNED NOT NULL,
  `annotation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_test_results`
--

CREATE TABLE `medical_test_results` (
  `medicaltest_id` int(10) UNSIGNED NOT NULL,
  `created_by` mediumint(8) UNSIGNED NOT NULL,
  `results` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`results`)),
  `notes` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_test_samples`
--

CREATE TABLE `medical_test_samples` (
  `medicaltest_id` int(10) UNSIGNED NOT NULL,
  `fum` date NOT NULL,
  `collected_by` mediumint(8) UNSIGNED NOT NULL,
  `finish_at` datetime DEFAULT NULL,
  `sent_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `sent_at` datetime DEFAULT NULL,
  `updated_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `update_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_test_statuses`
--

CREATE TABLE `medical_test_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medical_test_statuses`
--

INSERT INTO `medical_test_statuses` (`id`, `name`, `color`) VALUES
(1, 'Estudio creado', '#5E35B1'),
(2, 'Muestras recogidas', '#1E88E5'),
(3, 'Analizando muestras', '#546E7A'),
(4, 'Resultados creados', '#43A047'),
(5, 'Estudio cancelado', '#212121');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicaments`
--

CREATE TABLE `medicaments` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `generic_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `presentation` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0000_00_00_000000_create_websockets_statistics_entries_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_04_07_203037_create_permission_tables', 1),
(5, '2021_04_07_204304_create_user_statuses_table', 1),
(6, '2021_04_07_210781_create_user_categories_table', 1),
(7, '2021_04_07_213711_create_users_table', 1),
(8, '2021_04_07_233321_create_preregistrations_table', 1),
(9, '2021_04_07_234002_create_patients_table', 1),
(10, '2021_04_08_143341_create_invoice_data_table', 1),
(11, '2021_04_08_162546_create_employee_statuses_table', 1),
(12, '2021_04_08_162909_create_employees_table', 1),
(13, '2021_04_08_183431_create_medical_specialties_table', 1),
(14, '2021_04_08_184350_checkup_statuses', 1),
(15, '2021_04_08_184353_checkup_categories', 1),
(16, '2021_04_08_184607_checkups', 1),
(17, '2021_04_08_200700_create_employee_licenses_table', 1),
(18, '2021_04_08_211845_create_branch_statuses_table', 1),
(19, '2021_04_08_211846_create_branches_table', 1),
(20, '2021_04_08_213356_create_employee_schedules_table', 1),
(21, '2021_04_08_213546_create_employee_days_off_table', 1),
(22, '2021_04_09_153823_create_medical_consult_categories_table', 1),
(23, '2021_04_09_154227_create_medical_consult_statuses_table', 1),
(24, '2021_04_09_154547_create_medical_consults_table', 1),
(25, '2021_04_09_181456_create_medical_attachments_table', 1),
(26, '2021_04_09_183648_create_medical_attachment_follow_ups_table', 1),
(27, '2021_04_09_184831_create_medical_histories_table', 1),
(28, '2021_04_09_200930_create_medicaments_table', 1),
(29, '2021_04_09_204549_create_medical_prescriptions_table', 1),
(30, '2021_04_12_153623_create_medical_test_statuses_table', 1),
(31, '2021_04_12_153639_create_medical_tests_table', 1),
(32, '2021_04_12_153702_create_medical_test_samples_table', 1),
(33, '2021_04_12_160427_create_medical_test_results_table', 1),
(34, '2021_04_12_162522_create_payment_statuses_table', 1),
(35, '2021_04_12_162610_create_payment_methods_table', 1),
(36, '2021_04_12_162706_create_payments_table', 1),
(37, '2021_04_12_173712_create_payment_debts_table', 1),
(38, '2021_04_12_180055_create_product_statuses_table', 1),
(39, '2021_04_12_180212_create_product_categories_table', 1),
(40, '2021_04_12_180418_create_products_table', 1),
(41, '2021_04_12_184517_create_product_payments_table', 1),
(42, '2021_04_12_205905_create_medical_test_orders_table', 1),
(43, '2021_04_12_205928_create_medical_test_order_annotations_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User\\User', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patients`
--

CREATE TABLE `patients` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `patient_code` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cellphone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preregistration_id` mediumint(8) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_by` mediumint(8) UNSIGNED NOT NULL,
  `updated_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `charged_by` mediumint(8) UNSIGNED DEFAULT NULL,
  `paymentmethod_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `branch_id` smallint(5) UNSIGNED NOT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `total` decimal(7,2) NOT NULL,
  `credit_card` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentstatus_id` tinyint(3) UNSIGNED NOT NULL,
  `patient_id` mediumint(8) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_debts`
--

CREATE TABLE `payment_debts` (
  `id` int(10) UNSIGNED NOT NULL,
  `payment_id` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` decimal(7,2) NOT NULL,
  `paymentmethod_id` tinyint(3) UNSIGNED NOT NULL,
  `charged_by` mediumint(8) UNSIGNED NOT NULL,
  `credit_card` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `name`) VALUES
(1, 'En efectivo'),
(2, 'Tarjeta de crédito'),
(3, 'Tarjeta de débito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_statuses`
--

CREATE TABLE `payment_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `payment_statuses`
--

INSERT INTO `payment_statuses` (`id`, `name`, `color`) VALUES
(1, 'Creado', '#4d13e2'),
(2, 'Deuda', '#aad965'),
(3, 'Completado', '#fdad36'),
(4, 'Cancelado', '#e69f8e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preregistrations`
--

CREATE TABLE `preregistrations` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `product_code` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `supplier_code` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity_available` smallint(5) UNSIGNED DEFAULT NULL,
  `price` decimal(9,2) NOT NULL,
  `discount` decimal(9,2) DEFAULT NULL,
  `productcategory_id` tinyint(3) UNSIGNED NOT NULL,
  `productstatus_id` tinyint(3) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `product_code`, `supplier_code`, `name`, `unit`, `quantity_available`, `price`, `discount`, `productcategory_id`, `productstatus_id`, `created_at`, `updated_at`) VALUES
(1, 'CON-0001', NULL, 'CONSULTA DE CIRUGIA ENDOSCOPICA GINECO', NULL, NULL, '1000.00', NULL, 1, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(2, 'CON-0002', NULL, 'CONSULTA MATERNO FETAL', NULL, NULL, '1000.00', NULL, 1, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(3, 'CON-0003', NULL, 'CONSULTA NUTRICION', NULL, NULL, '600.00', NULL, 1, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(4, 'CON-0011', NULL, 'CONSULTA GINECOLOGICA', NULL, NULL, '1000.00', NULL, 1, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(5, 'CON-0014', NULL, 'CONSULTA DE SEGUIMIENTO', NULL, NULL, '800.00', NULL, 1, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(6, 'CIR-0001', NULL, 'HONORARIOS MEDICOS ABLACION ENDOMETRIAL', NULL, NULL, '28000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(7, 'CIR-0002', NULL, 'HONORARIOS MEDICOS AMEU O LEGRADO', NULL, NULL, '15000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(8, 'CIR-0003', NULL, 'HONORARIOS MEDICOS CERCLAJE', NULL, NULL, '15000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(9, 'CIR-0004', NULL, 'HONORARIOS MEDICOS DE CESAREA', NULL, NULL, '35000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(10, 'CIR-0005', NULL, 'HONORARIOS MEDICOS EMBARAZO ECTOPICO', NULL, NULL, '30000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(11, 'CIR-0006', NULL, 'HONORARIOS MED FULGURACION ENDOMETRIOSIS', NULL, NULL, '30000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(12, 'CIR-0007', NULL, 'HONORARIOS MEDICOS HISTERECTOMIA ABIERTA', NULL, NULL, '38000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(13, 'CIR-0008', NULL, 'HONORARIOS MED HISTERECTOMIA OBSTETRICA', NULL, NULL, '40000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(14, 'CIR-0009', NULL, 'HONORARIOS MED RESECCION QUISTE OVARIO', NULL, NULL, '30000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(15, 'CIR-0010', NULL, 'HONORARIOS MEDICOS MIOMECTOMIA', NULL, NULL, '32000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(16, 'CIR-0011', NULL, 'HONORARIOS MEDICOS POLIPECTOMIA', NULL, NULL, '25000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(17, 'CIR-0012', NULL, 'HONORARIOSMEDICOS DE LAPAROSCOPIA DX', NULL, NULL, '30000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(18, 'CIR-0013', NULL, 'HONORARIOS MEDICOS DE PARTO', NULL, NULL, '35000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(19, 'CIR-0014', NULL, 'HONORARIOS MEDICOS DE CINTA TOT', NULL, NULL, '18000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(20, 'CIR-0015', NULL, 'HONORARIOS MEDICOS DE CINTA TVT', NULL, NULL, '22000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(21, 'CIR-0016', NULL, 'HONORARIOS MEDICOS COLPO ANTERIOR/POSTER', NULL, NULL, '25000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(22, 'CIR-0017', NULL, 'HONORARIOSMEDICOS RECONSTRUCCION VAGINA', NULL, NULL, '25000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(23, 'CIR-0018', NULL, 'HONORARIOS MEDICOS CISTOSCOPIA', NULL, NULL, '12000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(24, 'CIR-0019', NULL, 'HONORARIOS MEDICOS COLPOPLASTIA +CINTA', NULL, NULL, '30000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(25, 'CIR-0020', NULL, 'HONORARIOS MEDICOS HISTERECTOMIA VAGINAL + CINTA', NULL, NULL, '35000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(26, 'CIR-0021', NULL, 'HONORARIO MEDICO PLASTIA DE LABIOMAYOR', NULL, NULL, '15000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(27, 'CIR-0022', NULL, 'HONOARIO MEDICO CUADRANTECTOMI A + MARCAJE', NULL, NULL, '35000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(28, 'CIR-0023', NULL, 'HONOARIO MEDICO DE BIOPSIA DE MAMA', NULL, NULL, '6000.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(29, 'CIR-0027', NULL, 'HONORARIOS MEDICOS MARCAJE DE NODULO MAMARIO', NULL, NULL, '5500.00', NULL, 2, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(30, 'HIS-0001', NULL, 'HISTEROSCOPIA DIAGNOSTICA', NULL, NULL, '12000.00', NULL, 3, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(31, 'HIS-0003', NULL, 'HISTEROSCOPIA QUIRURGICA FRIA', NULL, NULL, '16000.00', NULL, 3, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(32, 'HIS-0005', NULL, 'HISTEROSCOPIA QUIRURGICA TERMICA', NULL, NULL, '18000.00', NULL, 3, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(33, 'FAR-0001', NULL, 'GONAL-F PEN 300IU/0.5 ML PEN', 'PIEZA', NULL, '3500.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(34, 'FAR-0002', NULL, 'CETROTIDE', 'CAJA', NULL, '900.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(35, 'FAR-0003', NULL, 'PERGOVERIS', 'CAJA', NULL, '2000.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(36, 'FAR-0004', NULL, 'PREGNYL 5000UI', 'CAJA', NULL, '510.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(37, 'FAR-0005', NULL, 'OVIDREL SYR 250 MCG', 'CAJA', NULL, '765.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(38, 'FAR-0006', NULL, 'PROSPHERE 200MG', 'CAJA', NULL, '720.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(39, 'FAR-0007', NULL, 'GESLUTIN 200 MG ORAL/VAG 15 PERLAS', 'CAJA', NULL, '380.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(40, 'FAR-0008', NULL, 'ESMYA ACETATO DE ULIPRISTAL 5MG C/28 TAB', 'CAJA', NULL, '5650.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(41, 'FAR-0011', NULL, 'CHORAGON 5000 UI', 'CAJA', NULL, '750.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(42, 'FAR-0012', NULL, 'ANUAR ASIF 0.5MG', 'CAJA', NULL, '1050.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(43, 'FAR-0013', NULL, 'TREXEN DUO OVULOS', 'CAJA', NULL, '310.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(44, 'FAR-0014', NULL, 'ULTRAC 30 CAPS', 'CAJA', NULL, '190.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(45, 'FAR-0015', NULL, 'LUCIARA CREMA', 'PIEZA', NULL, '475.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(46, 'FAR-0018', NULL, 'CHORIOMON 5000 UI', 'PIEZA', NULL, '650.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(47, 'FAR-0019', NULL, 'GARDASIL', 'PIEZA', NULL, '2800.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(48, 'FAR-0020', NULL, 'CYTOTEC', 'PIEZA', NULL, '250.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(49, 'FAR-0021', NULL, 'GONAPEPTYL DEPOT 3.75 MG', 'PIEZA', NULL, '3150.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(50, 'FAR-0022', NULL, 'INCADIX MOXIFLOXACINO 400MG', 'CAJA', NULL, '310.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(51, 'FAR-0023', NULL, 'RHOGAM', 'PIEZA', NULL, '3550.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(52, 'FAR-0024', NULL, 'CELESTONE SOLUSPAN', 'PIEZA', NULL, '295.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(53, 'FAR-0025', NULL, 'AMNIO SENSE', 'CAJA', NULL, '800.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(54, 'FAR-0027', NULL, 'OMEGA 60 CAPS', 'CAJA', NULL, '800.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(55, 'FAR-0028', NULL, 'OMEGA (120 CAPS)', 'PIEZA', NULL, '1150.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(56, 'FAR-0032', NULL, 'CLEXANE 40MG (2JERINGAS)', 'PIEZA', NULL, '690.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(57, 'FAR-0033', NULL, 'CLEXANE 60MG (2 JERINGAS)', 'PIEZA', NULL, '1190.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(58, 'FAR-0034', NULL, 'BOLENTAX 40MG/0.4ML', 'PIEZA', NULL, '470.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(59, 'FAR-0035', NULL, 'MERIONAL150 I.U.', 'PZA', NULL, '1600.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(60, 'FAR-0036', NULL, 'ENOXAPARINA SODICA 40 MG/0.4 ML', 'PIEZA', NULL, '690.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(61, 'FAR-0037', NULL, 'AVAPENA 20MG/2ML 5 AMP', 'PIEZA', NULL, '50.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(62, 'FAR-0038', NULL, 'RENEGY 500 MG/10 ML SOL INY FA', 'Pieza', NULL, '4300.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(63, 'FAR-0039', NULL, 'LUCRIN DEPOT 3.75 MG', 'PIEZA', NULL, '4500.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(64, 'FAR-0040', NULL, 'RHOPHYLAC SOL. 300MCG/2ML', 'PIEZA', NULL, '3550.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(65, 'FAR-0041', NULL, 'LEXOTAN 6 MG 100 TABS', 'PIEZA', NULL, '2190.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(66, 'AL-0022', NULL, 'RECOLECTOR 24 HRS', 'PIEZA', NULL, '80.00', NULL, 4, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(67, 'CIC-0001', NULL, 'APLICACIÓN MEDICAMENTO', NULL, NULL, '50.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(68, 'CIC-0002', NULL, 'COLOCACION DIU JAYDESS BAJO SEDACION', NULL, NULL, '4600.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(69, 'CIC-0003', NULL, 'COLOCACION DIU MIRENA BAJO SEDACION', NULL, NULL, '6000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(70, 'CIC-0004', NULL, 'COLOCACION DIU JAYDESS', NULL, NULL, '3600.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(71, 'CIC-0005', NULL, 'COLOCACION DIU MIRENA', NULL, NULL, '5000.02', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(72, 'CIC-0006', NULL, 'RETIRO DIU', NULL, NULL, '500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(73, 'CIC-0007', NULL, 'RETIRO IMPLANTE', NULL, NULL, '1000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(74, 'CIC-0008', NULL, 'HONORARIO MEDICO POR INSEMINACION', NULL, NULL, '2320.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(75, 'CIC-0009', NULL, 'COLOCACION IMPLANTE', NULL, NULL, '5000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(76, 'CIC-0010', NULL, 'CHECK UP TEEN', NULL, NULL, '1400.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(77, 'CIC-0011', NULL, 'CHECK UP TEEN + PERFIL HORMONAL', NULL, NULL, '3680.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(78, 'CIC-0012', NULL, 'CHECK UP MUJER CICLICA', NULL, NULL, '6710.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(79, 'CIC-0013', NULL, 'CHECK UP MUJER CICLICA + TIPIFICACION', NULL, NULL, '9030.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(80, 'CIC-0014', NULL, 'CHECK UP MATURE', NULL, NULL, '8885.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(81, 'CIC-0015', NULL, 'CHECK UP MATURE + TIPIFICACION', NULL, NULL, '11203.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(82, 'CIC-0016', NULL, 'CHECK UP MOM DIAGNOSTICO PRENATAL', NULL, NULL, '7600.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(83, 'CIC-0017', NULL, 'CHECK UP MOM DX PRENATAL+ ECOCARDIO FETAL', NULL, NULL, '9600.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(84, 'CIC-0018', NULL, 'CHECK UP MOM', NULL, NULL, '4865.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(85, 'CIC-0019', NULL, 'CHECK UP CONVENIO INSTITUCIONAL', NULL, NULL, '2950.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(86, 'CIC-0020', NULL, 'RETIRO DIU BAJO SEDACION', NULL, NULL, '2000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(87, 'CIC-0021', NULL, 'COLPOSCOPIA', NULL, NULL, '800.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(88, 'CIC-0022', NULL, 'COLPOSCOPIA + CRIOTERAPIA + BIOPSIA', NULL, NULL, '4800.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(89, 'CIC-0023', NULL, 'COLPOSCOPIA + CRIOTERAPIA', NULL, NULL, '4500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(90, 'CIC-0024', NULL, 'COLPOSCOPIA + BIOPSIA', NULL, NULL, '2500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(91, 'CIC-0025', NULL, 'CRIOTERAPIA', NULL, NULL, '4000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(92, 'CIC-0026', NULL, 'COLOCACION DIU SILVERCARE', NULL, NULL, '2100.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(93, 'CIC-0027', NULL, 'COLOCACION DIU SILVERCARE BAJO SEDACION', NULL, NULL, '3100.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(94, 'CIC-0028', NULL, 'SEGUIMIENTO FOLICULAR', NULL, NULL, '500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(95, 'CIC-0029', NULL, 'EXPLORACION', NULL, NULL, '500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(96, 'CIC-0030', NULL, 'CURSO TEORICO DE LACTANCIA', NULL, NULL, '800.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(97, 'CIC-0031', NULL, 'ASESORIA PERSONALIZADA LACTANCIA', NULL, NULL, '1000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(98, 'CIC-0032', NULL, 'CURSO PSICOPROFILACTICO', NULL, NULL, '3500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(99, 'CIC-0033', NULL, 'PAQUETE DE LACTANCIA CON ASISTENCIA', NULL, NULL, '1600.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(100, 'CIC-0034', NULL, 'USO INBODY (SIN CONSULTA)', NULL, NULL, '250.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(101, 'CIC-0035', NULL, 'FULGURACION DE LESIONES VULVARES', NULL, NULL, '2500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(102, 'CIC-0036', NULL, 'MARCAJE DE NODULO MAMARIO', NULL, NULL, '5500.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(103, 'CIC-0037', NULL, 'COLOCACION DIU KYLEENA', NULL, NULL, '5000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(104, 'CIC-0038', NULL, 'COLOCACION DIU KYLEENA BAJO SEDACION', NULL, NULL, '6000.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(105, 'CIC-0039', NULL, 'DETERMINACION DE SEXO FETAL', NULL, NULL, '3400.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(106, 'CIC-0040', NULL, 'APLICACIÓN MEDICAMENTO INTRAVENOSO', NULL, NULL, '250.00', NULL, 5, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(107, 'IMA-0001', NULL, 'ULTRASONIDO PELVICO', NULL, NULL, '928.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(108, 'IMA-0002', NULL, 'DENSITOMETRIA', NULL, NULL, '580.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(109, 'IMA-0003', NULL, 'ECOCARDIOGRAMA FETAL', NULL, NULL, '3000.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(110, 'IMA-0004', NULL, 'HEMODINAMIA FETAL', NULL, NULL, '1500.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(111, 'IMA-0005', NULL, 'MASTOGRAFIA', NULL, NULL, '1800.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(112, 'IMA-0006', NULL, 'MEDICION LONGUITUD CERVICAL', NULL, NULL, '650.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(113, 'IMA-0007', NULL, 'MONITOREO FETAL', NULL, NULL, '650.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(114, 'IMA-0008', NULL, 'PERFIL BIOFISICO', NULL, NULL, '2650.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(115, 'IMA-0009', NULL, 'ULTRASONIDO IIN (1 BEBE)', NULL, NULL, '2000.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(116, 'IMA-0010', NULL, 'ULTRASONIDO IIN (2 BEBES)', NULL, NULL, '3000.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(117, 'IMA-0011', NULL, 'ULTRASONIDO IIN (3 BEBES)', NULL, NULL, '4000.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(118, 'IMA-0012', NULL, 'ULTRASONIDO IIN (4 BEBES)', NULL, NULL, '5000.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(119, 'IMA-0013', NULL, 'ULTRASONIDO DE MAMA', NULL, NULL, '920.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(120, 'IMA-0014', NULL, 'ELECTROCARDIOGRAMA', NULL, NULL, '708.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(121, 'IMA-0015', NULL, 'ULTRASONIDO TESTICULAR', NULL, NULL, '1400.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(122, 'IMA-0016', NULL, 'ULTRASONIDO SUPRARRENAL', NULL, NULL, '928.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(123, 'IMA-0017', NULL, 'ULTRASONIDO ABDOMEN COMPLETO', NULL, NULL, '1600.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(124, 'IMA-0018', NULL, 'ULTRASONIDO ABDOMEN SUPERIOR (HIGADO Y VIAS BILIARES)', NULL, NULL, '1080.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(125, 'IMA-0019', NULL, 'ULTRASONIDO DE UNA REGION', NULL, NULL, '928.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(126, 'IMA-0020', NULL, 'ULTRASONIDO ENDOVAGINAL', NULL, NULL, '928.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(127, 'IMA-0021', NULL, 'RX TELE DE TORAX', NULL, NULL, '360.00', NULL, 6, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(128, 'LAB-0001', 'COD 29', '17 ALFA- HIDROXIPROGESTERONA SERICA', NULL, NULL, '350.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(129, 'LAB-0002', 'COD 158', 'AC ANTI ESPERMATOZOIDES', NULL, NULL, '854.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(130, 'LAB-0003', 'COD 1400', 'AC ANTI HIV 1Y2/AG P24', NULL, NULL, '370.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(131, 'LAB-0004', 'COD 67', 'ACIDO URICO', NULL, NULL, '56.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(132, 'LAB-0005', 'COD 126', 'ANDROSTENEDIONA', NULL, NULL, '390.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(133, 'LAB-0006', 'COD 2933', 'AC ANTI- HEPATITIS E IGG', NULL, NULL, '2588.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(134, 'LAB-0007', 'COD 208', 'ANTIGENO PROSTATICO ESPECIFICO TOTAL', NULL, NULL, '308.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(135, 'LAB-0008', 'COD 692', 'BIOMETRIA HEMATICA', NULL, NULL, '166.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(136, 'LAB-0009', 'COD 1814', 'AG DE CHLAMYDIA ENDOCERVICAL', NULL, NULL, '450.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(137, 'LAB-0010', 'COD 1332', 'UROCULTIVO (CULTIVO DE ORINA)', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(138, 'LAB-0011', NULL, 'CAPACITACION ESPERMATICA PARA INSEMINACIÓN ARTIFICIAL HUMANA', NULL, NULL, '5300.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(139, 'LAB-0012', 'COD 2072', 'CARIOTIPO CON FOTOGRAFIA', NULL, NULL, '7776.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(140, 'LAB-0013', 'COD 281', 'COLESTEROL TOTAL', NULL, NULL, '76.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(141, 'LAB-0014', 'COD 1316', 'COOMBS INDIRECTO (AC ANTI-RH SERICOS)', NULL, NULL, '232.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(142, 'LAB-0015', 'COD 5399', 'CULTIVOS ESPECIALES', NULL, NULL, '1900.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(143, 'LAB-0016', 'COD 1324', 'CULTIVO SIMPLE (EXUDADO VAGINAL)', NULL, NULL, '800.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(144, 'LAB-0017', 'COD 1265', 'V.D.R.L.', NULL, NULL, '156.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(145, 'LAB-0018', 'COD 1331', 'CULTIVO DE MYCOPLASMA/UREAPLASMA', NULL, NULL, '914.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(146, 'LAB-0019', 'COD 1718', 'CHLAMYDIA TRACHOMATIS POR PCR', NULL, NULL, '1984.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(147, 'LAB-0020', 'COD 317', 'DEHIDROEPIANDROSTERONA SULFATO (DHEA-SO4)', NULL, NULL, '382.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(148, 'LAB-0021', NULL, 'ESPERMATOBIOSCOPIA DIRECTA', NULL, NULL, '650.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(149, 'LAB-0022', 'COD 5401', 'PERFIL CULTIVOS ESPECIALES MASCULINO', NULL, NULL, '2976.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(150, 'LAB-0023', 'COD 15', 'ESTRADIOL', NULL, NULL, '238.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(151, 'LAB-0024', 'COD 374', 'ESTROGENOS TOTALES', NULL, NULL, '254.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(152, 'LAB-0025', 'COD 83', 'EXAMEN GENERAL DE ORINA (EGO)', NULL, NULL, '152.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(153, 'LAB-0026', 'COD 423', 'FRACCION BETA DE HGC (CUANTITATIVA)', NULL, NULL, '326.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(154, 'LAB-0027', 'COD 2090', 'FRUCTOSA EN SEMEN', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(155, 'LAB-0028', 'COD 452', 'GLUCOSA', NULL, NULL, '62.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(156, 'LAB-0029', 'COD 1238', 'GRUPO SANGUINEO Y FACTOR RH', NULL, NULL, '96.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(157, 'LAB-0032', 'COD 1009', 'HORMONA ESTIMULANTE DE TIROIDES (TSH)', NULL, NULL, '186.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(158, 'LAB-0033', 'COD 493', 'HORMONA FOLICULO ESTIMULANTE (FSH)', NULL, NULL, '212.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(159, 'LAB-0034', 'COD 511', 'HORMONA LUTEINIZANTE (LH)', NULL, NULL, '230.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(160, 'LAB-0035', 'COD 559', 'INSULINA BASAL', NULL, NULL, '278.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(161, 'LAB-0036', NULL, 'MARCADORES SERICOS 1ER TRIM', NULL, NULL, '2000.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(162, 'LAB-0037', NULL, 'MARCADORES SERICOS 2DO TRIM', NULL, NULL, '3000.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(163, 'LAB-0038', NULL, 'ORINA POST EYACULADO (OPE)', NULL, NULL, '450.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(164, 'LAB-0039', 'COD 992', 'PERFIL MARCADORES HEPATITIS ABCD BASICO', NULL, NULL, '2518.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(165, 'LAB-0040', 'COD 1823', 'PAPANICOLAU', NULL, NULL, '800.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(166, 'LAB-0041', 'COD 1410', 'ZINC', NULL, NULL, '1316.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(167, 'LAB-0042', 'COD 772', 'YODO PROTEICO', NULL, NULL, '178.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(168, 'LAB-0043', 'COD 4465', 'PERFIL HORMONAL FEMENINO BASICO', NULL, NULL, '806.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(169, 'LAB-0044', 'COD 1365', 'PERFIL AUTOINMUNE I', NULL, NULL, '2198.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(170, 'LAB-0045', 'COD 1469', 'PERFIL AUTOINMUNE II', NULL, NULL, '2470.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(171, 'LAB-0046', 'COD 2336', 'PERFIL CLIMATERIO BASICO', NULL, NULL, '568.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(172, 'LAB-0047', 'COD 5405', 'PERFIL INFECCIOSO CICLICA (ETS)', NULL, NULL, '1315.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(173, 'LAB-0048', 'COD 1370', 'PERFIL DE LIPIDOS BASICO', NULL, NULL, '410.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(174, 'LAB-0049', 'COD 4459', 'PERFIL DE LUPUS I', NULL, NULL, '2208.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(175, 'LAB-0050', 'COD 1186', 'PERFIL HEPATICO I', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(176, 'LAB-0051', 'COD 5397 COD 5398', 'PERFIL HORMONAL FEMENINO FASE I Y II', NULL, NULL, '2280.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(177, 'LAB-0586', 'COD 5397', 'PERFIL HORMONAL FEMENINO FASE I', NULL, NULL, '1710.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(178, 'LAB-0854', 'COD 5398', 'PERFIL HORMONAL FEMENINO FASE II', NULL, NULL, '571.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(179, 'LAB-0052', 'COD 3635', 'PERFIL HORMONAL MASCULINO COMPLETO', NULL, NULL, '2336.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(180, 'LAB-0053', 'COD 4567', 'PERFIL DE MARCADORES TUMORALES FEMENINO', NULL, NULL, '1620.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(181, 'LAB-0054', 'COD 2134', 'INDICE DE RESISTENCIA A INSULINA (HOMA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(182, 'LAB-0055', 'COD 2302', 'PERFIL MARCADORES TUMORALES DE MAMA', NULL, NULL, '800.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(183, 'LAB-0056', 'COD 2303', 'PERFIL MARCADORES TUMORALES DE OVARIO', NULL, NULL, '1122.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(184, 'LAB-0057', 'COD 3484', 'PERFIL PARATIROIDEO', NULL, NULL, '1486.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(185, 'LAB-0058', 'COD 1378', 'PERFIL PRENATAL', NULL, NULL, '618.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(186, 'LAB-0059', 'COD 897', 'PERFIL HEPATICO II', NULL, NULL, '642.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(187, 'LAB-0060', 'COD 1513', 'PERFIL PREOPERATORIO', NULL, NULL, '950.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(188, 'LAB-0061', 'COD 4531', 'PERFIL TIROIDEO SEGUIMIENTO (BASICO)', NULL, NULL, '844.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(189, 'LAB-0062', 'COD 1413', 'PERFIL TIROIDEO I', NULL, NULL, '664.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(190, 'LAB-0063', 'COD 1190', 'PERFIL TIROIDEO IV', NULL, NULL, '460.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(191, 'LAB-0064', 'COD 2105', 'PERFIL TIROIDEO V', NULL, NULL, '1352.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(192, 'LAB-0065', 'COD 1386', 'PERFIL TORCH (IGG E IGM)', NULL, NULL, '2718.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(193, 'LAB-0066', 'COD 661', 'PROGESTERONA SERICA', NULL, NULL, '214.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(194, 'LAB-0067', 'COD 672', 'PROLACTINA SERICA', NULL, NULL, '220.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(195, 'LAB-0068', NULL, 'PRUEBA DE CAPACITACION ESPERMATICA', NULL, NULL, '4230.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(196, 'LAB-0069', NULL, 'PRUEBA DE HOST', NULL, NULL, '280.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(197, 'LAB-0070', 'COD 1344', 'PRUEBA INMUNOLOGICA EMBARAZO EN SANGRE', NULL, NULL, '150.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(198, 'LAB-0071', 'COD 1114', 'QUIMICA SANGUINEA 4 ELEMENTOS', NULL, NULL, '204.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(199, 'LAB-0072', 'COD 1185', 'QUIMICA SANGUINEA 6 ELEMENTOS', NULL, NULL, '292.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(200, 'LAB-0073', 'COD 941', 'QUIMICA SANGUINEA 24 ELEMENTOS', NULL, NULL, '840.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(201, 'LAB-0074', 'COD 1393', 'SANGRE OCULTA EN HECES', NULL, NULL, '150.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(202, 'LAB-0075', 'COD 2646', 'PERFIL DE OSTEOPOROSIS I', NULL, NULL, '1206.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(203, 'LAB-0076', 'COD 815', 'TESTOSTERONA LIBRE', NULL, NULL, '364.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(204, 'LAB-0077', 'COD 5406', 'CURVA DE TOLERANCIA GLUCOSA 2 HRS', NULL, NULL, '360.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(205, 'LAB-0078', 'COD 1183', 'QUIMICA SANGUINEA 3 ELEMENTOS', NULL, NULL, '168.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(206, 'LAB-0079', 'COD 1512', 'PERFIL DE COAGULACION', NULL, NULL, '590.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(207, 'LAB-0080', 'COD 745', 'TRIGLICERIDOS', NULL, NULL, '102.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(208, 'LAB-0081', 'COD 3526', 'TRIPLE MARCADOR EN SUERO MATERNO SIN INT', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(209, 'LAB-0082', 'COD 732', 'TIROGLOBULINA', NULL, NULL, '330.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(210, 'LAB-0083', 'COD 1383', 'PROTEINAS TOTALES ORINA 24 HRS', NULL, NULL, '182.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(211, 'LAB-0084', 'COD 1343', 'PRUEBA INMUNOLOGICA EMBARAZO ORINA', NULL, NULL, '154.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(212, 'LAB-0085', 'COD 5234', 'QUANTOSE', NULL, NULL, '2364.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(213, 'LAB-0086', 'COD 1142', 'PERFIL MARCADORES HEPATITIS ABC COMPLETO', NULL, NULL, '3336.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(214, 'LAB-0087', NULL, 'AMNIOCENTESIS CARIOTIPO', NULL, NULL, '12000.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(215, 'LAB-0088', NULL, 'BIOPSIA VELLOSIDADES CORIALES', NULL, NULL, '650.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(216, 'LAB-0089', 'COD 177', 'AC ANTI NUCLEARES (ANA)', NULL, NULL, '390.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(217, 'LAB-0090', 'COD 807', 'ELECTROLITOS EN SUERO (NA,K,CL)', NULL, NULL, '246.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(218, 'LAB-0091', 'COD 4610', 'PERFIL DE LUPUS III', NULL, NULL, '3572.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(219, 'LAB-0092', NULL, 'ESTUDIO DE PATOLOGIA', NULL, NULL, '1000.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(220, 'LAB-0093', 'COD 1377', 'CHECK UP MASCULINO', NULL, NULL, '1882.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(221, 'LAB-0094', 'COD 288', 'VELOCIDAD DE SEDIMENTACION GLOBULAR VSG', NULL, NULL, '80.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(222, 'LAB-0095', 'COD 1633', 'PROCALCITONINA', NULL, NULL, '1008.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(223, 'LAB-0096', 'COD 3051', 'XILENO (AC METIL HIPURICO) EN ORINA', NULL, NULL, '1622.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(224, 'LAB-0097', 'COD 1461', '17 ALFA HIDROXIPROGESTERONA NEONATAL', NULL, NULL, '278.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(225, 'LAB-0098', 'COD 2826', '17 HIDROXI ESTEROIDES', NULL, NULL, '872.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(226, 'LAB-0099', 'COD 1272', '17 HIDROXICORTICOESTEROIDES ORINA 24 HRS', NULL, NULL, '730.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(227, 'LAB-0100', 'COD 3056', '2 MERCAPTO ETANOL (AC ANTI BRUCELLA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(228, 'LAB-0101', 'COD 135', 'AC ANTI ADN DOBLE CADENA', NULL, NULL, '488.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(229, 'LAB-0102', 'COD 3059', 'AC ANTI ALFA LACTOALBUMINA IGE', NULL, NULL, '716.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(230, 'LAB-0103', 'COD 137', 'AC ANTI AMIBA', NULL, NULL, '714.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(231, 'LAB-0104', 'COD 2633', 'AC ANTI HISTONA', NULL, NULL, '1024.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(232, 'LAB-0105', 'COD 2330', 'AC ANTI HISTOPLASMA CAPSULATUM IGM', NULL, NULL, '2004.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(233, 'LAB-0106', 'COD 841', 'AC ANTI AG CENTRAL VIRUS HEPATITIS B IGM', NULL, NULL, '630.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(234, 'LAB-0107', 'COD 828', 'AC ANTI AG CENTRAL VIRUS HEPATITIS B TOT', NULL, NULL, '564.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(235, 'LAB-0108', 'COD 144', 'AC ANTI AG SUPERFICIE VIRUS HEPATITIS B', NULL, NULL, '558.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(236, 'LAB-0109', 'COD 1136', 'AC ANTI AG E VIRUS HEPATITIS B', NULL, NULL, '638.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(237, 'LAB-0110', 'COD 2202', 'AC ANTI AG NUCLEAR EPSTEIN BARR IGG', NULL, NULL, '1066.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(238, 'LAB-0111', 'COD 198', 'AC ANTI AG TEMPRANO EPSTEIN BARR IGG', NULL, NULL, '642.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(239, 'LAB-0112', 'COD 3018', 'AC ANTI AG TEMP EPSTEIN BARR IGA IGG IGM', NULL, NULL, '1644.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(240, 'LAB-0113', 'COD 3027', 'AC ANTI HEPATITIS E IGG E IGM', NULL, NULL, '5188.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(241, 'LAB-0114', 'COD 2162', 'AC ANTI MEMBRANA BASAL GLOMERULAR', NULL, NULL, '1478.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(242, 'LAB-0115', 'COD 134', 'AC ANTI HEPATITIS C', NULL, NULL, '584.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(243, 'LAB-0116', 'COD 138', 'AC ANTI HEPATITIS D TOTAL', NULL, NULL, '738.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(244, 'LAB-0117', 'COD 2828', 'AC ANTI BETA 2 GLICOPROTEINA IGA', NULL, NULL, '1122.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(245, 'LAB-0118', 'COD 1135', 'AC ANTI BETA 2 GLICOPROTEINA IGG', NULL, NULL, '1076.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(246, 'LAB-0119', 'COD 2965', 'AC ANTI BETA 2 GLICOPROTEINA IGA IGG IGM', NULL, NULL, '1658.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(247, 'LAB-0120', 'COD 1220', 'AC ANTI BETA 2 GLICOPROTEINA IGM', NULL, NULL, '1086.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(248, 'LAB-0121', 'COD 3071', 'AC ANTI BETA LACTOGLOBULINA IGE', NULL, NULL, '716.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(249, 'LAB-0122', 'COD 2204', 'AC ANTI BORDETELLA PERTUSSIS IGA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(250, 'LAB-0123', 'COD 2206', 'AC ANTI BORDETELLA PERTUSSIS IGM', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(251, 'LAB-0124', 'COD 3213', 'AC ANTI BORRELLIA BURGDORFERI (LYME) IGG', NULL, NULL, '664.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(252, 'LAB-0125', 'COD 2208', 'AC ANTI BORRELLIA BURGDORFERI (LYME) IGM', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(253, 'LAB-0126', 'COD 2207', 'AC ANTI BORRELIA BURGDORFERI IGG IGM', NULL, NULL, '1534.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(254, 'LAB-0127', 'COD 2077', 'AC ANTI BRUCELLA IGM', NULL, NULL, '886.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(255, 'LAB-0128', 'COD 1804', 'AC ANTI BRUCELLA IGG E IGM', NULL, NULL, '1702.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(256, 'LAB-0129', 'COD 2977', 'AC ANTI BRUCELLA IGA IGG E IGM', NULL, NULL, '5974.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(257, 'LAB-0130', 'COD 1818', 'AC ANTI BRUCELLA POR ROSA DE BENGALA', NULL, NULL, '410.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(258, 'LAB-0131', 'COD 3007', 'AC ANTI CANDIDA ALBICANS IGA IGG E IGM', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(259, 'LAB-0132', 'COD 1632', 'AC ANTI CARDIOLIPINAS IGA', NULL, NULL, '678.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(260, 'LAB-0133', 'COD 854', 'AC ANTI CARDIOLIPINAS IGG', NULL, NULL, '612.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(261, 'LAB-0134', 'COD 855', 'AC ANTI CARDIOLIPINAS IGM', NULL, NULL, '594.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(262, 'LAB-0135', 'COD 2209', 'AC ANTI CARDIOLIPINAS IGG E IGM', NULL, NULL, '1206.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(263, 'LAB-0136', 'COD 3085', 'AC ANTI CARDIOLIPINAS IGA IGG E IGM', NULL, NULL, '1850.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(264, 'LAB-0137', 'COD 1807', 'AC ANTI PEPTIDO CICLICO CITRULINADO', NULL, NULL, '1352.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(265, 'LAB-0138', 'COD 197', 'AC ANTI CELULAS PARIETALES', NULL, NULL, '1732.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(266, 'LAB-0139', 'COD 1284', 'AC ANTI CENTROMERO', NULL, NULL, '602.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(267, 'LAB-0140', 'COD 2289', 'AC ANTI TRYPANOSOMA CRUZI (CHAGAS)', NULL, NULL, '842.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(268, 'LAB-0141', 'COD 4325', 'AC ANTI CHIKUNGUYA IGM', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(269, 'LAB-0142', 'COD 4326', 'AC ANTI CHIKUNGUNYA IGG E IGM', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(270, 'LAB-0143', 'COD 1805', 'AC ANTI CHLAMYDIA TRACHOMATIS IGA', NULL, NULL, '1978.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(271, 'LAB-0144', 'COD 152', 'AC ANTI CHLAMYDIA TRACHOMATIS IGG', NULL, NULL, '632.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(272, 'LAB-0145', 'COD 894', 'AC ANTI CHLAMYDIA TRACHOMATIS IGM', NULL, NULL, '696.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(273, 'LAB-0146', 'COD 3009', 'AC ANTI CHLAMYDIA TRACHOMATIS IGG E IGM', NULL, NULL, '1402.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(274, 'LAB-0147', 'COD 2335', 'AC ANTI CHLAMYDIA TRACH IGA IGG IGM', NULL, NULL, '3380.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(275, 'LAB-0148', 'COD 150', 'AC ANTI CISTICERCO', NULL, NULL, '582.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(276, 'LAB-0149', 'COD 1285', 'AC ANTI CISTICERCO LIQ CEFALORRAQUIDEO', NULL, NULL, '830.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(277, 'LAB-0150', 'COD 151', 'AC ANTI CITOMEGALOVIRUS IGG', NULL, NULL, '400.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(278, 'LAB-0151', 'COD 837', 'AC ANTI CITOMEGALOVIRUS IGM', NULL, NULL, '516.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(279, 'LAB-0152', 'COD 4332', 'AC ANTI CITOMEGALOVIRUS IGG E IGM', NULL, NULL, '778.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(280, 'LAB-0153', 'COD 1596', 'AC ANTI CITOPLASMA DE NEUTROFILOS PERINUC', NULL, NULL, '756.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(281, 'LAB-0154', 'COD 1286', 'AC ANTI CITOPLASMA DE NEUTROFILOS CITOPL', NULL, NULL, '756.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(282, 'LAB-0155', 'COD 3087', 'AC ANTICITOPLASMA DE NEUTROFILOS', NULL, NULL, '1360.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(283, 'LAB-0156', 'COD 3012', 'AC ANTI COCCIDIOIDES IMMITIS IGG E IGM', NULL, NULL, '4448.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(284, 'LAB-0157', 'COD 1811', 'AC ANTI TIROGLOBULINA', NULL, NULL, '390.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(285, 'LAB-0158', 'COD 3162', 'AC ANTI COXIELLA BURNETTI IGG E IGM', NULL, NULL, '6496.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(286, 'LAB-0159', 'COD 852', 'AC ANTI DENGUE IGG', NULL, NULL, '696.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(287, 'LAB-0160', 'COD 853', 'AC ANTI DENGUE IGM', NULL, NULL, '696.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(288, 'LAB-0161', 'COD 2213', 'AC ANTI DENGUE IGG E IGM', NULL, NULL, '1082.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(289, 'LAB-0162', 'COD 5033', 'AC ANTI DENGUE IGG IGM AG NS1', NULL, NULL, '2078.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(290, 'LAB-0163', 'COD 1606', 'AC ANTI DESCARBOXILASA DE AC GLUTAMICO', NULL, NULL, '1638.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(291, 'LAB-0164', 'COD 2171', 'AC ANTI DNA DESNATURALIZADO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(292, 'LAB-0165', 'COD 4306', 'AC ANTI DNA NATIVO CUANTITATIVO', NULL, NULL, '1106.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(293, 'LAB-0166', 'COD 3602', 'AC ANTI DONADOR ESPECIFICO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(294, 'LAB-0167', 'COD 1266', 'AC ANTI LISTERIA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(295, 'LAB-0168', 'COD 2056', 'AC ANTI ENDOMISIALES', NULL, NULL, '1398.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(296, 'LAB-0169', 'COD 3016', 'AC ANTI ENDOMISIALES IGA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(297, 'LAB-0170', 'COD 2203', 'AC ANTI EPSTEIN BARR AG CAPSIDE IGG', NULL, NULL, '638.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(298, 'LAB-0171', 'COD 1289', 'AC ANTI EPSTEIN BARR AG CAPSIDE IGM', NULL, NULL, '642.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(299, 'LAB-0172', 'COD 2098', 'AC ANTI LEPTOSPIRA IGG E IGM', NULL, NULL, '1700.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(300, 'LAB-0173', 'COD 1290', 'AC ANTI SCL 70 IGG (ESCLERODERMA)', NULL, NULL, '752.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(301, 'LAB-0174', 'COD 161', 'AC ANTI FOSFOLIPIDOS IGG', NULL, NULL, '634.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(302, 'LAB-0175', 'COD 1634', 'AC ANTI FOSFOLIPIDOS IGM', NULL, NULL, '634.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(303, 'LAB-0176', 'COD 1401', 'AC ANTI FOSFOLIPIDOS IGG E IGM', NULL, NULL, '1198.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(304, 'LAB-0177', 'COD 2218', 'AC ANTI GIARDIA LAMBLIA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(305, 'LAB-0178', 'COD 2331', 'AC ANTI GLIADINA IGA E IGG', NULL, NULL, '1414.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(306, 'LAB-0179', 'COD 848', 'AC ANTI INSULINA', NULL, NULL, '908.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(307, 'LAB-0180', 'COD 2407', 'AC ANTI ISLOTES DE LANGERHANS', NULL, NULL, '1952.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(308, 'LAB-0181', 'COD 3131', 'AC ANTI LECHE DE VACA IGG', NULL, NULL, '2846.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(309, 'LAB-0182', 'COD 1808', 'AC ANTI HELICOBACTER PYLORI IGA', NULL, NULL, '892.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(310, 'LAB-0183', 'COD 162', 'AC ANTI HELICOBATER PYLORI IGG', NULL, NULL, '580.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(311, 'LAB-0184', 'COD 879', 'AC ANTI HELICOBATER PYLORI IGM', NULL, NULL, '606.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(312, 'LAB-0185', 'COD 3026', 'AC ANTI HELICOBATER PYLORI IGG E IGM', NULL, NULL, '1072.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(313, 'LAB-0186', 'COD 3025', 'AC ANTI HELICOBACTER PYLORI IGA IGG IGM', NULL, NULL, '1726.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(314, 'LAB-0187', 'COD 141', 'AC ANTI HEPATITIS A IGG', NULL, NULL, '608.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(315, 'LAB-0188', 'COD 893', 'AC ANTI HEPATITIS A IGM', NULL, NULL, '570.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(316, 'LAB-0189', 'COD 2150', 'AC ANTI MIELINA', NULL, NULL, '1810.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(317, 'LAB-0190', 'COD 173', 'AC ANTI MITOCONDRIALES (M2A/M2C)', NULL, NULL, '758.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(318, 'LAB-0191', 'COD 3178', 'AC ANTI MITOCONDRIALES POR INMUNOFLUORES', NULL, NULL, '762.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(319, 'LAB-0192', 'COD 1662', 'AC ANTI MUSCULO LISO POR INMUNOFLUORESCE', NULL, NULL, '914.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(320, 'LAB-0193', 'COD 170', 'AC ANTI MYCOBACTERIUM TUBERCULOSIS', NULL, NULL, '638.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(321, 'LAB-0194', 'COD 3157', 'AC ANTI MYCOBACTERIUM TUBERCULOSIS IGG', NULL, NULL, '1252.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(322, 'LAB-0195', 'COD 3158', 'AC ANTI MYCOBACTERIUM TUBERCULOSIS IGM', NULL, NULL, '1504.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(323, 'LAB-0196', 'COD 1747', 'AC ANTI MYCOPLASMA PNEUMONIAE IGG IGM', NULL, NULL, '1816.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(324, 'LAB-0197', 'COD 2456', 'AC ANTI NUCLEARES POR IFI', NULL, NULL, '638.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(325, 'LAB-0198', 'COD 2317', 'AC ANTI NUCLEOSOMA', NULL, NULL, '972.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(326, 'LAB-0199', 'COD 1487', 'AC ANTI OVARIO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(327, 'LAB-0200', 'COD 3033', 'AC ANTI PAROTIDITIS IGG E IGM', NULL, NULL, '1076.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(328, 'LAB-0201', 'COD 1639', 'AC ANTI PARVOVIRUS B19', NULL, NULL, '1770.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(329, 'LAB-0202', 'COD 1809', 'AC ANTI  PEROXIDASA TIROIDEA (TPO)', NULL, NULL, '452.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(330, 'LAB-0203', 'COD 2122', 'AC ANTI PLAQUETAS (TROMBOCITOS)', NULL, NULL, '1990.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(331, 'LAB-0204', 'COD 3259', 'AC ANTI POLIMIOSITIS (PM-1)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(332, 'LAB-0205', 'COD 2398', 'AC ANTI RECEPTOR DE ACETIL COLINA', NULL, NULL, '1474.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(333, 'LAB-0206', 'COD 2109', 'AC ANTI RECEPTOR DE LA TSH', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(334, 'LAB-0207', 'COD 940', 'AC ANTI RIBONUCLEOPROTEINAS (RNP)', NULL, NULL, '730.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(335, 'LAB-0208', 'COD 2343', 'AC ANTI RICKETTSIA RICKETSI IGG E IGM', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(336, 'LAB-0209', 'COD 1810', 'AC ANTI RNA', NULL, NULL, '826.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(337, 'LAB-0210', 'COD 186', 'AC ANTI RUBEOLA IGG', NULL, NULL, '370.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(338, 'LAB-0211', 'COD 842', 'AC ANTI RUBEOLA IGM', NULL, NULL, '428.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(339, 'LAB-0212', 'COD 3036', 'AC ANTI SALMONELLA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(340, 'LAB-0213', 'COD 189', 'AC ANTI SMITH', NULL, NULL, '584.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(341, 'LAB-0214', 'COD 905', 'AC ANTI SSA (RO)', NULL, NULL, '586.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(342, 'LAB-0215', 'COD 906', 'AC ANTI SSB (LA)', NULL, NULL, '592.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(343, 'LAB-0216', 'COD 3037', 'AC ANTI STREPTOCOCCUS PNEUMONIAE', NULL, NULL, '9822.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(344, 'LAB-0217', 'COD 193', 'AC ANTI TOXOCARA CANIS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(345, 'LAB-0218', 'COD 836', 'AC ANTI TOXOPLASMA IGG', NULL, NULL, '364.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(346, 'LAB-0219', 'COD 194', 'AC ANTI TOXOPLASMA IGM', NULL, NULL, '370.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(347, 'LAB-0220', 'COD 3040', 'AC ANTI TRANSGLUTAMINASA TISULAR IGA', NULL, NULL, '1750.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(348, 'LAB-0221', 'COD 2621', 'AC ANTI TRANSGLUTAMINASA TISULAR IGA IGG', NULL, NULL, '1576.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(349, 'LAB-0222', 'COD 2119', 'AC ANTI TREPONEMA PALLIDUM FTA-ABS', NULL, NULL, '760.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(350, 'LAB-0223', 'COD 196', 'AC ANTI TREPONEMA PALLIDUM', NULL, NULL, '680.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(351, 'LAB-0224', 'COD 874', 'AC ANTI VARICELA IGG', NULL, NULL, '840.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(352, 'LAB-0225', 'COD 923', 'AC ANTI VARICELA IGM', NULL, NULL, '1086.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(353, 'LAB-0226', 'COD 3028', 'AC ANTI VARICELA IGG E IGM', NULL, NULL, '1884.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(354, 'LAB-0227', 'COD 3042', 'AC ANTI VIRUS DE LA INFLUENZA A Y B', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(355, 'LAB-0228', 'COD 2388', 'AC ANTI VIRUS HERPES TIPO I IGG', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(356, 'LAB-0229', 'COD 2417', 'AC ANTI VIRUS HERPES TIPO I IGM', NULL, NULL, '426.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(357, 'LAB-0230', 'COD 3111', 'AC ANTI VIRUS HERPES TIPO I IGG IGM', NULL, NULL, '864.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(358, 'LAB-0231', 'COD 867', 'AC ANTI VIRUS HERPES TIPO II IGG', NULL, NULL, '424.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(359, 'LAB-0232', 'COD 868', 'AC ANTI VIRUS HERPES TIPO II IGM', NULL, NULL, '386.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(360, 'LAB-0233', 'COD 3112', 'AC ANTI VIRUS HERPES TIPO II IGG IGM', NULL, NULL, '690.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(361, 'LAB-0234', 'COD 839', 'AC ANTI VIRUS HERPES TIPO I Y II IGM', NULL, NULL, '446.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06');
INSERT INTO `products` (`id`, `product_code`, `supplier_code`, `name`, `unit`, `quantity_available`, `price`, `discount`, `productcategory_id`, `productstatus_id`, `created_at`, `updated_at`) VALUES
(362, 'LAB-0237', 'COD 3262', 'ACETONA', NULL, NULL, '606.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(363, 'LAB-0238', 'COD 2446', 'ACIDO 5 HIDROXI INDOL ACETICO ORINA 24 H', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(364, 'LAB-0239', 'COD 3048', 'ACIDO DELTA AMINO LEVULINICO ORINA 24 H', NULL, NULL, '1412.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(365, 'LAB-0240', 'COD 50', 'ACIDO FOLICO (FOLATO)', NULL, NULL, '442.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(366, 'LAB-0241', 'COD 1243', 'ACIDO FOLICO + VITAMINA B12', NULL, NULL, '530.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(367, 'LAB-0242', 'COD 58', 'ACIDO LACTICO (LACTATO)', NULL, NULL, '888.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(368, 'LAB-0243', 'COD 3250', 'ACIDO METILMALONICO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(369, 'LAB-0244', 'COD 1274', 'ACIDO URICO EN ORINA', NULL, NULL, '76.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(370, 'LAB-0245', 'COD 1152', 'ACIDO URICO ORINA 24 H', NULL, NULL, '82.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(371, 'LAB-0246', 'COD 68', 'ACIDO VALPROICO (VALPROATO)', NULL, NULL, '402.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(372, 'LAB-0247', 'COD 1898', 'ACIDO VANILMANDELICO (VMA) ORINA', NULL, NULL, '1108.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(373, 'LAB-0248', 'COD 3052', 'ACIDOS GRASOS LIBRES', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(374, 'LAB-0249', 'COD 3055', 'ACTIVIDAD TRIPTICA EN HECES', NULL, NULL, '266.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(375, 'LAB-0250', 'COD 2556', 'ADENOSIN DEAMINASA (ADA)', NULL, NULL, '1142.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(376, 'LAB-0251', 'COD 1276', 'ADRENALINA EN ORINA 24 H', NULL, NULL, '602.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(377, 'LAB-0252', 'COD 85', 'ALBUMINA', NULL, NULL, '56.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(378, 'LAB-0253', 'COD 1278', 'ALDOLASA', NULL, NULL, '360.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(379, 'LAB-0254', 'COD 88', 'ALDOSTERONA', NULL, NULL, '866.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(380, 'LAB-0255', 'COD 1279', 'ALDOSTERONA EN ORINA', NULL, NULL, '866.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(381, 'LAB-0256', 'COD 1280', 'ALFA 1 ANTITRIPSINA', NULL, NULL, '1050.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(382, 'LAB-0257', 'COD 3057', 'ALFA 1 GLICOPROTEINA ACIDO', NULL, NULL, '2546.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(383, 'LAB-0258', 'COD 4047', 'ALFA 2 MACROGLOBULINA', NULL, NULL, '2432.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(384, 'LAB-0259', 'COD 92', 'ALFA FETOPROTEINA (AFP)', NULL, NULL, '330.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(385, 'LAB-0260', 'COD 2288', 'ALFA-TOCOFEROL (VITAMINA E)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(386, 'LAB-0261', 'COD 743', 'ALANIN AMINO TRANSFERASA (ALT/TGP)', NULL, NULL, '114.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(387, 'LAB-0262', 'COD 4270', 'ALUMINIO EN SANGRE TOTAL', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(388, 'LAB-0263', 'COD 101', 'AMILASA TOTAL (ALFA-AMILASA)', NULL, NULL, '146.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(389, 'LAB-0264', 'COD 1281', 'AMILASA TOTAL ORINA 24 H', NULL, NULL, '194.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(390, 'LAB-0265', 'COD 3062', 'AMINOACIDOS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(391, 'LAB-0266', 'COD 3103', 'AMINOACIDOS (NEONATAL)', NULL, NULL, '700.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(392, 'LAB-0267', 'COD 3061', 'AMINOACIDOS EN ORINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(393, 'LAB-0268', 'COD 105', 'AMINOFILINA (TEOFILINA)', NULL, NULL, '1154.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(394, 'LAB-0269', 'COD 124', 'AMONIO', NULL, NULL, '402.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(395, 'LAB-0270', 'COD 1975', 'ANALISIS MICROBIOLOGICO SUPERFICIES INER', NULL, NULL, '2430.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(396, 'LAB-0271', 'COD 5006', 'ANALISIS QUIMICO DE CALCULO', NULL, NULL, '1480.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(397, 'LAB-0272', 'COD 3066', 'ANDROSTENEDIOL GLUCORONIDO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(398, 'LAB-0273', 'COD 130', 'ANFETAMINAS EN ORINA', NULL, NULL, '318.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(399, 'LAB-0274', 'COD 1282', 'ANFETAMINAS EN ORINA (CONFIRMATORIA)', NULL, NULL, '2376.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(400, 'LAB-0275', 'COD 2222', 'ANGIOTENSINA ENZIMA CONVERTIDORA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(401, 'LAB-0276', 'COD 1891', 'ANTICUERPOS ANTI JO', NULL, NULL, '826.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(402, 'LAB-0277', 'COD 1283', 'ANTICOAGULANTE CIRCULATORIO LUPICO', NULL, NULL, '688.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(403, 'LAB-0278', 'COD 200', 'ANTIESTREPTOLISINAS (ASO, AEL)', NULL, NULL, '382.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(404, 'LAB-0279', 'COD 205', 'ANTIGENO CARCINOEMBRIONARIO (CEA)', NULL, NULL, '380.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(405, 'LAB-0280', 'COD 1815', 'ANTIGENO DE CHLAMYDIA URETRAL', NULL, NULL, '470.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(406, 'LAB-0281', 'COD 1292', 'ANTIGENO DE CRYPTOCOCCUS NEOFORMANS', NULL, NULL, '1426.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(407, 'LAB-0282', 'COD 2223', 'ANTIGENO CRYPTOCOCCUS NEOFORMANS EN LCR', NULL, NULL, '1550.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(408, 'LAB-0283', 'COD 2226', 'ANTIGENO ENTAMOEBA HISTOLYTICA EN HECES', NULL, NULL, '2900.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(409, 'LAB-0284', 'COD 2225', 'ANTIGENO GIARDIA LAMBLIA EN HECES', NULL, NULL, '1164.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(410, 'LAB-0285', 'COD 2224', 'ANTIGENO HELICOBACTER PYLORI EN HECES', NULL, NULL, '854.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(411, 'LAB-0286', 'COD 2160', 'ANTIGENO LEGIONELLA EN ORINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(412, 'LAB-0287', 'COD 206', 'ANTIGENO SUPERFICIE VIRUS HEPATITIS B', NULL, NULL, '350.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(413, 'LAB-0288', 'COD 825', 'ANTIGENO E VIRUS HEPATITIS B', NULL, NULL, '560.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(414, 'LAB-0289', 'COD 1105', 'AG PROSTATICO ESPECIFICO + FRACCION LIBRE', NULL, NULL, '628.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(415, 'LAB-0290', 'COD 912', 'AG PROSTATICO ESPECIFICO FRACCION LIBRE', NULL, NULL, '382.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(416, 'LAB-0291', 'COD 3241', 'AG HE4 (PROTEINA 4 EPIDIDIMO HUMANO)', NULL, NULL, '6908.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(417, 'LAB-0292', 'COD 1294', 'ANTIGENO HLA B-27', NULL, NULL, '1070.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(418, 'LAB-0293', 'COD 2898', 'AG NS1 DEL VIRUS DEL DENGUE', NULL, NULL, '1506.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(419, 'LAB-0294', 'COD 3047', 'ANTI-MICROSOMAS DE HIGADO Y RIÑON LKM-1', NULL, NULL, '1172.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(420, 'LAB-0295', 'COD 3333', 'ANTI-MPO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(421, 'LAB-0296', 'COD 2229', 'ANTITROMBINA III (CITRATADO)', NULL, NULL, '654.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(422, 'LAB-0297', 'COD 1296', 'APOLIPOPROTEINA A1', NULL, NULL, '562.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(423, 'LAB-0298', 'COD 1464', 'APOLIPOPROTEINA B', NULL, NULL, '562.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(424, 'LAB-0299', 'COD 1399', 'APOLIPOPROTEINAS A1 Y B', NULL, NULL, '990.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(425, 'LAB-0300', 'COD 2231', 'ARSENICO', NULL, NULL, '1134.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(426, 'LAB-0301', 'COD 742', 'ASPARTATO AMINO TRANSFERASA (AST)', NULL, NULL, '112.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(427, 'LAB-0302', 'COD 1297', 'AZUCARES REDUCTORES EN HECES', NULL, NULL, '104.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(428, 'LAB-0303', 'COD 2290', 'BAAR EN ESPUTO 1 MUESTRA (BACILOSCOPIA)', NULL, NULL, '304.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(429, 'LAB-0304', 'COD 2292', 'BAAR EN ESPUTO 3 MUESTRAS (BACILOSCOPIA)', NULL, NULL, '386.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(430, 'LAB-0305', 'COD 2294', 'BAAR EN LIQUIDOS BIOLOGICOS 1 MUESTRA', NULL, NULL, '210.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(431, 'LAB-0306', 'COD 1302', 'BANDAS OLIGOCLONALES LIQ CEFALORRAQUIDEO', NULL, NULL, '2224.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(432, 'LAB-0307', 'COD 866', 'BARBITURATOS EN ORINA', NULL, NULL, '332.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(433, 'LAB-0308', 'COD 1608', 'BENCENO (ACIDO FENILMERCAPTURICO)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(434, 'LAB-0309', 'COD 3263', 'BENCENO EN ORINA', NULL, NULL, '2740.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(435, 'LAB-0310', 'COD 219', 'BENZODIACEPINAS EN ORINA', NULL, NULL, '298.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(436, 'LAB-0311', 'COD 220', 'BETA 2 MICROGLOBULINA', NULL, NULL, '468.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(437, 'LAB-0312', 'COD 1468', 'BETA 2 MICROGLOBULINA ORINA 24 HRS', NULL, NULL, '758.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(438, 'LAB-0313', 'COD 3072', 'BICARBONATO', NULL, NULL, '680.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(439, 'LAB-0314', 'COD 2120', 'BICARBONATO EN ORINA', NULL, NULL, '726.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(440, 'LAB-0315', 'COD 829', 'BILIRRUBINA DIRECTA', NULL, NULL, '114.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(441, 'LAB-0316', 'COD 830', 'BILIRRUBINA INDIRECTA', NULL, NULL, '114.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(442, 'LAB-0317', 'COD 225', 'BILIRRUBINA TOTAL', NULL, NULL, '114.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(443, 'LAB-0318', 'COD 2985', 'BIOPSIA DE HUESO', NULL, NULL, '3088.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(444, 'LAB-0319', 'COD 1453', 'BIOPSIA DE ORGANOS ESPECIALES', NULL, NULL, '2552.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(445, 'LAB-0320', 'COD 1360', 'BIOPSIAS CHICAS', NULL, NULL, '880.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(446, 'LAB-0321', 'COD 1358', 'BIOPSIAS GRANDES', NULL, NULL, '1822.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(447, 'LAB-0322', 'COD 1844', 'BIOPSIAS MEDIANAS', NULL, NULL, '1366.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(448, 'LAB-0323', 'COD 1430', 'BIOTINIDASA NEONATAL', NULL, NULL, '222.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(449, 'LAB-0324', 'COD 202', 'CA 15-3 (MAMA)', NULL, NULL, '510.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(450, 'LAB-0326', 'COD 1813', 'CA 21-1 (AG CYFRA, PULMON)', NULL, NULL, '1656.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(451, 'LAB-0327', 'COD 1291', 'CA 27-29 (MAMA)', NULL, NULL, '1786.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(452, 'LAB-0328', 'COD 1293', 'CA 72-4 (COLON)', NULL, NULL, '1468.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(453, 'LAB-0329', 'COD 3068', 'CA VESICAL EN ORINA (TUMOR DE VEJIGA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(454, 'LAB-0330', 'COD 201', 'CA-125 (OVARIO)', NULL, NULL, '514.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(455, 'LAB-0331', 'COD 2635', 'CADENAS LIGERAS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(456, 'LAB-0332', 'COD 2636', 'CADENAS LIGERAS KAPPA/LAMBDA ORINA', NULL, NULL, '1206.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(457, 'LAB-0333', 'COD 3074', 'CADMIO', NULL, NULL, '1404.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(458, 'LAB-0334', 'COD 2081', 'CALCIFEROL (VIT D, 25 HIDROXI)', NULL, NULL, '828.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(459, 'LAB-0335', 'COD 238', 'CALCIO', NULL, NULL, '98.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(460, 'LAB-0336', 'COD 1595', 'CALCIO EN ORINA', NULL, NULL, '102.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(461, 'LAB-0337', 'COD 1305', 'CALCIO EN ORINA 24 HRS', NULL, NULL, '178.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(462, 'LAB-0338', 'COD 2396', 'CALCIO IONICO', NULL, NULL, '326.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(463, 'LAB-0339', 'COD 242', 'CALCITONINA', NULL, NULL, '810.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(464, 'LAB-0340', 'COD 2173', 'CALCITRIOL (VIT D 1, 25 DIHIDROXI)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(465, 'LAB-0341', 'COD 1819', 'CALCULO BILIAR (CUALITATIVO)', NULL, NULL, '1068.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(466, 'LAB-0342', 'COD 1820', 'CALCULO RENAL', NULL, NULL, '770.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(467, 'LAB-0343', 'COD 885', 'CAPACIDAD DE FIJACION DE HIERRO', NULL, NULL, '220.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(468, 'LAB-0344', 'COD 5100', 'CAPACIDAD NO SATURADA FIJACION DE HIERRO', NULL, NULL, '246.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(469, 'LAB-0345', 'COD 246', 'CAPTACION TIROIDEA (T-UPTAKE)', NULL, NULL, '208.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(470, 'LAB-0346', 'COD 247', 'CARBAMACEPINA (TEGRETOL)', NULL, NULL, '652.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(471, 'LAB-0347', 'COD 2243', 'CARGA VIRAL DE CITOMEGALOVIRUS POR PCR', NULL, NULL, '7924.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(472, 'LAB-0348', 'COD 1726', 'CARGA VIRAL DE EPSTEIN BARR POR PCR', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(473, 'LAB-0349', 'COD 2101', 'CARGA VIRAL DE HEPATITIS B POR PCR', NULL, NULL, '4872.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(474, 'LAB-0350', 'COD 1822', 'CARGA VIRAL DE HEPATITIS C POR PCR', NULL, NULL, '5614.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(475, 'LAB-0351', 'COD 1846', 'CARGA VIRAL DE HIV - 1 POR PCR', NULL, NULL, '4818.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(476, 'LAB-0352', 'COD 3485', 'CARIOTIPO DE ALTA RESOLUCION (HEPARINA)', NULL, NULL, '14352.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(477, 'LAB-0353', 'COD 2236', 'CARIOTIPO EN PRODUCTO DE ABORTO', NULL, NULL, '18894.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(478, 'LAB-0354', 'COD 2241', 'CAROTENOS', NULL, NULL, '738.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(479, 'LAB-0355', 'COD 250', 'CATECOLAMINAS TOTALES', NULL, NULL, '1598.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(480, 'LAB-0356', 'COD 1427', 'CATECOLAMINAS TOTALES ORINA 24 HRS', NULL, NULL, '1808.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(481, 'LAB-0357', 'COD 1230', 'CELULAS LE', NULL, NULL, '96.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(482, 'LAB-0358', 'COD 2988', 'CELULAS NK (CD 16 + CD 56)', NULL, NULL, '2784.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(483, 'LAB-0359', 'COD 2242', 'CERULOPLASMINA', NULL, NULL, '1940.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(484, 'LAB-0360', 'COD 2780', 'CHECK UP BASICO', NULL, NULL, '776.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(485, 'LAB-0361', 'COD 5435', 'CHECK UP CICLICA FEMENINO', NULL, NULL, '1926.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(486, 'LAB-0362', 'COD 5338', 'CHLAMYDIA T Y NEISSERIA GONORRHOEAE PCR', NULL, NULL, '1840.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(487, 'LAB-0363', 'COD 2244', 'CITOQUIMICO DE LIQUIDO CEFALORRAQUIDEO', NULL, NULL, '1206.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(488, 'LAB-0364', 'COD 3075', 'CITOQUIMICO DE LIQUIDO PERITONEAL', NULL, NULL, '694.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(489, 'LAB-0365', 'COD 3239', 'CITOQUIMICO DE LIQUIDO PLEURAL', NULL, NULL, '498.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(490, 'LAB-0366', 'COD 2245', 'CITOQUIMICO DE LIQUIDO SINOVIAL', NULL, NULL, '614.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(491, 'LAB-0367', 'COD 1827', 'CITOQUIMICO DE LIQUIDOS BIOLOGICOS', NULL, NULL, '866.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(492, 'LAB-0368', 'COD 2498', 'CITRATO', NULL, NULL, '3294.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(493, 'LAB-0369', 'COD 5058', 'CITRATOS EN ORINA', NULL, NULL, '460.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(494, 'LAB-0370', 'COD 2500', 'CITRATOS EN ORINA 24 HRS (ACIDO CITRICO)', NULL, NULL, '444.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(495, 'LAB-0371', 'COD 880', 'CK TOTAL Y CK-M', NULL, NULL, '444.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(496, 'LAB-0372', 'COD 1312', 'CLONAZEPAM (RIVOTRIL)', NULL, NULL, '3480.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(497, 'LAB-0373', 'COD 269', 'CLORO', NULL, NULL, '96.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(498, 'LAB-0374', 'COD 1521', 'CLORO EN ORINA', NULL, NULL, '114.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(499, 'LAB-0375', 'COD 1313', 'CLORO EN ORINA 24 HRS', NULL, NULL, '194.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(500, 'LAB-0376', 'COD 5307', 'FRACCION SOLUBLE TIROSINA QUINASA I', NULL, NULL, '6050.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(501, 'LAB-0377', 'COD 2183', 'COAGLUTINACION EN LIQ CEFALORRAQUIDEO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(502, 'LAB-0378', 'COD 2068', 'COBRE', NULL, NULL, '1528.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(503, 'LAB-0379', 'COD 2246', 'COBRE ORINA 24 HRS', NULL, NULL, '1198.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(504, 'LAB-0380', 'COD 279', 'COCAINA EN ORINA', NULL, NULL, '320.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(505, 'LAB-0381', 'COD 3076', 'COCAINA EN ORINA (CONFIRMATORIA)', NULL, NULL, '5450.00', NULL, 7, 1, '2021-08-06 01:18:06', '2021-08-06 01:18:06'),
(506, 'LAB-0382', 'COD 793', 'COLESTEROL DE ALTA DENSIDAD (HDL-C)', NULL, NULL, '168.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(507, 'LAB-0383', 'COD 794', 'COLESTEROL DE BAJA DENSIDAD (LDL-C)', NULL, NULL, '172.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(508, 'LAB-0384', 'COD 2247', 'COLESTEROL DE MUY BAJA DENSIDAD (VLDL-C)', NULL, NULL, '192.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(509, 'LAB-0385', 'COD 3417', 'COLIFORMES TOTALES', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(510, 'LAB-0386', 'COD 1246', 'COLINESTERASA', NULL, NULL, '256.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(511, 'LAB-0387', 'COD 289', 'COMPLEJOS INMUNES CIRCULANTES (C3D IGG)', NULL, NULL, '1438.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(512, 'LAB-0388', 'COD 2088', 'COMPLEMENTO C1Q', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(513, 'LAB-0389', 'COD 414', 'COMPLEMENTO C3', NULL, NULL, '286.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(514, 'LAB-0390', 'COD 415', 'COMPLEMENTO C4', NULL, NULL, '410.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(515, 'LAB-0391', 'COD 2249', 'COMPLEMENTO C5', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(516, 'LAB-0392', 'COD 3077', 'COMPLEMENTO HEMOLITICO AL 100%', NULL, NULL, '2576.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(517, 'LAB-0393', 'COD 1593', 'COMPLEMENTO HEMOLITICO AL 50%', NULL, NULL, '610.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(518, 'LAB-0394', 'COD 1315', 'COOMBS DIRECTO', NULL, NULL, '186.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(519, 'LAB-0395', 'COD 1317', 'COPROCULTIVO', NULL, NULL, '1026.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(520, 'LAB-0396', 'COD 1318', 'COPROLOGICO', NULL, NULL, '170.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(521, 'LAB-0397', 'COD 1319', 'COPROPARASITOSCOPICO 1 MUESTRA', NULL, NULL, '86.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(522, 'LAB-0398', 'COD 1828', 'COPROPARASITOSCOPICO 2 MUESTRAS', NULL, NULL, '140.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(523, 'LAB-0399', 'COD 1320', 'COPROPARASITOSCOPICO 3 MUESTRAS', NULL, NULL, '232.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(524, 'LAB-0400', 'COD 1251', 'CORTISOL EN ORINA 24 HRS', NULL, NULL, '376.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(525, 'LAB-0401', 'COD 1083', 'CORTISOL MATUTINO (7 A 10 HRS)', NULL, NULL, '262.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(526, 'LAB-0402', 'COD 3279', 'CORTISOL MATUTINO Y VESPERTINO', NULL, NULL, '494.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(527, 'LAB-0403', 'COD 2092', 'CORTISOL VESPERTINO (16 A 18 HRS)', NULL, NULL, '270.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(528, 'LAB-0404', 'COD 296', 'CREATIN FOSFOQUINASA (CK TOTAL)', NULL, NULL, '248.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(529, 'LAB-0405', 'COD 1201', 'CREATIN FOSFOQUINASA FRACCION MB CK-MB', NULL, NULL, '308.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(530, 'LAB-0406', 'COD 1683', 'CREATIN FOSFOQUINASA ISOENZIMAS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(531, 'LAB-0407', 'COD 304', 'CREATININA', NULL, NULL, '56.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(532, 'LAB-0408', 'COD 1024', 'CREATININA EN ORINA', NULL, NULL, '82.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(533, 'LAB-0409', 'COD 1252', 'CREATININA EN ORINA 24 HRS', NULL, NULL, '162.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(534, 'LAB-0410', 'COD 1323', 'CRIOAGLUTININAS', NULL, NULL, '366.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(535, 'LAB-0411', 'COD 1831', 'CROMO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(536, 'LAB-0412', 'COD 3079', 'CROMO EN ORINA', NULL, NULL, '1162.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(537, 'LAB-0413', 'COD 2368', 'CROMOGRANINA A', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(538, 'LAB-0414', 'COD 2196', 'CROMOSOMA FILADELFIA T (9;22) P210', NULL, NULL, '5104.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(539, 'LAB-0415', 'COD 2458', 'C-TELOPEPTIDOS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(540, 'LAB-0416', 'COD 2240', 'CUADRUPLE MARCADOR MATERNO PRENATAL', NULL, NULL, '4710.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(541, 'LAB-0417', 'COD 3222', 'CUENTA DE ADDIS EN ORINA 24 HRS', NULL, NULL, '322.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(542, 'LAB-0418', 'COD 3573', 'CULTIVO AMBIENTAL', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(543, 'LAB-0419', 'COD 2155', 'CULTIVO DE AGUA', NULL, NULL, '2122.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(544, 'LAB-0420', 'COD 3136', 'CULTIVO DE ALIMENTOS COMPLETO', NULL, NULL, '5364.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(545, 'LAB-0421', 'COD 2061', 'CULTIVO DE ANAEROBIOS', NULL, NULL, '1160.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(546, 'LAB-0422', 'COD 2253', 'CULTIVO DE CATETER O SONDA', NULL, NULL, '398.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(547, 'LAB-0423', 'COD 1325', 'CULTIVO DE ESPUTO', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(548, 'LAB-0424', 'COD 3280', 'CULTIVO DE EXUDADO CONJUNTIVAL', NULL, NULL, '460.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(549, 'LAB-0425', 'COD 1731', 'CULTIVO DE EXUDADO DE PREPUCIO', NULL, NULL, '460.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(550, 'LAB-0426', 'COD 1338', 'CULTIVO DE EXUDADO FARINGEO', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(551, 'LAB-0427', 'COD 3229', 'CULTIVO DE EXUDADO NASAL (2 NARINAS)', NULL, NULL, '1244.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(552, 'LAB-0428', 'COD 1339', 'CULTIVO DE EXUDADO NASAL (1 NARINA)', NULL, NULL, '622.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(553, 'LAB-0429', 'COD 1340', 'CULTIVO DE EXUDADO NASOFARINGEO', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(554, 'LAB-0430', 'COD 1335', 'CULTIVO DE EXUDADO OCULAR', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(555, 'LAB-0431', 'COD 1418', 'CULTIVO DE EXUDAD OTICO', NULL, NULL, '460.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(556, 'LAB-0432', 'COD 1682', 'CULTIVO DE EXUDADO VULVAR', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(557, 'LAB-0433', 'COD 1333', 'CULTIVO DE EXUDADO URETRAL', NULL, NULL, '414.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(558, 'LAB-0434', 'COD 1327', 'CULTIVO DE HERIDAS Y ABSCESOS ABIERTOS', NULL, NULL, '1018.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(559, 'LAB-0435', 'COD 1328', 'CULTIVO DE HONGOS', NULL, NULL, '438.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(560, 'LAB-0436', 'COD 1330', 'CULTIVO DE LIQUIDO CEFALORRAQUIDEO', NULL, NULL, '598.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(561, 'LAB-0437', 'COD 1417', 'CULTIVO DE LIQUIDOS BIOLOGICOS', NULL, NULL, '696.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(562, 'LAB-0438', 'COD 1657', 'CULTIVO DE SUPERFICIES VIVAS', NULL, NULL, '1216.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(563, 'LAB-0439', 'COD 1329', 'CULTIVO DE MYCOBACTERIUM', NULL, NULL, '1782.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(564, 'LAB-0440', 'COD 5287', 'CULTIVO DE MYCOBATERIUM EN EXPECTORACION', NULL, NULL, '3738.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(565, 'LAB-0441', 'COD 1355', 'CULTIVO DE SANGRE AEROBIO', NULL, NULL, '926.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(566, 'LAB-0442', 'COD 3216', 'CULTIVO DE SANGRE ANAEROBEO', NULL, NULL, '1164.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(567, 'LAB-0443', 'COD 3163', 'CURVA DE INSULINA DE 2 HORAS', NULL, NULL, '1000.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(568, 'LAB-0444', 'COD 2438', 'CURVA DE INSULINA DE 3 HRS', NULL, NULL, '1252.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(569, 'LAB-0445', 'COD 1832', 'CURVA DE TOLERANCIA A LA GLUCOSA 3 HRS', NULL, NULL, '278.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(570, 'LAB-0446', 'COD 2299', 'CURVA DE TOLERANCIA A LA GLUCOSA 4 HRS', NULL, NULL, '334.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(571, 'LAB-0447', 'COD 1833', 'CURVA DE TOLERANCIA A LA GLUCOSA 5 HRS', NULL, NULL, '390.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(572, 'LAB-0448', 'COD 316', 'DEHIDROEPIANDROSTERONA (DHEA)', NULL, NULL, '384.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(573, 'LAB-0449', 'COD 939', 'DEHIDROTESTOSTERONA', NULL, NULL, '804.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(574, 'LAB-0450', 'COD 326', 'DEPURACION DE CREATININA', NULL, NULL, '170.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(575, 'LAB-0451', 'COD 1032', 'DEPURACION DE UREA', NULL, NULL, '154.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(576, 'LAB-0452', 'COD 330', 'DESHIDROGENASA LACTICA (LDH)', NULL, NULL, '118.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(577, 'LAB-0453', 'COD 2994', 'DESOXIPIRIDOLINA (PYRILINKS-D) EN ORINA', NULL, NULL, '2594.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(578, 'LAB-0454', 'COD 3298', 'DETECCION DE MUTACION GEN EGFR (PULMON)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(579, 'LAB-0455', 'COD 4503', 'IGE ANTI-POLEN RAPE', NULL, NULL, '675.12', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(580, 'LAB-0456', 'COD 5325 COD 5324', 'DETECCION VPH ALTO RIESGO POR PCR', NULL, NULL, '2684.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(581, 'LAB-0457', 'COD 3297', 'DETECCION GEN K-RAS COLON RECTO APENDICE', NULL, NULL, '45724.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(582, 'LAB-0458', 'COD 5055', 'DETECCION VIRUS ZIKA POR PCR', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(583, 'LAB-0459', 'COD 348', 'DIGOXINA', NULL, NULL, '518.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(584, 'LAB-0460', 'COD 1471', 'DIMERO D', NULL, NULL, '788.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(585, 'LAB-0461', 'COD 355', 'DIOXIDO DE CARBONO', NULL, NULL, '86.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(586, 'LAB-0462', 'COD 2447', 'DOBLE MARCADOR MATERNO PRENAT CON INT', NULL, NULL, '3498.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(587, 'LAB-0463', 'COD 2238', 'DOBLE MARCADOR MATERNO PRENAT S/INT', NULL, NULL, '1412.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(588, 'LAB-0464', 'COD 1362', 'DOPAMINA', NULL, NULL, '2198.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(589, 'LAB-0465', 'COD 2116', 'D-XILOSA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(590, 'LAB-0466', 'COD 2389', 'ELECTROFORESIS DE HEMOGLOBINA', NULL, NULL, '966.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(591, 'LAB-0467', 'COD 797', 'ELECTROFORESIS DE LIPOPROTEINAS', NULL, NULL, '730.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(592, 'LAB-0468', 'COD 798', 'ELECTROFORESIS DE PROTEINAS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(593, 'LAB-0469', 'COD 2146', 'ELECTROFORESIS DE PROTEINAS ORINA 24 HRS', NULL, NULL, '604.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(594, 'LAB-0470', 'COD 2979', 'ELECTROLITOS EN SUDOR (NA, CL)', NULL, NULL, '768.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(595, 'LAB-0471', 'COD 1748', 'ELECTROLITOS (NA, K, CL, CO2)', NULL, NULL, '344.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(596, 'LAB-0472', 'COD 4321', 'ELECTROLITOS (NA, K, CL, CA)', NULL, NULL, '336.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(597, 'LAB-0473', 'COD 4609', 'ELECTROLITOS (NA, CL, K, P)', NULL, NULL, '336.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(598, 'LAB-0474', 'COD 1834', 'ELECTROLITOS (NA, K, CL, CA, P, MG)', NULL, NULL, '444.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(599, 'LAB-0475', 'COD 1342', 'ELECTROLITOS ORINA 24 HRS (NA, K, CL)', NULL, NULL, '528.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(600, 'LAB-0476', 'COD 3479', 'ENFERMEDADES TRANSMISION SEXUAL PCR', NULL, NULL, '4906.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(601, 'LAB-0477', 'COD 2255', 'ENOLASA NEURONAL ESPECIFICA', NULL, NULL, '1648.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(602, 'LAB-0478', 'COD 1311', 'EOSINOFILOS EN MOCO NASAL', NULL, NULL, '74.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(603, 'LAB-0479', 'COD 1836', 'ERITROPOYETINA', NULL, NULL, '996.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(604, 'LAB-0480', 'COD 1336', 'ESPERMOCULTIVO (CULTIVO ESPERMA)', NULL, NULL, '408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(605, 'LAB-0481', 'COD 4442', 'ESTERES DE COLESTEROL', NULL, NULL, '890.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(606, 'LAB-0482', 'COD 4443', 'ESTRADIOL EN ORINA 24 HRS', NULL, NULL, '324.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(607, 'LAB-0483', 'COD 370', 'ESTRIOL LIBRE', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(608, 'LAB-0484', 'COD 383', 'ESTRONA', NULL, NULL, '650.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(609, 'LAB-0485', 'COD 384', 'ETANOL (ALCOHOL ETILICO)', NULL, NULL, '418.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(610, 'LAB-0486', 'COD 2184', 'ETANOL EN ORINA', NULL, NULL, '418.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(611, 'LAB-0487', 'COD 2259', 'FACTOR IX COAGULACION ANTIHEMOFILICO B', NULL, NULL, '930.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(612, 'LAB-0488', 'COD 390', 'FACTOR REUMATOIDE', NULL, NULL, '228.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(613, 'LAB-0489', 'COD 2117', 'FACTOR V DE LA COAGULACION', NULL, NULL, '836.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(614, 'LAB-0490', 'COD 2260', 'FACTOR VII COAGULACION (ESTABLE)', NULL, NULL, '1696.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(615, 'LAB-0491', 'COD 3603', 'FACTOR VIII C INHIBIDOR', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(616, 'LAB-0492', 'COD 1837', 'FACTOR VIII COAGULACION ANTIHEMOFILICO A', NULL, NULL, '970.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(617, 'LAB-0493', 'COD 2261', 'FACTOR X COAGULACION AUTOPROTROMBINA III', NULL, NULL, '874.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(618, 'LAB-0494', 'COD 3083', 'FACTOR XI DE LA COAGULACION', NULL, NULL, '1050.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(619, 'LAB-0495', 'COD 2262', 'FACTOR XII DE LA COAGULACION', NULL, NULL, '1074.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(620, 'LAB-0496', 'COD 2263', 'FACTOR XIII COAGULACION ESTAB FIBRINA', NULL, NULL, '832.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(621, 'LAB-0497', 'COD 1816', 'FACTOR VON WILLEBRAND (ANTIGENO)', NULL, NULL, '1352.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(622, 'LAB-0498', 'COD 3267', 'FACTOR VON WILLEBRAND (FUNCIONAL)', NULL, NULL, '1728.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(623, 'LAB-0499', 'COD 1205', 'FENILALANINA NEONATAL', NULL, NULL, '268.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(624, 'LAB-0500', 'COD 345', 'FENITOINA (EPAMIN DILANTIL NUCTANE)', NULL, NULL, '546.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(625, 'LAB-0501', 'COD 391', 'FENOBARBITAL TOTAL', NULL, NULL, '746.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(626, 'LAB-0502', 'COD 394', 'FERRITINA', NULL, NULL, '316.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(627, 'LAB-0503', 'COD 2958', 'FERRITINA Y TRANSFERRINA', NULL, NULL, '496.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(628, 'LAB-0504', 'COD 1346', 'FIBRINOGENO', NULL, NULL, '508.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(629, 'LAB-0505', 'COD 3477', 'FIBROMAX', NULL, NULL, '15620.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(630, 'LAB-0506', 'COD 2121', 'FIBROTEST ACTITEST', NULL, NULL, '10704.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(631, 'LAB-0507', 'COD 876', 'FOSFATASA ACIDA FRACCION PROSTATICA', NULL, NULL, '414.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(632, 'LAB-0508', 'COD 399', 'FOSFATASA ACIDA TOTAL', NULL, NULL, '132.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(633, 'LAB-0509', 'COD 401', 'FOSFATASA ACIDA TOTAL Y FRACC PROSTATICA', NULL, NULL, '492.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(634, 'LAB-0510', 'COD 2266', 'FOSFATASA ALCALINA LEUCOCITARIA', NULL, NULL, '552.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(635, 'LAB-0511', 'COD 402', 'FOSFATASA ALCALINA TOTAL', NULL, NULL, '92.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(636, 'LAB-0512', 'COD 2287', 'FOSFATO DE PIRIDOXAL (VIT B6)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(637, 'LAB-0513', 'COD 406', 'FOSFOLIPIDOS', NULL, NULL, '210.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(638, 'LAB-0514', 'COD 408', 'FOSFORO', NULL, NULL, '108.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(639, 'LAB-0515', 'COD 4579', 'FOSFORO EN ORINA', NULL, NULL, '104.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(640, 'LAB-0516', 'COD 1253', 'FOSFORO EN ORINA 24 HRS', NULL, NULL, '184.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(641, 'LAB-0517', 'COD 2163', 'FRACCION BETA DE HGC POR RIA', NULL, NULL, '1234.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(642, 'LAB-0518', 'COD 2892', 'FRAGILIDAD OSMOTICA DE ERITROCITOS', NULL, NULL, '652.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(643, 'LAB-0519', 'COD 2267', 'FRUCTOSAMINA', NULL, NULL, '1270.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(644, 'LAB-0520', 'COD 2363', 'GALACTOSA URIDIL TRANSFERASA NEONATAL', NULL, NULL, '300.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(645, 'LAB-0521', 'COD 872', 'GAMMA GLUTAMIL TRANSP', NULL, NULL, '106.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(646, 'LAB-0522', 'COD 1351', 'GASTRINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(647, 'LAB-0523', 'COD 2268', 'GENOTIPO DE HEPATITIS C', NULL, NULL, '6904.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(648, 'LAB-0524', 'COD 1841', 'GLOBULINA FIJADORA DE HORMONA SEXUAL', NULL, NULL, '996.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(649, 'LAB-0525', 'COD 448', 'GLOBULINAS TOTALES', NULL, NULL, '156.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(650, 'LAB-0526', 'COD 2981', 'GLUCAGON', NULL, NULL, '4252.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(651, 'LAB-0527', 'COD 1428', 'GLUCOSA 6 FOSFATO DESHIDROGENASA', NULL, NULL, '1284.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(652, 'LAB-0528', 'COD 2391', 'GLUCOSA 6 FOSFATO DESHIDROGENASA NEONATA', NULL, NULL, '382.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(653, 'LAB-0529', 'COD 1842', 'GLUCOSA BASAL Y POSTPRANDIAL', NULL, NULL, '112.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(654, 'LAB-0530', 'COD 1257', 'NITROGENO UREICO EN ORINA', NULL, NULL, '108.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(655, 'LAB-0531', 'COD 1353', 'GLUCOSA EN ORINA', NULL, NULL, '84.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(656, 'LAB-0532', 'COD 2188', 'GLUCOSA POST-CARGA', NULL, NULL, '64.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(657, 'LAB-0533', 'COD 2024', 'GLUCOSA POSTPRANDIAL', NULL, NULL, '62.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(658, 'LAB-0534', 'COD 4117', 'GOTA GRUESA (PLASMODIUM SP)', NULL, NULL, '158.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(659, 'LAB-0535', 'COD 2992', 'GRASAS EN HECES (CUALITATIVA)', NULL, NULL, '580.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(660, 'LAB-0536', 'COD 1843', 'HAPTOGLOBINA', NULL, NULL, '574.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(661, 'LAB-0537', 'COD 3084', 'HEMOGLOBINA LIBRE', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(662, 'LAB-0538', 'COD 2232', 'HEPARINA (CARBOXIHEMOGLOBINA)', NULL, NULL, '1062.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(663, 'LAB-0539', 'COD 1465', 'HEPATITIS C CONFIRMATORIA (RIBA)', NULL, NULL, '6976.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(664, 'LAB-0540', 'COD 3092', 'HERPES TIPO I Y II POR PCR CUALITATIVA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(665, 'LAB-0541', 'COD 474', 'HIERRO', NULL, NULL, '118.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(666, 'LAB-0542', 'COD 1620', 'HOMOCISTEINA', NULL, NULL, '966.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(667, 'LAB-0543', 'COD 478', 'HORMONA ADRENOCORTICOTROFICA', NULL, NULL, '546.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(668, 'LAB-0544', 'COD 2083', 'HORMONA ANTIDIURETICA', NULL, NULL, '3944.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(669, 'LAB-0545', 'COD 1974', 'HORMONA DEL CRECIMIENTO POST-ESTIMULO', NULL, NULL, '346.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(670, 'LAB-0546', 'COD 481', 'HORMONA DEL CRECIMIENTO', NULL, NULL, '346.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(671, 'LAB-0547', 'COD 1847', 'HORMONA CRECIMIENTO BASAL Y POSTESTIMULO', NULL, NULL, '622.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(672, 'LAB-0548', 'COD 3154', 'HGC TOTAL', NULL, NULL, '406.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(673, 'LAB-0549', 'COD 517', 'HORMONA PARATIROIDEA INTACTA (PTHI)', NULL, NULL, '494.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(674, 'LAB-0550', 'COD 2103', 'IDENTIFICACION/ANTIBIOGRAMA DE BACTERIAS', NULL, NULL, '1136.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(675, 'LAB-0551', 'COD 5329', 'IDENTIFICACION/ANTIBIOGRAMA LEVADURAS', NULL, NULL, '1136.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(676, 'LAB-0552', 'COD 4431', 'IGE ANTI-CASEINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(677, 'LAB-0553', 'COD 4470', 'IGE ANTI-CLARA DE HUEVO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(678, 'LAB-0554', 'COD 4400', 'IGE ANTI-DERMATOPHAGOIDES FARINAE', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(679, 'LAB-0555', 'COD 4410', 'IGE ANTI-DERMATOPHAGOIDES PTERONYSSINUS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(680, 'LAB-0556', 'COD 4474', 'IGE ANTI-GLUTEN', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(681, 'LAB-0557', 'COD 4475', 'IGE ANTI-HUEVO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(682, 'LAB-0558', 'COD 4477', 'IGE ANTI-LECHE DE VACA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(683, 'LAB-0559', 'COD 4498', 'IGE ANTI-LECHE HERVIDA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(684, 'LAB-0560', 'COD 4513', 'IGE ANTI-PASTO PERENNE', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(685, 'LAB-0561', 'COD 4395', 'IGE ANTI-PENICILINA G', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(686, 'LAB-0562', 'COD 4387', 'IGE ANTI-ROBLE', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(687, 'LAB-0563', 'COD 4489', 'IGE ANTI-SOYA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(688, 'LAB-0564', 'COD 4491', 'IGE ANTI-TRIGO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(689, 'LAB-0565', 'COD 4493', 'IGE ANTI-YEMA DE HUEVO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(690, 'LAB-0566', 'COD 2277', 'IGF UNIDA A PROTEINA 3 (GFBP3)', NULL, NULL, '1408.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(691, 'LAB-0567', 'COD 821', 'INDICE DE TIROXINA LIBRE', NULL, NULL, '266.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(692, 'LAB-0568', 'COD 1919', 'INFLUENZA AH1N1 EN EXUDADO CONFIRMATORIO', NULL, NULL, '12230.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(693, 'LAB-0569', 'COD 5063', 'INFLUENZA TIPO A Y B (PRUEBA RAPIDA)', NULL, NULL, '1606.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(694, 'LAB-0570', 'COD 1848', 'INHIBINA A', NULL, NULL, '2136.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(695, 'LAB-0571', 'COD 1522', 'INHIBINA B', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(696, 'LAB-0572', 'COD 2153', 'INMUNOFENOTIPO PARA LEUCEMIAS', NULL, NULL, '7196.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(697, 'LAB-0573', 'COD 2993', 'INMUNOFIJACION DE PROTEINAS', NULL, NULL, '2900.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(698, 'LAB-0574', 'COD 3521', 'INMUNOFIJACION DE PROTEINAS EN ORINA', NULL, NULL, '2950.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(699, 'LAB-0575', 'COD 530', 'INMUNOGLOBULINA A (IGA)', NULL, NULL, '284.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(700, 'LAB-0576', 'COD 2272', 'IGA SUBCLASES 1 Y 2', NULL, NULL, '4914.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(701, 'LAB-0577', 'COD 2392', 'INMUNOGLOBULINA D (IGD)', NULL, NULL, '444.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(702, 'LAB-0578', 'COD 538', 'INMUNOGLOBULINA E (IGE)', NULL, NULL, '268.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(703, 'LAB-0579', 'COD 546', 'INMUNOGLOBULINA G (IGG)', NULL, NULL, '268.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(704, 'LAB-0580', 'COD 2273', 'IGG SUBCLASES 1,2,3 Y 4', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(705, 'LAB-0581', 'COD 552', 'INMUNOGLOBULINA M (IGM)', NULL, NULL, '268.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(706, 'LAB-0582', 'COD 1850', 'INSULINA BASAL Y POSTPRANDIAL', NULL, NULL, '500.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(707, 'LAB-0583', 'COD 2274', 'INSULINA POSTCARGA', NULL, NULL, '278.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(708, 'LAB-0584', 'COD 1973', 'INSULINA POSTPRANDIAL', NULL, NULL, '278.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(709, 'LAB-0585', 'COD 2254', 'ISOENZIMAS DE DESHIDROGENASA LACTICA', NULL, NULL, '2204.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(710, 'LAB-0587', 'COD 2099', 'LAMICTAL (LAMOTRIGINA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(711, 'LAB-0588', 'COD 1605', 'LEPTINA', NULL, NULL, '1110.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(712, 'LAB-0589', 'COD 1310', 'LEUCOCITOS EN MOCO FECAL', NULL, NULL, '158.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(713, 'LAB-0590', 'COD 2195', 'LEVETIRACETAM (KEPPRA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(714, 'LAB-0591', 'COD 3310', 'LINFOCITOS CD-2', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(715, 'LAB-0592', 'COD 3164', 'LINFOCITOS CD-3', NULL, NULL, '3062.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(716, 'LAB-0593', 'COD 3606', 'LINFOCITOS CD-4', NULL, NULL, '3062.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(717, 'LAB-0594', 'COD 3151', 'LINFOCITOS CD-5', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(718, 'LAB-0595', 'COD 3311', 'LINFOCITOS CD-7', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(719, 'LAB-0596', 'COD 3622', 'LINFOCITOS CD-8', NULL, NULL, '3062.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(720, 'LAB-0597', 'COD 3152', 'LINFOCITOS CD-10', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(721, 'LAB-0600', 'COD 3165', 'LINFOCITOS CD-13', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(722, 'LAB-0601', 'COD 3166', 'LINFOCITOS CD-14', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(723, 'LAB-0602', 'COD 3315', 'LINFOCITOS CD-15', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07');
INSERT INTO `products` (`id`, `product_code`, `supplier_code`, `name`, `unit`, `quantity_available`, `price`, `discount`, `productcategory_id`, `productstatus_id`, `created_at`, `updated_at`) VALUES
(724, 'LAB-0603', 'COD 3316', 'LINFOCITOS CD-19', NULL, NULL, '2784.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(725, 'LAB-0604', 'COD 3317', 'LINFOCITOS CD-20', NULL, NULL, '1032.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(726, 'LAB-0605', 'COD 3319', 'LINFOCITOS CD-22', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(727, 'LAB-0606', 'COD 3320', 'LINFOCITOS CD-23', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(728, 'LAB-0607', 'COD 3321', 'LINFOCITOS CD-25', NULL, NULL, '3138.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(729, 'LAB-0608', 'COD 3168', 'LINFOCITOS CD-33', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(730, 'LAB-0609', 'COD 3322', 'LINFOCITOS CD-34', NULL, NULL, '2030.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(731, 'LAB-0610', 'COD 3323', 'LINFOCITOS CD-38', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(732, 'LAB-0611', 'COD 3324', 'LINFOCITOS CD-41 A', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(733, 'LAB-0612', 'COD 3325', 'LINFOCITOS CD-42 A', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(734, 'LAB-0613', 'COD 3326', 'LINFOCITOS CD-45', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(735, 'LAB-0614', 'COD 3329', 'LINFOCITOS CD-61', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(736, 'LAB-0615', 'COD 3330', 'LINFOCITOS CD-62', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(737, 'LAB-0616', 'COD 3192', 'LINFOCITOS CD-79', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(738, 'LAB-0617', 'COD 3132', 'LINFOCITOS CD-4 Y CD-8', NULL, NULL, '2668.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(739, 'LAB-0618', 'COD 2104', 'LINFOCITOS CD3 CD4 Y CD8', NULL, NULL, '3062.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(740, 'LAB-0619', 'COD 3219', 'LINFOCITOS CD3 CD4 CD8 Y CD19', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(741, 'LAB-0620', 'COD 3218', 'LINFOCITOS CD3 CD4 CD8 Y CD45', NULL, NULL, '2668.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(742, 'LAB-0621', 'COD 2108', 'LINFOCITOS CD3,4,8,16,19,45 Y 56', NULL, NULL, '5846.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(743, 'LAB-0622', 'COD 2198', 'LINFOCITOS CD19 Y CD20', NULL, NULL, '2412.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(744, 'LAB-0623', 'COD 3332', 'LINFOCITOS CD-W29', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(745, 'LAB-0624', 'COD 573', 'LIPASA', NULL, NULL, '240.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(746, 'LAB-0625', 'COD 792', 'LIPIDOS TOTALES', NULL, NULL, '156.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(747, 'LAB-0626', 'COD 3305', 'LIPOPROTEINA A', NULL, NULL, '2830.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(748, 'LAB-0627', 'COD 4362', 'LISOZIMA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(749, 'LAB-0628', 'COD 588', 'LITIO', NULL, NULL, '398.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(750, 'LAB-0629', 'COD 590', 'MAGNESIO', NULL, NULL, '154.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(751, 'LAB-0630', 'COD 4580', 'MAGNESIO EN ORINA', NULL, NULL, '168.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(752, 'LAB-0631', 'COD 1598', 'MAGNESIO EN ORINA 24 HRS', NULL, NULL, '248.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(753, 'LAB-0632', 'COD 244', 'MARIGUANA EN ORINA', NULL, NULL, '312.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(754, 'LAB-0633', 'COD 1306', 'MARIGUANA EN ORINA (CONFIRMATORIA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(755, 'LAB-0634', 'COD 2281', 'MERCURIO', NULL, NULL, '1328.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(756, 'LAB-0635', 'COD 2175', 'METANEFRINAS TOTALES EN ORINA 24 HRS', NULL, NULL, '1600.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(757, 'LAB-0636', 'COD 1930', 'METANFETAMINAS EN ORINA', NULL, NULL, '1630.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(758, 'LAB-0637', 'COD 602', 'MICROALBUMINA EN ORINA 24 HRS', NULL, NULL, '424.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(759, 'LAB-0638', 'COD 2283', 'MICROALBUMINA EN MUESTRA OCASIONAL', NULL, NULL, '334.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(760, 'LAB-0639', 'COD 1853', 'MIOGLOBINA', NULL, NULL, '1102.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(761, 'LAB-0642', 'COD 2485', 'MUTACION 20210 GA PROTROMBINA', NULL, NULL, '4854.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(762, 'LAB-0643', 'COD 2197', 'MUTACION LEIDEN (FACTOR V)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(763, 'LAB-0644', 'COD 3220', 'MUTACION MTHFR 677-C', NULL, NULL, '5196.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(764, 'LAB-0645', 'COD 658', 'MYSOLINE (PRIMIDONA)', NULL, NULL, '2220.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(765, 'LAB-0646', 'COD 1854', 'MYCOBACTERIUM TUBERCULOSIS PCR CUALITATI', NULL, NULL, '3312.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(766, 'LAB-0647', 'COD 3173', 'NEISSERIA GONORRHOEAE PCR CUALITATIVA', NULL, NULL, '1834.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(767, 'LAB-0648', 'COD 1287', 'NICOTINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(768, 'LAB-0649', 'COD 3237', 'NIQUEL (HEPARINA)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(769, 'LAB-0650', 'COD 615', 'NITROGENO UREICO', NULL, NULL, '62.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(770, 'LAB-0651', 'COD 1361', 'NITROGENO UREICO ORINA 24 HRS', NULL, NULL, '170.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(771, 'LAB-0652', 'COD 4449', 'NORADRENALINA ORINA 24 HRS', NULL, NULL, '1330.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(772, 'LAB-0653', 'COD 3002', 'N-TELOPEPTIDOS ORINA 24 HRS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(773, 'LAB-0654', 'COD 2341', 'OSMOLARIDAD URINARIA', NULL, NULL, '436.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(774, 'LAB-0655', 'COD 4004', 'OSMOLARIDAD URINARIA 24 HRS', NULL, NULL, '574.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(775, 'LAB-0656', 'COD 2983', 'OSMOLARIDAD SERICA', NULL, NULL, '268.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(776, 'LAB-0657', 'COD 1839', 'OSTASA (FOSFATASA ALCALINA FRACC OSEA)', NULL, NULL, '1300.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(777, 'LAB-0658', 'COD 623', 'OSTEOCALCINA', NULL, NULL, '1096.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(778, 'LAB-0659', 'COD 2497', 'OXALATO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(779, 'LAB-0660', 'COD 2997', 'OXALATOS ORINA 24 HRS', NULL, NULL, '674.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(780, 'LAB-0661', 'COD 1660', 'OXCARBAZEPINA (TRILEPTAL)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(781, 'LAB-0662', 'COD 1826', 'PAPANICOLAOU LIQUIDOS BIOLOGICOS DIVERSO', NULL, NULL, '686.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(782, 'LAB-0663', 'COD 3275', 'PAPANICOLAOU DE ESPUTO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(783, 'LAB-0664', 'COD 3268', 'PAPANICOLAOU DE LIQUIDO ASCITICO', NULL, NULL, '686.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(784, 'LAB-0665', 'COD 3276', 'PAPANICOLAOU DE LIQUIDO CEFALORRAQUIDEO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(785, 'LAB-0666', 'COD 4104', 'PAPANICOLAOU DE LIQUIDO PERITONEAL', NULL, NULL, '686.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(786, 'LAB-0667', 'COD 3269', 'PAPANICOLAOU DE LIQUIDO PLEURAL', NULL, NULL, '686.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(787, 'LAB-0668', 'COD 3271', 'PAPANICOLAOU DE ORINA', NULL, NULL, '686.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(788, 'LAB-0669', 'COD 3274', 'PAPANICOLAOU DE SECRECION MAMARIA', NULL, NULL, '686.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(789, 'LAB-0670', 'COD 1525', 'PAPANICOLAOU DE SECRECION URETRAL', NULL, NULL, '668.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(790, 'LAB-0671', 'COD 1867', 'PAPP (PROTEINA PLACENTARIA)', NULL, NULL, '1278.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(791, 'LAB-0672', 'COD 3300', 'PCR CUALITATIVA BCR-ABL (TRASLOC 9;22)', NULL, NULL, '5118.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(792, 'LAB-0673', 'COD 4450', 'PCR CUALITATIVA CITOMEGALOVIRUS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(793, 'LAB-0674', 'COD 3302', 'PCR CUALITATIVA PARA JAK2', NULL, NULL, '7654.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(794, 'LAB-0675', 'COD 3301', 'PCR CUANTITATIVA BCR-ABL (TRASLOC 9;22)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(795, 'LAB-0676', 'COD 5096', 'PCR PARA DETECCION DE DENGUE', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(796, 'LAB-0677', 'COD 627', 'PEPTIDO C', NULL, NULL, '654.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(797, 'LAB-0679', 'COD 2071', 'PEPTIDO C POSTPRANDIAL', NULL, NULL, '674.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(798, 'LAB-0680', 'COD 2082', 'PEPTIDO NATRIURETICO CEREBRAL', NULL, NULL, '1730.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(799, 'LAB-0681', 'COD 1270', 'PERFIL CARDIACO', NULL, NULL, '462.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(800, 'LAB-0682', 'COD 3476', 'PERFIL CARDIOVASCULAR', NULL, NULL, '3860.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(801, 'LAB-0683', 'COD 1806', 'PERFIL DE AC ANTI-ENA (SSA SSB RNP SM)', NULL, NULL, '1948.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(802, 'LAB-0684', 'COD 1812', 'PERFIL DE AC ANTI-TIROIDES', NULL, NULL, '604.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(803, 'LAB-0685', 'COD 1366', 'PERFIL DE ALERGIA ALIMENTICIA', NULL, NULL, '4570.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(804, 'LAB-0686', 'COD 1367', 'PERFIL DE ALERGIA INHALATORIA', NULL, NULL, '4570.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(805, 'LAB-0687', 'COD 1217', 'PERFIL DE ANDROGENOS BASICO', NULL, NULL, '922.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(806, 'LAB-0688', 'COD 1857', 'PERFIL DE ANDROGENOS COMPLETO', NULL, NULL, '1914.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(807, 'LAB-0689', 'COD 799', 'PERFIL DE ANDROGENOS INTERMEDIO', NULL, NULL, '1472.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(808, 'LAB-0690', 'COD 1111', 'PERFIL DE ANEMIA', NULL, NULL, '1092.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(809, 'LAB-0691', 'COD 1085', 'PERFIL DE BILIRRUBINAS', NULL, NULL, '132.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(810, 'LAB-0692', 'COD 1404', 'PERFIL DE CATECOLAMINAS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(811, 'LAB-0693', 'COD 1405', 'PERFIL DE CATECOLAMINAS EN ORINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(812, 'LAB-0694', 'COD 985', 'PERFIL DE CLIMATERIO COMPLETO', NULL, NULL, '1692.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(813, 'LAB-0695', 'COD 892', 'PERFIL DE COLESTEROL', NULL, NULL, '302.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(814, 'LAB-0696', 'COD 3124', 'PERFIL DE COMPLEMENTOS C3 C4 Y CH50', NULL, NULL, '910.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(815, 'LAB-0697', 'COD 1369', 'PERFIL DE DIABETES (CONTROL)', NULL, NULL, '1202.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(816, 'LAB-0698', 'COD 987', 'PERFIL DE DROGAS DE ABUSO I', NULL, NULL, '702.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(817, 'LAB-0699', 'COD 988', 'PERFIL DE DROGAS DE ABUSO II', NULL, NULL, '808.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(818, 'LAB-0700', 'COD 994', 'PERFIL DE DROGAS DE ABUSO III', NULL, NULL, '986.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(819, 'LAB-0701', 'COD 1138', 'PERFIL DE DROGAS DE ABUSO IV', NULL, NULL, '1166.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(820, 'LAB-0702', 'COD 3179', 'PERFIL DE DROGAS DE ABUSO V EN ORINA', NULL, NULL, '1462.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(821, 'LAB-0703', 'COD 3180', 'PERFIL DE DROGAS DE ABUSO VI EN ORINA', NULL, NULL, '488.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(822, 'LAB-0704', 'COD 3215', 'PERFIL DE DROGAS DE ABUSO VII EN ORINA', NULL, NULL, '986.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(823, 'LAB-0705', 'COD 2284', 'PERFIL DE EPSTEIN BARR IGG E IGM', NULL, NULL, '2660.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(824, 'LAB-0706', 'COD 3129', 'PERFIL DE ESTROGENO', NULL, NULL, '1310.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(825, 'LAB-0707', 'COD 3097', 'PERFIL DE FOSFOLIPIDOS', NULL, NULL, '3144.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(826, 'LAB-0708', 'COD 1379', 'PERFIL DE FUNCIONAMIENTO RENAL', NULL, NULL, '870.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(827, 'LAB-0709', 'COD 860', 'PERFIL DE HIERRO I', NULL, NULL, '386.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(828, 'LAB-0710', 'COD 5315', 'GENOTIPIFICACION DE VPH FEM Y MASC', NULL, NULL, '2445.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(829, 'LAB-0711', 'COD 3689', 'PERFIL DE HIERRO II', NULL, NULL, '440.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(830, 'LAB-0712', 'COD 2928', 'PERFIL DE HIERRO III', NULL, NULL, '688.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(831, 'LAB-0713', 'COD 2301', 'PERFIL DE HIPERTENSION', NULL, NULL, '1788.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(832, 'LAB-0714', 'COD 3090', 'PERFIL DE HIRSUTISMO', NULL, NULL, '1388.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(833, 'LAB-0715', 'COD 805', 'PERFIL DE INMUNOGLOBULINAS', NULL, NULL, '944.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(834, 'LAB-0716', 'COD 784', 'PERFIL DE LIPIDOS CON ELECTROFORESIS', NULL, NULL, '1086.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(835, 'LAB-0717', 'COD 2609', 'PERFIL DE LIPIDOS II', NULL, NULL, '484.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(836, 'LAB-0718', 'COD 2608', 'PERFIL DE LIPIDOS III', NULL, NULL, '680.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(837, 'LAB-0719', 'COD 4458', 'PERFIL DE LUPUS ACTIVIDAD', NULL, NULL, '1436.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(838, 'LAB-0720', 'COD 1173', 'PERFIL DE LUPUS II', NULL, NULL, '2964.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(839, 'LAB-0721', 'COD 1139', 'PERFIL DE MARCADORES DE HEPATITIS A', NULL, NULL, '1060.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(840, 'LAB-0722', 'COD 1141', 'PERFIL MARCADORES HEPATITIS A Y B COMPL', NULL, NULL, '2808.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(841, 'LAB-0723', 'COD 3286', 'PERFIL DE MARCADORES HEPATITIS A Y C', NULL, NULL, '1688.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(842, 'LAB-0724', 'COD 1143', 'PERFIL MARCADORES HEPATITIS A,B,C Y D', NULL, NULL, '3920.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(843, 'LAB-0725', 'COD 1140', 'PERFIL DE MARCADORES HEPATITIS B', NULL, NULL, '2128.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(844, 'LAB-0726', 'COD 2969', 'PERFIL DE MARCADORES HEPATITIS B Y C', NULL, NULL, '2426.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(845, 'LAB-0727', 'COD 991', 'PERFIL MARCADORES HEPATITIS A Y B BASICO', NULL, NULL, '1814.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(846, 'LAB-0728', 'COD 1371', 'PERFIL MARCADORES TUMORALES DE PANCREAS', NULL, NULL, '1168.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(847, 'LAB-0729', 'COD 3135', 'PERFIL MARCADORES TUMORALES DE TESTICULO', NULL, NULL, '696.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(848, 'LAB-0730', 'COD 4460', 'PERFIL MARCADORES TUMORALES DE TIROIDES', NULL, NULL, '1326.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(849, 'LAB-0731', 'COD 1754', 'PERFIL MARCADORES TUMORALES FEMENINO II', NULL, NULL, '3650.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(850, 'LAB-0732', 'COD 4462', 'P. MARCADORES TUMORALES GASTROINTESTINAL', NULL, NULL, '2100.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(851, 'LAB-0733', 'COD 1705', 'PERFIL DE METANEFRINAS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(852, 'LAB-0734', 'COD 1664', 'PERFIL DE METANEFRINAS ORINA 24 HRS', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(853, 'LAB-0735', 'COD 3089', 'PERFIL DE OSTEOPOROSIS II', NULL, NULL, '2224.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(854, 'LAB-0736', 'COD 1375', 'PERFIL DE RAQUITISMO', NULL, NULL, '206.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(855, 'LAB-0737', 'COD 2427', 'PERFIL TESTOSTERONA LIBRE Y BIODISPONIBL', NULL, NULL, '1346.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(856, 'LAB-0738', 'COD 2666', 'PERFIL ESCOLAR BASICO', NULL, NULL, '772.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(857, 'LAB-0739', 'COD 2097', 'PERFIL ESCOLAR COMPLETO', NULL, NULL, '892.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(858, 'LAB-0740', 'COD 1188', 'PERFIL GINECOLOGICO BASICO', NULL, NULL, '822.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(859, 'LAB-0741', 'COD 787', 'PERFIL GINECOLOGICO INTERMEDIO', NULL, NULL, '1112.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(860, 'LAB-0742', 'COD 4090', 'PERFIL GINECOLOGICO INTERMEDIO II', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(861, 'LAB-0743', 'COD 1180', 'PERFIL GINECOLOGICO COMPLETO', NULL, NULL, '1404.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(862, 'LAB-0744', 'COD 4463', 'PERFIL HEPATICO III', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(863, 'LAB-0745', 'COD 1181', 'PERFIL HIPOFISIARIO', NULL, NULL, '1660.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(864, 'LAB-0746', 'COD 2057', 'PERFIL HORMONAL COMP', NULL, NULL, '2156.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(865, 'LAB-0747', 'COD 4466', 'P. HORMONAL FEM BASICO + H. CRECIMIENTO', NULL, NULL, '1896.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(866, 'LAB-0748', 'COD 1860', 'P. HORMONAL FEM + H. CRECIM/AC ANTI TIR', NULL, NULL, '2208.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(867, 'LAB-0749', 'COD 1861', 'P. HORM FEM + H. CRECIM/SIN AC ANTI TIR', NULL, NULL, '1858.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(868, 'LAB-0750', 'COD 1456', 'P. HORM FEM SIN H. CREC/CON AC ANTI TIR', NULL, NULL, '2066.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(869, 'LAB-0751', 'COD 3684', 'PERFIL HORMONAL MASCULINO BASICO', NULL, NULL, '858.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(870, 'LAB-0752', 'COD 3088', 'P. HORMONAL MASC BASICO CON ANDROGENOS', NULL, NULL, '1334.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(871, 'LAB-0753', 'COD 3095', 'P. HORMONAL MASCULINO INTERMEDIO', NULL, NULL, '1732.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(872, 'LAB-0754', 'COD 1862', 'P. HORM MASC CON H. CRECIM/AC ANTI TIR', NULL, NULL, '2336.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(873, 'LAB-0755', 'COD 1457', 'P. HORM MASC SIN H CREC/CON AC ANTI TIR', NULL, NULL, '1846.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(874, 'LAB-0756', 'COD 1863', 'P. HORM MASC CON H CREC/SIN AC ANTI TIR', NULL, NULL, '2026.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(875, 'LAB-0757', 'COD 2441', 'PERFIL HORMONAL TIROIDEO MASCULINO', NULL, NULL, '1824.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(876, 'LAB-0758', 'COD 3096', 'PERFIL METABOLICO DE CALCIO', NULL, NULL, '544.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(877, 'LAB-0759', 'COD 4456', 'PERFIL METABOLICO MASCULINO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(878, 'LAB-0760', 'COD 1176', 'PERFIL PROSTATICO DIAGNOSTICO', NULL, NULL, '936.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(879, 'LAB-0761', 'COD 2975', 'PERFIL PROSTATICO SEGUIMIENTO', NULL, NULL, '1014.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(880, 'LAB-0762', 'COD 1115', 'PERFIL REUMATICO I', NULL, NULL, '820.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(881, 'LAB-0763', 'COD 1864', 'PERFIL REUMATICO II', NULL, NULL, '892.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(882, 'LAB-0764', 'COD 1721', 'PERFIL REUMATICO III', NULL, NULL, '1298.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(883, 'LAB-0765', 'COD 809', 'PERFIL SUPRARRENAL', NULL, NULL, '1946.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(884, 'LAB-0766', 'COD 1865', 'PERFIL TIROIDEO CON AC ANTI TIROIDES', NULL, NULL, '792.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(885, 'LAB-0767', 'COD 1414', 'PERFIL TIROIDEO II', NULL, NULL, '530.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(886, 'LAB-0768', 'COD 1415', 'PERFIL TIROIDEO III', NULL, NULL, '374.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(887, 'LAB-0769', 'COD 1189', 'PERFIL TIROIDEO SIN AC ANTI TIROIDES', NULL, NULL, '536.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(888, 'LAB-0770', 'COD 983', 'PERFIL TORCH IGG', NULL, NULL, '1668.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(889, 'LAB-0771', 'COD 984', 'PERFIL TORCH IGM', NULL, NULL, '1712.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(890, 'LAB-0772', 'COD 4054', 'PLOMO EN ORINA', NULL, NULL, '960.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(891, 'LAB-0773', 'COD 1387', 'CUENTA DE PLAQUETAS', NULL, NULL, '166.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(892, 'LAB-0774', 'COD 1680', 'PLOMO PERSONA OCUPACIONALMENTE EXPUESTA', NULL, NULL, '768.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(893, 'LAB-0775', 'COD 2968', 'PORFIRINAS EN ORINA (UROPORFIRINAS)', NULL, NULL, '928.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(894, 'LAB-0777', 'COD 1244', 'POTASIO', NULL, NULL, '94.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(895, 'LAB-0778', 'COD 1518', 'POTASIO EN ORINA', NULL, NULL, '118.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(896, 'LAB-0779', 'COD 1389', 'POTASIO EN ORINA 24 HRS', NULL, NULL, '222.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(897, 'LAB-0780', 'COD 2406', 'PREALBUMINA (TRANSTIRETINA)', NULL, NULL, '742.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(898, 'LAB-0781', 'COD 1717', 'PREGNENOLONA', NULL, NULL, '7144.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(899, 'LAB-0782', 'COD 2069', 'PRODUCTOS DE DEGRADACION DE FIBRINOGENO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(900, 'LAB-0783', 'COD 1781', 'PROGRAF (TACROLIMUS)', NULL, NULL, '1706.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(901, 'LAB-0784', 'COD 1269', 'PROLACTINA POSTPRANDIAL', NULL, NULL, '214.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(902, 'LAB-0785', 'COD 2073', 'PROTEINA C DE COAGULACION (ACTIVIDAD)', NULL, NULL, '1644.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(903, 'LAB-0787', 'COD 1458', 'PROTEINA C REACTIVA ULTRASENSIBLE', NULL, NULL, '382.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(904, 'LAB-0788', 'COD 1245', 'PROTEINA DE BENCE JONES', NULL, NULL, '280.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(905, 'LAB-0789', 'COD 2074', 'PROTEINA S DE COAGULACION (ACTIVIDAD)', NULL, NULL, '2628.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(906, 'LAB-0790', 'COD 685', 'PROTEINAS TOTALES EN SUERO', NULL, NULL, '98.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(907, 'LAB-0791', 'COD 3108', 'PROTEINAS TOTALES EN ORIN', NULL, NULL, '112.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(908, 'LAB-0792', 'COD 2159', 'PRUEBA DE ALIENTO HELICOBACTER PYLORI', NULL, NULL, '2968.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(909, 'LAB-0793', 'COD 1364', 'PRUEBA DE GRAHAM (INVESTIGACION OXIUROS)', NULL, NULL, '82.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(910, 'LAB-0794', 'COD 3295', 'PRUEBAS CRUZADAS DONADOR CADAVERICO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(911, 'LAB-0795', 'COD 3127', 'PRUEBAS CRUZADAS PARA TRASPLANTE', NULL, NULL, '8720.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(912, 'LAB-0796', 'COD 4070', 'QUANTIFERON TB GOLD', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(913, 'LAB-0797', 'COD 1241', 'QUIMICA SANGUINEA DE 2 ELEMENTOS', NULL, NULL, '114.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(914, 'LAB-0798', 'COD 1856', 'QUIMICA SANGUINEA DE 3 ELEMENTOS MODIF', NULL, NULL, '168.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(915, 'LAB-0799', 'COD 1184', 'QUIMICA SANGUINEA DE 5 ELEMENTOS', NULL, NULL, '248.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(916, 'LAB-0800', 'COD 800', 'QUIMICA SANGUINEA DE 12 ELEMENTOS', NULL, NULL, '516.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(917, 'LAB-0801', 'COD 1199', 'QUIMICA SANGUINEA DE 12 ELEMENTOS MODIF', NULL, NULL, '516.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(918, 'LAB-0802', 'COD 4454', 'QUIMICA SANGUINEA DE 19 ELEMENTOS', NULL, NULL, '770.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(919, 'LAB-0803', 'COD 1172', 'QUIMICA SANGUINEA DE 27 ELEMENTOS', NULL, NULL, '990.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(920, 'LAB-0804', 'COD 1171', 'QUIMICA SANGUINEA DE 28 ELEMENTOS', NULL, NULL, '1018.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(921, 'LAB-0805', 'COD 2437', 'QUIMICA SANGUINEA DE 31 ELEMENTOS', NULL, NULL, '1060.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(922, 'LAB-0806', 'COD 2675', 'QUIMICA SANGUINEA DE 35 ELEMENTOS', NULL, NULL, '1126.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(923, 'LAB-0807', 'COD 2820', 'QUIMICA SANGUINEA DE 35 ELEMENTOS MODI', NULL, NULL, '1560.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(924, 'LAB-0808', 'COD 2350', 'RAPAMICINA (SIROLIMUS)', NULL, NULL, '1850.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(925, 'LAB-0809', 'COD 1391', 'REACCIONES FEBRILES', NULL, NULL, '178.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(926, 'LAB-0810', 'COD 4126', 'RELACION BUN/CREATININA', NULL, NULL, '94.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(927, 'LAB-0811', 'COD 689', 'RENINA', NULL, NULL, '986.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(928, 'LAB-0812', 'COD 2890', 'RESISTENCIA A PROTEINA C ACTIVADA', NULL, NULL, '2318.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(929, 'LAB-0813', 'COD 1392', 'RETICULOCITOS', NULL, NULL, '94.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(930, 'LAB-0814', 'COD 2285', 'RETINOL (VITAMINA A)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(931, 'LAB-0815', 'COD 1421', 'ROTAVIRUS EN HECES', NULL, NULL, '574.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(932, 'LAB-0816', 'COD 14', 'SELENIO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(933, 'LAB-0817', 'COD 2416', 'SEROTONINA', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(934, 'LAB-0818', 'COD 701', 'SODIO', NULL, NULL, '106.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(935, 'LAB-0819', 'COD 1516', 'SODIO EN ORINA', NULL, NULL, '126.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(936, 'LAB-0820', 'COD 1394', 'SODIO EN ORINA 24 HRS', NULL, NULL, '222.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(937, 'LAB-0821', 'COD 712', 'SOMATOMEDINA C (IGF-1)', NULL, NULL, '714.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(938, 'LAB-0822', 'COD 750', 'T3-LIBRE (TRIYODOTIRONINA LIBRE)', NULL, NULL, '216.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(939, 'LAB-0823', 'COD 749', 'T3-TOTAL (TRIYODOTIRONINA TOTAL)', NULL, NULL, '216.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(940, 'LAB-0824', 'COD 739', 'T4-LIBRE (TIROXINA LIBRE)', NULL, NULL, '216.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(941, 'LAB-0825', 'COD 1459', 'T4-NEONATAL (TIROXINA NEONATAL)', NULL, NULL, '212.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(942, 'LAB-0826', 'COD 734', 'T4-TOTAL (TIROXINA TOTAL)', NULL, NULL, '216.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(943, 'LAB-0827', 'COD 1871', 'TAMIZ METABOLICO NEONATAL BASICO', NULL, NULL, '506.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(944, 'LAB-0828', 'COD 3102', 'TAMIZ METABOLICO NEONATAL INTERMEDIO', NULL, NULL, '816.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(945, 'LAB-0829', 'COD 1870', 'TAMIZ METABOLICO NEONATAL AMPLIADO I', NULL, NULL, '1098.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(946, 'LAB-0830', 'COD 2600', 'TAMIZ METABOLICO NEONATAL AMPLIADO II', NULL, NULL, '2668.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(947, 'LAB-0831', 'COD 2426', 'TESTOSTERONA BIODISPONIBLE', NULL, NULL, '1252.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(948, 'LAB-0832', 'COD 725', 'TESTOSTERONA TOTAL', NULL, NULL, '224.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(949, 'LAB-0833', 'COD 1117', 'TESTOSTERONA TOTAL + TESTOSTERONA LIBRE', NULL, NULL, '494.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(950, 'LAB-0834', 'COD 2286', 'TIAMINA (VITAMINA B-1)', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(951, 'LAB-0835', 'COD 1395', 'TIEMPO DE PROTOMBINA (TP)', NULL, NULL, '180.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(952, 'LAB-0836', 'COD 1396', 'TIEMPO DE TROMBINA (TT)', NULL, NULL, '246.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(953, 'LAB-0837', 'COD 1263', 'TIEMPO DE TROMBOPLASTINA PACIAL ACTIVADA', NULL, NULL, '180.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(954, 'LAB-0838', 'COD 903', 'TOLUENO (AC HIPURICO) EN ORINA', NULL, NULL, '1188.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(955, 'LAB-0839', 'COD 2190', 'TOPIRAMATO', NULL, NULL, '0.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(956, 'LAB-0840', 'COD 744', 'TRANSFERRINA', NULL, NULL, '234.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(957, 'LAB-0841', 'COD 1237', 'TRIPSINA INMUNOREACTIVA NEONATAL', NULL, NULL, '292.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(958, 'LAB-0842', 'COD 2239', 'TRIPLE MARCADOR MATERNO PRENAT CON INT', NULL, NULL, '3132.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(959, 'LAB-0843', 'COD 1873', 'TROPONINA I', NULL, NULL, '964.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(960, 'LAB-0844', 'COD 1374', 'TROPONINA T', NULL, NULL, '1758.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(961, 'LAB-0845', 'COD 1423', 'TSH NEONATAL (HORMONA EST DE TIROIDES)', NULL, NULL, '192.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(962, 'LAB-0846', 'COD 753', 'UREA', NULL, NULL, '62.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(963, 'LAB-0847', 'COD 4603', 'UREA EN ORINA', NULL, NULL, '76.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(964, 'LAB-0848', 'COD 1260', 'UREA EN ORINA 24 HRS', NULL, NULL, '144.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(965, 'LAB-0849', 'COD 1752', 'UREA POST DIALISIS', NULL, NULL, '64.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(966, 'LAB-0850', 'COD 3424', 'VIBRIO CHOLERAE', NULL, NULL, '1716.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(967, 'LAB-0851', 'COD 3126', 'VIH1 Y VIH2 WESTERN BLOT CONFIRMATORIA', NULL, NULL, '3982.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(968, 'LAB-0852', 'COD 5441', 'MYCOPLASMA HOMINIS AC IGM', NULL, NULL, '1620.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07'),
(969, 'LAB-0853', 'COD 5442', 'MYCOPLASMA HOMINIS AC IGG', NULL, NULL, '1618.00', NULL, 7, 1, '2021-08-06 01:18:07', '2021-08-06 01:18:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_categories`
--

CREATE TABLE `product_categories` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `product_categories`
--

INSERT INTO `product_categories` (`id`, `name`) VALUES
(1, 'Consulta'),
(2, 'Cirugía'),
(3, 'Histeroscopía'),
(4, 'Farmacia'),
(5, 'Cíclica'),
(6, 'Imagenología'),
(7, 'Laboratorio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_payments`
--

CREATE TABLE `product_payments` (
  `consult_created` int(10) UNSIGNED DEFAULT NULL,
  `consult_scheduled` int(10) UNSIGNED DEFAULT NULL,
  `checkup_id` int(10) UNSIGNED DEFAULT NULL,
  `payment_id` int(10) UNSIGNED NOT NULL,
  `product_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_statuses`
--

CREATE TABLE `product_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `product_statuses`
--

INSERT INTO `product_statuses` (`id`, `name`, `color`) VALUES
(1, 'Activo', '#d63d0c'),
(2, 'Inactivo', '#28a29f');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'web',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 'web', NULL, NULL),
(2, 'Doctor', 'web', NULL, NULL),
(3, 'Enfermera', 'web', NULL, NULL),
(4, 'Checkup', 'web', NULL, NULL),
(5, 'Caja', 'web', NULL, NULL),
(6, 'Laboratorio', 'web', NULL, NULL),
(7, 'Imagenologia', 'web', NULL, NULL),
(8, 'Asistente', 'web', NULL, NULL),
(9, 'Paciente', 'web', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userstatus_id` tinyint(3) UNSIGNED NOT NULL,
  `usercategory_id` tinyint(3) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `userstatus_id`, `usercategory_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'bechtelar.annabelle@example.org', '2021-08-06 01:18:06', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 3, 1, 'PCiY9rq2ya', '2021-08-06 01:18:06', '2021-08-06 01:18:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categories`
--

CREATE TABLE `user_categories` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_categories`
--

INSERT INTO `user_categories` (`id`, `name`) VALUES
(1, 'Paciente'),
(2, 'Empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_statuses`
--

CREATE TABLE `user_statuses` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_statuses`
--

INSERT INTO `user_statuses` (`id`, `name`, `color`) VALUES
(1, 'Qui est et vero consectetur voluptatem.', '#56ed3f'),
(2, 'Sapiente repellat nihil dolores ut ut.', '#7a3ef5'),
(3, 'Laboriosam laboriosam beatae voluptatem.', '#94407a'),
(4, 'Quis eveniet quidem nobis voluptate iste rerum.', '#970641'),
(5, 'Debitis eius fugiat non maiores.', '#56508e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branches_branchstatus_id_foreign` (`branchstatus_id`);

--
-- Indices de la tabla `branch_statuses`
--
ALTER TABLE `branch_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `checkups`
--
ALTER TABLE `checkups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `checkups_checkupcategory_id_foreign` (`checkupcategory_id`),
  ADD KEY `checkups_patient_id_foreign` (`patient_id`),
  ADD KEY `checkups_checkupstatus_id_foreign` (`checkupstatus_id`);

--
-- Indices de la tabla `checkup_categories`
--
ALTER TABLE `checkup_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `checkup_statuses`
--
ALTER TABLE `checkup_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employees_employeestatus_id_foreign` (`employeestatus_id`),
  ADD KEY `employees_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `employee_days_off`
--
ALTER TABLE `employee_days_off`
  ADD KEY `employee_days_off_employee_id_foreign` (`employee_id`),
  ADD KEY `employee_days_off_branch_id_foreign` (`branch_id`);

--
-- Indices de la tabla `employee_licenses`
--
ALTER TABLE `employee_licenses`
  ADD KEY `employee_licenses_employee_id_foreign` (`employee_id`),
  ADD KEY `employee_licenses_medicalspecialty_id_foreign` (`medicalspecialty_id`);

--
-- Indices de la tabla `employee_schedules`
--
ALTER TABLE `employee_schedules`
  ADD KEY `employee_schedules_employee_id_foreign` (`employee_id`),
  ADD KEY `employee_schedules_branch_id_foreign` (`branch_id`);

--
-- Indices de la tabla `employee_statuses`
--
ALTER TABLE `employee_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `invoice_data`
--
ALTER TABLE `invoice_data`
  ADD KEY `invoice_data_patient_id_foreign` (`patient_id`);

--
-- Indices de la tabla `medical_attachments`
--
ALTER TABLE `medical_attachments`
  ADD KEY `medical_attachments_patient_id_foreign` (`patient_id`),
  ADD KEY `medical_attachments_medicalspecialty_id_foreign` (`medicalspecialty_id`),
  ADD KEY `medical_attachments_updated_by_foreign` (`updated_by`);

--
-- Indices de la tabla `medical_attachment_follow_ups`
--
ALTER TABLE `medical_attachment_follow_ups`
  ADD KEY `medical_attachment_follow_ups_medicalconsult_id_foreign` (`medicalconsult_id`),
  ADD KEY `medical_attachment_follow_ups_medicalspecialty_id_foreign` (`medicalspecialty_id`);

--
-- Indices de la tabla `medical_consults`
--
ALTER TABLE `medical_consults`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medical_consults_patient_id_foreign` (`patient_id`),
  ADD KEY `medical_consults_doctor_id_foreign` (`doctor_id`),
  ADD KEY `medical_consults_created_by_foreign` (`created_by`),
  ADD KEY `medical_consults_medicalconsultcategory_id_foreign` (`medicalconsultcategory_id`),
  ADD KEY `medical_consults_updated_by_foreign` (`updated_by`),
  ADD KEY `medical_consults_branch_id_foreign` (`branch_id`),
  ADD KEY `medical_consults_medicalconsultstatus_id_foreign` (`medicalconsultstatus_id`),
  ADD KEY `medical_consults_medicalspecialty_id_foreign` (`medicalspecialty_id`),
  ADD KEY `medical_consults_checkup_id_foreign` (`checkup_id`);

--
-- Indices de la tabla `medical_consult_categories`
--
ALTER TABLE `medical_consult_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medical_consult_statuses`
--
ALTER TABLE `medical_consult_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medical_histories`
--
ALTER TABLE `medical_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medical_histories_medicalconsult_id_foreign` (`medicalconsult_id`);

--
-- Indices de la tabla `medical_prescriptions`
--
ALTER TABLE `medical_prescriptions`
  ADD KEY `medical_prescriptions_medicalconsult_id_foreign` (`medicalconsult_id`),
  ADD KEY `medical_prescriptions_medicament_id_foreign` (`medicament_id`),
  ADD KEY `medical_prescriptions_updated_by_foreign` (`updated_by`);

--
-- Indices de la tabla `medical_specialties`
--
ALTER TABLE `medical_specialties`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medical_tests`
--
ALTER TABLE `medical_tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medical_tests_created_in_foreign` (`created_in`),
  ADD KEY `medical_tests_scheduled_in_foreign` (`scheduled_in`),
  ADD KEY `medical_tests_medicalteststatus_id_foreign` (`medicalteststatus_id`);

--
-- Indices de la tabla `medical_test_orders`
--
ALTER TABLE `medical_test_orders`
  ADD KEY `medical_test_orders_medicaltest_id_foreign` (`medicaltest_id`),
  ADD KEY `medical_test_orders_product_id_foreign` (`product_id`),
  ADD KEY `medical_test_orders_updated_by_foreign` (`updated_by`);

--
-- Indices de la tabla `medical_test_order_annotations`
--
ALTER TABLE `medical_test_order_annotations`
  ADD KEY `medical_test_order_annotations_product_id_foreign` (`product_id`);

--
-- Indices de la tabla `medical_test_results`
--
ALTER TABLE `medical_test_results`
  ADD KEY `medical_test_results_medicaltest_id_foreign` (`medicaltest_id`),
  ADD KEY `medical_test_results_created_by_foreign` (`created_by`),
  ADD KEY `medical_test_results_updated_by_foreign` (`updated_by`);

--
-- Indices de la tabla `medical_test_samples`
--
ALTER TABLE `medical_test_samples`
  ADD KEY `medical_test_samples_medicaltest_id_foreign` (`medicaltest_id`),
  ADD KEY `medical_test_samples_collected_by_foreign` (`collected_by`),
  ADD KEY `medical_test_samples_sent_by_foreign` (`sent_by`),
  ADD KEY `medical_test_samples_updated_by_foreign` (`updated_by`);

--
-- Indices de la tabla `medical_test_statuses`
--
ALTER TABLE `medical_test_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicaments`
--
ALTER TABLE `medicaments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patients_preregistration_id_foreign` (`preregistration_id`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_created_by_foreign` (`created_by`),
  ADD KEY `payments_updated_by_foreign` (`updated_by`),
  ADD KEY `payments_charged_by_foreign` (`charged_by`),
  ADD KEY `payments_paymentmethod_id_foreign` (`paymentmethod_id`),
  ADD KEY `payments_branch_id_foreign` (`branch_id`),
  ADD KEY `payments_paymentstatus_id_foreign` (`paymentstatus_id`),
  ADD KEY `payments_patient_id_foreign` (`patient_id`);

--
-- Indices de la tabla `payment_debts`
--
ALTER TABLE `payment_debts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_debts_payment_id_foreign` (`payment_id`),
  ADD KEY `payment_debts_paymentmethod_id_foreign` (`paymentmethod_id`),
  ADD KEY `payment_debts_charged_by_foreign` (`charged_by`);

--
-- Indices de la tabla `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payment_statuses`
--
ALTER TABLE `payment_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `preregistrations`
--
ALTER TABLE `preregistrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `preregistrations_user_id_unique` (`user_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_productcategory_id_foreign` (`productcategory_id`),
  ADD KEY `products_productstatus_id_foreign` (`productstatus_id`);

--
-- Indices de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_payments`
--
ALTER TABLE `product_payments`
  ADD KEY `product_payments_consult_created_foreign` (`consult_created`),
  ADD KEY `product_payments_consult_scheduled_foreign` (`consult_scheduled`),
  ADD KEY `product_payments_checkup_id_foreign` (`checkup_id`),
  ADD KEY `product_payments_payment_id_foreign` (`payment_id`),
  ADD KEY `product_payments_product_id_foreign` (`product_id`);

--
-- Indices de la tabla `product_statuses`
--
ALTER TABLE `product_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_userstatus_id_foreign` (`userstatus_id`),
  ADD KEY `users_usercategory_id_foreign` (`usercategory_id`);

--
-- Indices de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_statuses`
--
ALTER TABLE `user_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `branches`
--
ALTER TABLE `branches`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `branch_statuses`
--
ALTER TABLE `branch_statuses`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `checkups`
--
ALTER TABLE `checkups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `checkup_categories`
--
ALTER TABLE `checkup_categories`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `checkup_statuses`
--
ALTER TABLE `checkup_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `employee_statuses`
--
ALTER TABLE `employee_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medical_consults`
--
ALTER TABLE `medical_consults`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medical_consult_categories`
--
ALTER TABLE `medical_consult_categories`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `medical_consult_statuses`
--
ALTER TABLE `medical_consult_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `medical_histories`
--
ALTER TABLE `medical_histories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medical_specialties`
--
ALTER TABLE `medical_specialties`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `medical_tests`
--
ALTER TABLE `medical_tests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medical_test_statuses`
--
ALTER TABLE `medical_test_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `medicaments`
--
ALTER TABLE `medicaments`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `patients`
--
ALTER TABLE `patients`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payment_debts`
--
ALTER TABLE `payment_debts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `payment_statuses`
--
ALTER TABLE `payment_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preregistrations`
--
ALTER TABLE `preregistrations`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=970;

--
-- AUTO_INCREMENT de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `product_statuses`
--
ALTER TABLE `product_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user_statuses`
--
ALTER TABLE `user_statuses`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `branches`
--
ALTER TABLE `branches`
  ADD CONSTRAINT `branches_branchstatus_id_foreign` FOREIGN KEY (`branchstatus_id`) REFERENCES `branch_statuses` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `checkups`
--
ALTER TABLE `checkups`
  ADD CONSTRAINT `checkups_checkupcategory_id_foreign` FOREIGN KEY (`checkupcategory_id`) REFERENCES `checkup_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `checkups_checkupstatus_id_foreign` FOREIGN KEY (`checkupstatus_id`) REFERENCES `checkup_statuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `checkups_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_employeestatus_id_foreign` FOREIGN KEY (`employeestatus_id`) REFERENCES `employee_statuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `employees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `employee_days_off`
--
ALTER TABLE `employee_days_off`
  ADD CONSTRAINT `employee_days_off_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `employee_days_off_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `employee_licenses`
--
ALTER TABLE `employee_licenses`
  ADD CONSTRAINT `employee_licenses_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `employee_licenses_medicalspecialty_id_foreign` FOREIGN KEY (`medicalspecialty_id`) REFERENCES `medical_specialties` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `employee_schedules`
--
ALTER TABLE `employee_schedules`
  ADD CONSTRAINT `employee_schedules_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `employee_schedules_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `invoice_data`
--
ALTER TABLE `invoice_data`
  ADD CONSTRAINT `invoice_data_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_attachments`
--
ALTER TABLE `medical_attachments`
  ADD CONSTRAINT `medical_attachments_medicalspecialty_id_foreign` FOREIGN KEY (`medicalspecialty_id`) REFERENCES `medical_specialties` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_attachments_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_attachments_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_attachment_follow_ups`
--
ALTER TABLE `medical_attachment_follow_ups`
  ADD CONSTRAINT `medical_attachment_follow_ups_medicalconsult_id_foreign` FOREIGN KEY (`medicalconsult_id`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_attachment_follow_ups_medicalspecialty_id_foreign` FOREIGN KEY (`medicalspecialty_id`) REFERENCES `medical_specialties` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_consults`
--
ALTER TABLE `medical_consults`
  ADD CONSTRAINT `medical_consults_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_checkup_id_foreign` FOREIGN KEY (`checkup_id`) REFERENCES `checkups` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_medicalconsultcategory_id_foreign` FOREIGN KEY (`medicalconsultcategory_id`) REFERENCES `medical_consult_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_medicalconsultstatus_id_foreign` FOREIGN KEY (`medicalconsultstatus_id`) REFERENCES `medical_consult_statuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_medicalspecialty_id_foreign` FOREIGN KEY (`medicalspecialty_id`) REFERENCES `medical_specialties` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_consults_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_histories`
--
ALTER TABLE `medical_histories`
  ADD CONSTRAINT `medical_histories_medicalconsult_id_foreign` FOREIGN KEY (`medicalconsult_id`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_prescriptions`
--
ALTER TABLE `medical_prescriptions`
  ADD CONSTRAINT `medical_prescriptions_medicalconsult_id_foreign` FOREIGN KEY (`medicalconsult_id`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_prescriptions_medicament_id_foreign` FOREIGN KEY (`medicament_id`) REFERENCES `medicaments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_prescriptions_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_tests`
--
ALTER TABLE `medical_tests`
  ADD CONSTRAINT `medical_tests_created_in_foreign` FOREIGN KEY (`created_in`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_tests_medicalteststatus_id_foreign` FOREIGN KEY (`medicalteststatus_id`) REFERENCES `medical_test_statuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_tests_scheduled_in_foreign` FOREIGN KEY (`scheduled_in`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_test_orders`
--
ALTER TABLE `medical_test_orders`
  ADD CONSTRAINT `medical_test_orders_medicaltest_id_foreign` FOREIGN KEY (`medicaltest_id`) REFERENCES `medical_tests` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_test_orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_test_orders_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_test_order_annotations`
--
ALTER TABLE `medical_test_order_annotations`
  ADD CONSTRAINT `medical_test_order_annotations_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `medical_test_results`
--
ALTER TABLE `medical_test_results`
  ADD CONSTRAINT `medical_test_results_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medical_test_results_medicaltest_id_foreign` FOREIGN KEY (`medicaltest_id`) REFERENCES `medical_tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medical_test_results_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medical_test_samples`
--
ALTER TABLE `medical_test_samples`
  ADD CONSTRAINT `medical_test_samples_collected_by_foreign` FOREIGN KEY (`collected_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_test_samples_medicaltest_id_foreign` FOREIGN KEY (`medicaltest_id`) REFERENCES `medical_tests` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_test_samples_sent_by_foreign` FOREIGN KEY (`sent_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `medical_test_samples_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`);

--
-- Filtros para la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_preregistration_id_foreign` FOREIGN KEY (`preregistration_id`) REFERENCES `preregistrations` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_charged_by_foreign` FOREIGN KEY (`charged_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_paymentmethod_id_foreign` FOREIGN KEY (`paymentmethod_id`) REFERENCES `payment_methods` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_paymentstatus_id_foreign` FOREIGN KEY (`paymentstatus_id`) REFERENCES `payment_statuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `payment_debts`
--
ALTER TABLE `payment_debts`
  ADD CONSTRAINT `payment_debts_charged_by_foreign` FOREIGN KEY (`charged_by`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payment_debts_payment_id_foreign` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payment_debts_paymentmethod_id_foreign` FOREIGN KEY (`paymentmethod_id`) REFERENCES `payment_methods` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `preregistrations`
--
ALTER TABLE `preregistrations`
  ADD CONSTRAINT `preregistrations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_productcategory_id_foreign` FOREIGN KEY (`productcategory_id`) REFERENCES `product_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_productstatus_id_foreign` FOREIGN KEY (`productstatus_id`) REFERENCES `product_statuses` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `product_payments`
--
ALTER TABLE `product_payments`
  ADD CONSTRAINT `product_payments_checkup_id_foreign` FOREIGN KEY (`checkup_id`) REFERENCES `checkups` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_payments_consult_created_foreign` FOREIGN KEY (`consult_created`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_payments_consult_scheduled_foreign` FOREIGN KEY (`consult_scheduled`) REFERENCES `medical_consults` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_payments_payment_id_foreign` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_payments_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_usercategory_id_foreign` FOREIGN KEY (`usercategory_id`) REFERENCES `user_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_userstatus_id_foreign` FOREIGN KEY (`userstatus_id`) REFERENCES `user_statuses` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
