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

        public RoomController(RoomRepository roomRepository)
        {
            _roomRepository = roomRepository;
        }

        // api/rooms/allrooms
        [HttpGet("allrooms")]
        public IActionResult ViewAllRooms()
        {
            var rooms = _roomRepository.ViewAllRooms();

            return Ok(rooms);
        }
    }
}