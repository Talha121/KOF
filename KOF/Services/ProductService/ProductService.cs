using KOF.Context;
using KOF.DTO_S;
using KOF.Models;
using KOF.Services.GenericService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.ProductService
{
    public class ProductService:GenericRepository<Product>,IProductService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly ApplicationDbContext _context;
        public ProductService(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment) : base(context)
        {
            _webHostEnvironment = webHostEnvironment;
            _context = context;
        }

        public async Task<string> CreateProduct(ProductDto dto)
        {
            try
            {
                Product product = new Product()
                {
                    Name = dto.Name,
                    About = dto.About,
                    IsActive = true,
                    CategoryId = dto.CategoryId,
                    Description = dto.Description

                };
                await AddAsync(product);
                return "Success";
            }
            catch (Exception ex)
            {

                return ex.Message;
            }
        }

        public async Task<object> GetProducts()
        {
            try
            {
                var data = await _context.Products.Include(x => x.ProductImages).Select(x => new {
                       product=x,
                       category=_context.Categories.Where(y=>y.Id==x.CategoryId).Select(y=>y.Name).SingleOrDefault()
                }).ToListAsync();
                
                return data;
            }
            catch (Exception ex)
            {
                return ex;
            }
        }

     
        public async Task<string> UpdateProduct(ProductDto dto)
        {
            try
            {
                Product product = new Product()
                {
                    Id=(int)dto.Id,
                    Name = dto.Name,
                    About = dto.About,
                    IsActive = true,
                    CategoryId = dto.CategoryId,
                    Description = dto.Description,
                };
                await UpdateAsync(product);
                return "Success";
            }
            catch (Exception ex)
            {

                return ex.Message;
            }
        }
    }
}
