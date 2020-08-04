using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insert_Knife.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Insert_Knife.Controllers
{
    [Route("api/guess")]
    [ApiController]
    public class GuessController : ControllerBase
    {
        //ViewGuesses function is all handled in the User Controller and Repository

        private GuessRepository _guessRepository;
        private GameRepository _gameRepository;


        public GuessController(GuessRepository guessRepository, GameRepository gameRepository)
        {
            _guessRepository = guessRepository;
            _gameRepository = gameRepository;

        }
    

        [HttpPost("newguess/{guessWeaponId}/{guessSuspectId}")]
        public IActionResult MakeNewGuess(int guessWeaponId, int guessSuspectId)
        {
            // currently hardcoded w/ couchnap userId for retrieving "active" games
            var currentGameId = _gameRepository.ViewCurrentGame(1002).GameId;
            var currentRoomId = _gameRepository.ViewCurrentGame(1002).CurrentRoomId;
            var potentialSolution = _guessRepository.MakeNewGuess(guessWeaponId, guessSuspectId, currentRoomId, currentGameId);
            return Ok(potentialSolution);
        }

        [HttpGet("{userId}")]
        public IActionResult PrintGuesses(int userId)
        {
            var guesses = _guessRepository.PrintGuesses(1002);
            return Ok(guesses);
        }
        
    }
}