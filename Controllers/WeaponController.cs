using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insert_Knife.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Insert_Knife.Controllers
{
    [Route("api/weapons")]
    [ApiController]
    public class WeaponController : ControllerBase
    {

        private WeaponRepository _weaponRepository;

        public WeaponController(WeaponRepository weaponRepository)
        {
            _weaponRepository = weaponRepository;
        }

        // api/weapons/allweapons
        [HttpGet("allweapons")]
        public IActionResult ViewAllWeapons()
        {
            var weapons = _weaponRepository.AllWeapons();

            return Ok(weapons);
        }
    }
}