using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insert_Knife.Models;
using Microsoft.Extensions.Configuration;

namespace Insert_Knife.DataAccess
{
    public class GuessRepository
    {
        private string ConnectionString;

        public GuessRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }

        public Guess 
    }
}
