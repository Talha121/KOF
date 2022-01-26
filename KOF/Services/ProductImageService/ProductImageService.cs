using KOF.Context;
using KOF.DTO_S;
using KOF.Models;
using KOF.Services.GenericService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.ProductImageService
{
    public class ProductImageService : GenericRepository<ProductImage>, IProductImageService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ProductImageService(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment) : base(context)
        {
            _webHostEnvironment = webHostEnvironment;
      
    }

        public async Task<string> UpdateProductImages(Productimagedto dto)
        {
            try
            {
                List<ProductImage> images = new List<ProductImage>();
                foreach (var item in dto.image)
                {
                    ProductImage img = new ProductImage
                    {
                        ProductId = (int)dto.ProductId,
                        ImageUrl = UploadedFile(item),

                    };
                    images.Add(img);
                }
               
                await this.DataContext.Set<ProductImage>().AddRangeAsync(images);
                await this.DataContext.SaveChangesAsync();
                return "success";
            }
            catch (Exception ex)
            {

                return ex.Message;
            }
        }
        public async Task<string> RemoveProductImage(int id)
        {
            try
            {
                var data = await GetByIdAsync(id);
                await DeleteAsync(data);
                return "success";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        private string UploadedFile(IFormFile file)
        {
            string uniqueFileName = null;

            if (file != null)
            {
                string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Images/ProductImages/");
                //uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
                uniqueFileName =file.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
            }
            return uniqueFileName;
        }


    }
}
