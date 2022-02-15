using KOF.EntityConfigurations;
using KOF.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Context
{
    public class ApplicationDbContext:IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.ApplyConfiguration(new CartConfiguration());
        //    modelBuilder.ApplyConfiguration(new CategoryConfiguration());
        //    modelBuilder.ApplyConfiguration(new InventoryConfiguration());
        //    modelBuilder.ApplyConfiguration(new OrderConfiguration());
        //    modelBuilder.ApplyConfiguration(new OrderItemConfiguration());
        //    modelBuilder.ApplyConfiguration(new ProductConfiguration());
        //    modelBuilder.ApplyConfiguration(new RoleConfiguration());
        //    modelBuilder.ApplyConfiguration(new SupplierConfiguration());
        //    modelBuilder.ApplyConfiguration(new UserConfiguration());
        //    modelBuilder.ApplyConfiguration(new ProductImageConfiguration());

        //}
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<AllUser> AllUsers { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<ContactUs> ContactUs { get; set; }

    }
}
