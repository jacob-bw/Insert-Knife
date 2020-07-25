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
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserRepository _userRepository;

        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        
        // [url]/api/user/{userId}/guesses
        [HttpGet("{userId}/guesses")]
        public IActionResult ViewGuesses(int userId)
        {
            var oldGuesses = _userRepository.ViewGuesses(userId);
            return Ok(oldGuesses);
        }
    }
}