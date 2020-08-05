using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Insert_Knife.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using Dapper;

namespace Insert_Knife.DataAccess
{
    public class GuessRepository
    {
        private string ConnectionString;

        public GuessRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }


        public Guess MakeNewGuess(int guessWeaponId, int guessSuspectId, int currentRoomId, int currentGameId)
        {
            var sql = @"
                        insert into Guess (WeaponId, SuspectId, RoomId, GameId)
                        output inserted.*
                        values (@guessWeaponId, @guessSuspectId, @currentRoomId, @currentGameId)
                        ";

            var parameters = new
            {
                guessWeaponId = guessWeaponId,
                guessSuspectId = guessSuspectId,
                currentRoomId = currentRoomId,
                currentGameId = currentGameId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var newGuess = db.QueryFirstOrDefault<Guess>(sql, parameters);
                return newGuess;
            }
        }

        public List<Guess> PrintGuesses(int userId, int gameId)
        {

            var sql = @"
                        select * from Guess
                        join Game on Game.GameId = Guess.GameId
                        join Weapons on Guess.WeaponId= Weapons.WeaponId
                        join Suspects on Guess.SuspectId = Suspects.SuspectId
                        join Rooms on Guess.RoomId = Rooms.RoomId
                        where Game.UserId = @userId
                        and Game.GameId = (select top(1) GameId from Game
                        where UserId = @userId
                        Order by GameId desc)
                        ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new
                {
                    userId = userId,
                };

                var guesses = db.Query<Guess>(sql, parameters).ToList();
                return guesses;
            }
        }

        public Guess LastGuess(int userId)
        {
            var sql = @"
                        select * from Guess
                        join Game on Game.GameId = Guess.GameId
                        where GuessId = (select top(1) Guess.GuessId from Guess
                        join Game on Game.GameId = Guess.GameId
                        where Game.UserId = @userId
                        and Game.GameId = (select top(1) GameId from Game
                        where UserId = @userId
                        Order by GameId desc))
                        ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new
                {
                    userId = userId,
                };

                var newestGuess = db.QueryFirstOrDefault<Guess>(sql, parameters);
                return newestGuess;
            }
        }


    }
}
