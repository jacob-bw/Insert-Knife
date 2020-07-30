﻿using System;
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
    public class RoomRepository
    {

        private string ConnectionString;

        public RoomRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsertKnife");
        }

        public List<Room> ViewAllRooms()
        {
            var sql = @"select * from Rooms";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.Query<Room>(sql).ToList();
                return result;
            }
        }

        public Game MoveToNewRoom(int newRoomId, int gameId)
        {
            // compare gameId using currentgame value from ViewCurrentGame (line 109 in Game Repository)
            var sql = @"
                        Update Game 
                        set CurrentRoomId = @currentRoomId
                        where Game.GameId = @currentGameId
                        ";
            var parameters = new
            {
                CurrentRoomId = newRoomId,
                CurrentGameId = gameId

            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Game>(sql, parameters);
                return result;
            }
        }
    }
}
