using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insert_Knife.Models
{
    public class Game
    {
        public int GameId { get; set; }
        public int AnswerWeaponId { get; set; }
        public int AnswerSuspectId { get; set; }
        public int AnswerRoomId { get; set; }
        public int CurrentRoomId { get; set; }
        public int UserId { get; set; }
    }
}
