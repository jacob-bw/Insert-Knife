using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Insert_Knife.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using Dapper;

namespace Insert_Knife.DataAccess
{
    public class GameRepository
    {
        private string ConnectionString;

        public GameRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }

        public Game StartNewGame(
            int gameId,
            int answerWeaponId,
            int answerSuspectId,
            int answerRoomId)
        {
            // game is started by selecting the solution and inserting into the answer values on the current Row on the Game table
            var sql = @"
                        select top(1) Suspects.SuspectId
                        from Suspects
                        order by NEWID()

                        select top(1) Weapons.WeaponId 
                        from Weapons
                        order by NEWID()

                        select top(1) Rooms.RoomId
                        from Rooms
                        order by NEWID()

                        insert into Game (AnswerSuspectId, AnswerRoomId, AnswerWeaponId)
                        values (@answerSuspectId, @answerRoomId, @answerWeaponId)
                        ";

            var parameters = new
            {
                GameId = gameId,
                AnswerWeaponId = answerWeaponId,
                AnswerSuspectId = answerSuspectId,
                AnswerRoomId = answerRoomId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Game>(sql, parameters);
                return result;
            }

            
        }

        public List<Game> ViewAllGames()
        {
            var sql = @"
                    select * from Game
                    ";
            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Game>(sql).ToList();
                return result;
            }
        }

        public User SaveGame(int currentRoomId, int currentGameId)
        {
            var sql = @"
                Update Game 
                set CurrentRoomId = @currentRoomId
                where Game.GameId = @currentGameId
                ";

            var parameters = new
            {
                currentRoomId,
                currentGameId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }
    }

}
