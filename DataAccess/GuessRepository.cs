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
    public class GuessRepository
    {
        private string ConnectionString;

        public GuessRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }

        public List<Guess> ViewGuesses(int userId)
        {
            var sql = @"
                        select * from Guess
                        where UserId = @currentUserId
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
