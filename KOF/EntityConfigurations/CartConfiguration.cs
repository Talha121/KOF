using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KOF.Models;

namespace KOF.EntityConfigurations
{
    internal class CartConfiguration : IEntityTypeConfiguration<Cart>
    {
        public void Configure(EntityTypeBuilder<Cart> builder)
        {
            builder.ToTable("Cart");
            builder.Property(x => x.Id).HasColumnName("CartId");
            builder.HasKey(x => x.Id);
        
            builder.HasOne<Product>(sc => sc.Product)
               .WithMany(s => s.Carts)
               .HasForeignKey(sc => sc.ProductId);
            builder.HasOne<AllUser>(sc => sc.User)
                .WithMany(s => s.Carts)
                .HasForeignKey(sc => sc.UserId);
        }
    }
}
