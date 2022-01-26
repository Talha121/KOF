using KOF.Context;
using KOF.Models;
using KOF.Services.GenericService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.InventoryService
{
    public class InventoryService: GenericRepository<Inventory>, IInventoryService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly ApplicationDbContext _context;
        public InventoryService(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment) : base(context)
        {
            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }

        public  async Task<object> GetInventory()
        {
            var data = await _context.Inventories.Select(x=> new { 
                  inventory=x,
                  suppliername=x.Supplier.Name,
                  productinfo=_context.Products.Where(y=>y.Id==x.ProductId).Select(y=> new {
                  name=y.Name,
                  categoryname=y.Category.Name,
                  
                  }).SingleOrDefault(),
                 

            }).ToListAsync();

            return data;
        }
    }
}
