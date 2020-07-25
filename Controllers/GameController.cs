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

        // api/games/allgames/
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

        // api/games/newgame
        [HttpPost("newgame")]
        public IActionResult StartNewGame(int answerWeaponId, int answerSuspectId, int answerRoomId)
        {
            var newGame = _gameRepository.StartNewGame(answerWeaponId, answerSuspectId, answerRoomId);

            return Created("", newGame);
        }


        // api/games/savegame
        [HttpPut("savegame")]
        public IActionResult SaveGame(int currentGameId, int currentRoomId)
        {
            var saveGame = _gameRepository.SaveGame(currentGameId, currentRoomId);

            return Ok(saveGame);
        }

        // api/games/currentgame
        [HttpGet("currentgame")]
        public IActionResult ViewCurrentGame(int userId, int gameId)
        {
            var currentGame = _gameRepository.ViewCurrentGame(userId, gameId);

            if (!currentGame.Any())
            {
                return NotFound("doesn't look like you've got any saved games, fart detective.");
            }

            return Ok(currentGame);
        }
    }
}