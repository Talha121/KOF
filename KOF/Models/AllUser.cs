using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace KOF.Models
{
    public class AllUser:TrackableEntityBase<int>
    {
        public string Name { get; set; }
        public string Email { get; set; }

        public string  IdentityUserId{ get; set; }
        public string Phone { get; set; }
        public int RoleId { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsActive { get; set; }
        public IList<Order> Orders { get; set; }
        public IList<Cart> Carts { get; set; }
        [JsonIgnore]
        public virtual Role Role { get; set; }
    }
}
