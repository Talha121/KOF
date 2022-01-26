using KOF.Context;
using KOF.Models;
using KOF.Services.GenericService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.OrderService
{
    public class OrderService: GenericRepository<Order>, IOrderService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly ApplicationDbContext _context;
        public OrderService(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment) : base(context)
        {

            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }

        public async Task<object> Changestatus(Order dto)
        {
            await UpdateAsync(dto);
            return "success";
        }

        public async Task<object> GetOrders()
        {
            var data = await _context.Orders.Include(x=>x.OrderItems).ThenInclude(x=>x.Product).Select(x=>new { 
              order=x,
              orderitems=_context.OrderItems.Where(z=>z.OrderId==x.Id).Select(z=> new { 
                item=z,
                product=_context.Products.Where(p=>p.Id==z.ProductId).Select(p=>p.Name).SingleOrDefault(),
                  unit = _context.Inventories.Where(q => q.ProductId == z.ProductId).Select(p => p.Unit).SingleOrDefault(),

              }).ToList(),
              userinfo=_context.Users.Where(y=>y.Id==x.UserId).Select(y=> new {
              name=y.Name,
              contactno=y.Phone,
              email=y.Email
               
              }).SingleOrDefault(),
            
            }).ToListAsync();
            return data;
        }
    }
}
