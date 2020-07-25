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

        public Game StartNewGame()
        {
            // game is started by selecting the solution and inserting into the answer values on the current Row on the Game table
            var sqlSuspect = @"
                        select top(1) Suspects.SuspectId
                        from Suspects
                        order by NEWID()
                        ";

            var sqlWeapon = @"
                        select top(1) Weapons.WeaponId 
                        from Weapons
                        order by NEWID()
                        ";

            var sqlRoom = @"
                        select top(1) Rooms.RoomId
                        from Rooms
                        order by NEWID()
                        ";

            var sqlInsert = @"
                            insert into Game (AnswerSuspectId, AnswerRoomId, AnswerWeaponId)
                            values (@AnswerSuspectId, @AnswerRoomId, @AnswerWeaponId)
                            ";
            

            using (var db = new SqlConnection(ConnectionString))
            {
                var newWeapon = db.Query<int>(sqlWeapon);
                var newSuspect = db.Query<int>(sqlSuspect);
                var newRoom = db.Query<int>(sqlRoom);

                var parameters = new
                {
                    AnswerWeaponId = newWeapon,
                    AnswerSuspectId = newSuspect,
                    AnswerRoomId = newRoom
                };

                    var result = db.QueryFirstOrDefault<Game>(sqlInsert, parameters);
                    return result;
            }
        }

        public List<Game> ViewAllGames()
        {   
            var sql = @"select * from Game";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Game>(sql).ToList();
                return result;
            }
        }

        public User SaveGame(int currentGameId, int currentRoomId)
        {
            // if there isn't a currently logged in user, prompt user to log in
            // select current room
            // select current game Id
            // if there is a current user
            // insert game id into "savedGameId" field on User table
            // update user column in current row on game table with id of current user

            var sql = @"
                Update Game 
                set CurrentRoomId = @currentRoomId
                where Game.GameId = @currentGameId

                Update [User]
                set SavedGameId = @currentGameId
                ";

            var parameters = new
            {
                currentGameId,
                currentRoomId,
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }

        public Game ViewCurrentGame(int userId, int gameId)
        {

            var sql = @"
                        select top(1) from Game
                        ";

            var parameters = new
            {
                userId,
                gameId,
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Game>(sql, parameters);
                return result;
            }
        }
    }

}
