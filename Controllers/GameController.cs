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
    [Route("api/games")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private GameRepository _gameRepository;

        public GameController(GameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        // [url]/api/games/allgames/
        [HttpGet("allgames")]
        public IActionResult ViewAllGames()
        {
            var games = _gameRepository.ViewAllGames();

            if (!games.Any())
            {
                return NotFound();
            }

            return Ok(games);
        }

        // [url]/api/games/newgame
        [HttpPost("newgame")]
        public IActionResult StartNewGame(int answerWeaponId, int answerSuspectId, int answerRoomId)
        {
            var newGame = _gameRepository.StartNewGame(answerWeaponId, answerSuspectId, answerRoomId);

            return Created("", newGame);
        }


        // [url]/api/games/savegame
        [HttpPut("savegame")]
        public IActionResult SaveGame(int currentGameId, int currentRoomId)
        {
            var saveGame = _gameRepository.SaveGame(currentGameId, currentRoomId);

            return Ok(saveGame);
        }
    }
}