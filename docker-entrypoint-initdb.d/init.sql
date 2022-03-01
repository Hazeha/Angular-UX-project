CREATE DATABASE vent2k;

use vent2k;

CREATE TABLE `rooms` (
  `room_ID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`room_ID`),
  UNIQUE KEY `room_ID` (`room_ID`)
);


CREATE TABLE `climate_zones` (
  `climate_zone_ID` int NOT NULL AUTO_INCREMENT,
  `FK_Room` int NOT NULL,
  PRIMARY KEY (`climate_zone_ID`),
  UNIQUE KEY `climate_zone_ID` (`climate_zone_ID`),
  KEY `FK_Room` (`FK_Room`),
  CONSTRAINT `climate_zones_ibfk_1` FOREIGN KEY (`FK_Room`) REFERENCES `rooms` (`room_ID`)
);

CREATE TABLE `users` (
  `user_ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) ,
  `password` varchar(255) ,
  PRIMARY KEY (`user_ID`),
  UNIQUE KEY `user_ID` (`user_ID`)
);

CREATE TABLE `presets` (
  `preset_ID` int NOT NULL AUTO_INCREMENT,
  `airflow` tinyint DEFAULT NULL,
  `FK_User` int NOT NULL,
  `FK_Climate_Zone` int NOT NULL,
  PRIMARY KEY (`preset_ID`),
  UNIQUE KEY `preset_ID` (`preset_ID`),
  KEY `FK_User` (`FK_User`),
  KEY `FK_Climate_Zone` (`FK_Climate_Zone`),
  CONSTRAINT `presets_ibfk_1` FOREIGN KEY (`FK_User`) REFERENCES `users` (`user_ID`),
  CONSTRAINT `presets_ibfk_2` FOREIGN KEY (`FK_Climate_Zone`) REFERENCES `climate_zones` (`climate_zone_ID`)
);


insert into rooms (room_ID) values (1);
insert into rooms (room_ID) values (2);
insert into rooms (room_ID) values (3);
insert into rooms (room_ID) values (4);

insert into climate_zones (climate_zone_ID, FK_Room) values (1, 1);
insert into climate_zones (climate_zone_ID, FK_Room) values (2, 1);
insert into climate_zones (climate_zone_ID, FK_Room) values (3, 1);
insert into climate_zones (climate_zone_ID, FK_Room) values (4, 1);

insert into climate_zones (climate_zone_ID, FK_Room) values (5, 2);
insert into climate_zones (climate_zone_ID, FK_Room) values (6, 2);
insert into climate_zones (climate_zone_ID, FK_Room) values (7, 2);
insert into climate_zones (climate_zone_ID, FK_Room) values (8, 2);

insert into climate_zones (climate_zone_ID, FK_Room) values (9, 3);
insert into climate_zones (climate_zone_ID, FK_Room) values (10, 3);
insert into climate_zones (climate_zone_ID, FK_Room) values (11, 3);
insert into climate_zones (climate_zone_ID, FK_Room) values (12, 3);

insert into climate_zones (climate_zone_ID, FK_Room) values (13, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (14, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (15, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (16, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (17, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (18, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (19, 4);
insert into climate_zones (climate_zone_ID, FK_Room) values (20, 4);