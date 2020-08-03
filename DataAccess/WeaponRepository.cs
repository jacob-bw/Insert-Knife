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
    public class WeaponRepository
    {

        private string ConnectionString;

        public WeaponRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }


        public List<Weapon> AllWeapons()
        {
            var sql = @"select * from Weapons";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Weapon>(sql).ToList();
                return result;
            }
        }
    }
}
