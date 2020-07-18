using System;
using System.Collections.Generic;
using System.Linq;
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
            var sql = @"";

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
    }

}
