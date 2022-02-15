using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KOF.Models;

namespace KOF.EntityConfigurations
{
    internal class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Order");
            builder.Property(x => x.Id).HasColumnName("OrderId");
            builder.HasKey(x => x.Id);
            builder.HasOne<AllUser>(sc => sc.User)
                .WithMany(s => s.Orders)
                .HasForeignKey(sc => sc.UserId);
        }
    }
}
