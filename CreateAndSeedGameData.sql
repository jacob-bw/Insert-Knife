create database InsertKnife

use InsertKnife

create table Weapons (
	WeaponId int primary key identity (1, 1),
	WeaponName varchar(25),
)

create table Rooms (
	RoomId int primary key identity (1, 1),
	RoomName varchar(25),
)

create table Suspects (
	SuspectId int primary key identity (1, 1),
	SuspectName varchar(25),
)

create table Game (
	GameId int primary key identity (1, 1) not null,
	AnswerRoomId int,
	AnswerSuspectId int,
	AnswerWeaponId int,
	CurrentRoomId int,
	/* userId int foreign key references [User](UserID), */
)

create table [User] (
	UserId int primary key identity (1000, 1) not null,
	UserName varchar(25) not null,
	SavedGameId int foreign key references Game(GameId)
)

create table Guess (
	GuessId int primary key identity (1, 2) not null,
	WeaponId int foreign key references Weapons(WeaponId),
	SuspectId int foreign key references Suspects(SuspectId),
	RoomId int foreign key references Rooms(RoomId),
	GameId int foreign key references Game(GameId),
	Correct bit,
)

INSERT into [Rooms]( RoomName )
VALUES
('Main Hallway'),
('Kitchen'),
('Guest Bedroom'),
('Library'),
('Master Bedroom'),
('Dining Room'),
('Bathroom'),
('Office')

INSERT into [Weapons](WeaponName)
VALUES
('Knife'),
('Pipe'),
('Pistol'),
('Candlestick'),
('Rope'),
('Wrench'),
('Rattlesnake'),
('Scorpion')

INSERT into [Suspects](SuspectName)
VALUES
('Ms Scarlett'),
('Mr Green'),
('Mr White'),
('Ms Peacock'),
('Col Mustard'),
('Prof Plum'),
('Yvette'),
('Wadsworth')

Insert into [User](UserName) values ('lolTimCurry69')
Insert into [User](UserName) values ('ToneToneTonePratt')
Insert into [User](UserName) values ('WaddingtonsUK')
Insert into [User](UserName) values ('DebraHill1950')
Insert into [User](UserName) values ('testname')


select * from Rooms
select * from Weapons
select * from Suspects