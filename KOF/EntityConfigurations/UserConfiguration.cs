using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KOF.Models;

namespace KOF.EntityConfigurations
{
    internal class UserConfiguration : IEntityTypeConfiguration<AllUser>
    {
        public void Configure(EntityTypeBuilder<AllUser> builder)
        {
            builder.ToTable("User");
            builder.Property(x => x.Id).HasColumnName("UserId");
            builder.HasKey(x => x.Id);
            builder.HasOne<Role>(sc => sc.Role)
               .WithMany(s => s.User).HasForeignKey(sc => sc.RoleId);
        }
    }
}
