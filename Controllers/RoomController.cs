using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Insert_Knife.Models;
using Insert_Knife.DataAccess;

namespace Insert_Knife.Controllers
{
    [Route("api/rooms")]
    [ApiController]
    public class RoomController : ControllerBase
    {

        private RoomRepository _roomRepository;
        private GameRepository _gameRepository;

        public RoomController(RoomRepository roomRepository, GameRepository gameRepository)
        {
            _roomRepository = roomRepository;
            _gameRepository = gameRepository;
        }

        // api/rooms/allrooms
        [HttpGet("allrooms")]
        public IActionResult ViewAllRooms()
        {
            var rooms = _roomRepository.ViewAllRooms();

            return Ok(rooms);
        }

        // api/rooms/newroom/{roomId}
        [HttpPut("newroom/{roomId}")]
        public IActionResult MoveToNewRoom(int userId, int roomId)
        {
            var currentGameId = _gameRepository.ViewCurrentGame(userId).GameId;
            var newRoom = _roomRepository.MoveToNewRoom(roomId, currentGameId);

            return Ok(newRoom);
        }
    }
}