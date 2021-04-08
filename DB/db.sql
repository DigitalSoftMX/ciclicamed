-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2021 at 10:53 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `strikingdash`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
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
-- Table structure for table `firestores`
--

CREATE TABLE `firestores` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `firestores`
--

INSERT INTO `firestores` (`id`, `name`, `email`, `phone`, `country`, `city`, `company`, `position`, `status`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Gwendolyn Barlow', 'fyrocif@mailinator.com', '+1 (367) 651-3767', 'Japan', 'Mymensingh', 'Oneil Meadows LLC', '+1 (805) 483-9814', 'active', 'img/basics/20210203012402.jpg', '2021-02-02 19:24:02', '2021-02-02 19:24:02'),
(2, 'Leilani Barnett', 'ceso@mailinator.com', '+1 (572) 442-2903', 'Bangladesh', 'Dhaka', 'Hancock and Bird Traders', '+1 (232) 149-7673', 'deactivated', 'img/basics/20210203012826.png', '2021-02-02 19:24:38', '2021-02-02 19:28:26'),
(5, 'Test', 'admiren@gmail.com', 'erwerwerwer', 'USA', 'Mymensingh', 'wrwer', 'erewr', 'active', 'img/basics/20210315033654.png', '2021-03-14 21:36:54', '2021-03-14 21:36:54');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(18, '2014_10_12_000000_create_users_table', 1),
(19, '2014_10_12_100000_create_password_resets_table', 1),
(20, '2019_08_19_000000_create_failed_jobs_table', 1),
(21, '2021_02_02_041507_create_firestores_table', 1),
(22, '2021_03_15_030518_create_todo_table', 2),
(23, '2021_03_15_031802_create_todos_table', 3),
(24, '2021_03_15_055412_create_notes_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note_label` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `description`, `note_label`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Keep Social Distance', 'Lorem Ipsum is simply dummy text of the printing', 'important', 'favorite', '2021-03-15 00:46:34', '2021-03-15 21:11:41'),
(2, 'Theme Development', 'Lorem Ipsum is simply dummy text of the printing', 'personal', NULL, '2021-03-15 00:49:18', '2021-03-15 00:49:18'),
(3, 'Shop Page Design', 'Lorem Ipsum is simply dummy text of the printing', 'work', 'favorite', '2021-03-15 00:50:14', '2021-03-15 21:11:34'),
(5, 'Improve Writing Skill', 'Lorem Ipsum is simply dummy text of the printing', 'social', NULL, '2021-03-15 00:55:55', '2021-03-15 00:55:55'),
(6, 'Landing Page Design', 'Lorem Ipsum is simply dummy text of the printing', 'personal', NULL, '2021-03-15 01:10:57', '2021-03-15 01:10:57'),
(7, 'Socail Human Being', 'Lorem Ipsum is simply dummy text of the printing', 'social', NULL, '2021-03-15 01:11:26', '2021-03-15 01:11:26'),
(8, 'Landing Page Development', 'Lorem Ipsum is simply dummy text of the printing', 'personal', 'favorite', '2021-03-15 01:11:54', '2021-03-15 21:14:08'),
(9, 'Plugin Development', 'Lorem Ipsum is simply dummy text of the printing', 'work', NULL, '2021-03-15 01:13:34', '2021-03-21 20:05:59'),
(12, 'Keep Social Distance', 'Lorem Ipsum is simply dummy text of the printing', 'important', 'favorite', '2021-03-15 21:41:22', '2021-03-21 20:05:53');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `todo_text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `todo_text`, `created_at`, `updated_at`) VALUES
(3, 'Registration Confirmation! Email is missing some information', '2021-03-14 21:40:10', '2021-03-14 21:40:10'),
(4, 'Changing title text on single locations pages', '2021-03-14 21:40:48', '2021-03-14 21:40:48'),
(6, 'Login page not redirecting wrong', '2021-03-14 21:41:19', '2021-03-14 21:41:19'),
(7, 'Custom Field for Registration', '2021-03-14 21:41:30', '2021-03-14 21:41:30'),
(8, 'Add images to the product gallery', '2021-03-14 21:42:25', '2021-03-14 21:42:25'),
(9, 'Update user profile page', '2021-03-14 21:42:43', '2021-03-14 21:42:43'),
(10, 'Support tickets list doesn\'t support commas', '2021-03-14 21:56:45', '2021-03-14 21:56:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `phone`, `email`, `provider`, `provider_id`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin', NULL, 'admin@gmail.com', NULL, NULL, NULL, '$2y$10$E2NKx/GI4O6z3hP9CA1IJOMH1uEnX52ZDUu.tcGOOOdfjhslR4Gmy', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `firestores`
--
ALTER TABLE `firestores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `firestores_email_unique` (`email`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `firestores`
--
ALTER TABLE `firestores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
