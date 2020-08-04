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
                var newGuess = db.QueryFirstOrDefault(sql, parameters);
                return newGuess;
            }
        }

        public List<Guess> PrintGuesses(int userId)
        {
            var sql = @"
                        select * from Guess
                        join Game on Game.GameId = Guess.GameId
                        where Game.UserId = @userId
                        order by GuessId
                        ";

            var parameters = new { UserId = userId };

            using (var db = new SqlConnection(ConnectionString))
            {
                var guesses = db.Query<Guess>(sql, parameters).ToList();
                return guesses;
            }
        }


    }
}
