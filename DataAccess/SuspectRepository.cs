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
    public class SuspectRepository
    {

        private string ConnectionString;

        public SuspectRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }
        

        public List<Suspect> AllSuspects()
        {
            var sql = @"select * from Suspects";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Suspect>(sql).ToList();
                return result;
            }
        }
    }
}
