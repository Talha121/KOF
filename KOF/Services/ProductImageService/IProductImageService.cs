using KOF.DTO_S;
using KOF.Models;
using KOF.Services.GenericService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.ProductImageService
{
    public interface IProductImageService:IGenericRepository<ProductImage>
    {
        Task<string> UpdateProductImages(Productimagedto dto);
        Task<string> RemoveProductImage(int id);
    }
}
