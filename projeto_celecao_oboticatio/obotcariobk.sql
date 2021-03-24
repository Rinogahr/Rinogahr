-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: oboticario
-- ------------------------------------------------------
-- Server version	5.5.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `revId` int(11) NOT NULL,
  `codigoCP` int(11) NOT NULL,
  `valor` varchar(45) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `produto` varchar(45) NOT NULL,
  `excluir` tinyint(4) DEFAULT NULL,
  `atualizar` tinyint(4) DEFAULT NULL,
  `validacao` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `revId_idx` (`revId`),
  CONSTRAINT `revId` FOREIGN KEY (`revId`) REFERENCES `revendedor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,1,9357,'199,98','2021-03-23 00:00:00','perfume de lavanda',NULL,NULL,NULL),(2,2,9357,'200,00','2021-02-03 00:00:00','Idratante',NULL,NULL,NULL),(3,2,9359,'50,00','2021-02-03 00:00:00','sabonete intimo',NULL,NULL,NULL);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revendedor`
--

DROP TABLE IF EXISTS `revendedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revendedor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `login` varchar(45) NOT NULL,
  `excluir` tinyint(4) DEFAULT NULL,
  `atualizar` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revendedor`
--

LOCK TABLES `revendedor` WRITE;
/*!40000 ALTER TABLE `revendedor` DISABLE KEYS */;
INSERT INTO `revendedor` VALUES (1,'Nataly da Silva Beserra','naty@gmail.com','153.509.460-56','0811','gerente',NULL,NULL),(2,'Kenneth E Hagin','kennetheHagin@hotmail.com','078.559.1616-34','715715','vendas1',NULL,NULL);
/*!40000 ALTER TABLE `revendedor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-23 23:18:26
