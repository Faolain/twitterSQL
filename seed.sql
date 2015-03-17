USE `twitterjs`;
 
TRUNCATE TABLE `Users`;
 
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'Zeke', NULL);
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'Christain', NULL);
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'Tessa', NULL);
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'Nimit', NULL);
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'David', NULL);
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'Fullstack', NULL);
INSERT INTO `Users` (`id`, `name`, `pictureUrl`) VALUES (NULL, 'Class 111', NULL);
 
TRUNCATE TABLE `Tweets`;
 
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '1', 'Fullstack is great! #fsalove');
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '2', 'Fullstack academy is amazing');
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '3', 'Fullstack academy instructor is very cool');
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '4', 'Zeke is mindblowing');
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '5', 'Charlotte is amazing');
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '6', 'bla bla bla');
INSERT INTO `Tweets` (`id`, `userId`, `tweet`) VALUES (NULL, '7', 'bla bla bla is so whatever');