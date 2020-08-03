using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insert_Knife.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Insert_Knife.Controllers
{
    [Route("api/suspects")]
    [ApiController]
    public class SuspectController : ControllerBase
    {

        private SuspectRepository _suspectRepository;

        public SuspectController(SuspectRepository suspectRepository)
        {
            _suspectRepository = suspectRepository;
        }
        // api/suspects/allsuspects
        [HttpGet("allsuspects")]
        public IActionResult ViewAllSuspects()
        {
            var suspects = _suspectRepository.AllSuspects();

            return Ok(suspects);
        }
    }
}