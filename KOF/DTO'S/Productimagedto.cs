using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.DTO_S
{
    public class Productimagedto
    {
        public IFormFile [] image { get; set; }

        public int ProductId { get; set; }
    }
}
