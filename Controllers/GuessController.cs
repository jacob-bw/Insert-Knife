using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Insert_Knife.Controllers
{
    [Route("api/jaccuse")]
    [ApiController]
    public class GuessController : ControllerBase
    {
        // view old guesses function
        // select from guess table 
        // join on game table where current userId matches userId for saved games
        // return all guesses for games that match the current userId
    }
}