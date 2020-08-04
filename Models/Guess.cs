using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insert_Knife.Models
{
    public class Guess
    {
        public int GuessId { get; set; }
        public int WeaponId { get; set; }
        public int SuspectId { get; set; }
        public int RoomId { get; set; }
        public int GameId { get; set; }
        public int UserId { get; set; }
    }
}
