using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Insert_Knife.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Insert_Knife.DataAccess
{
    public class UserRepository
    {

        private string ConnectionString;

        public UserRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }

        public List<Guess> ViewGuesses(int userId)
        {
            var sql = @"
                        select * from Guess
                        join Game on Game.GameId = Guess.GameId
                        where Game.UserId = @userId
                        order by GuessId
                        ";

            var parameters = new {UserId = userId};

            using (var db = new SqlConnection(ConnectionString))
            {
                var guesses = db.Query<Guess>(sql, parameters).ToList();
                return guesses;
            }
        }
    }
}
