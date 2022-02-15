using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Models
{
    public class Role:TrackableEntityBase<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public IList<AllUser> User { get; set; }
    }
}
