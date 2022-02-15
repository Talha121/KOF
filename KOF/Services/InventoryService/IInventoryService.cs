using KOF.Models;
using KOF.Services.GenericService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.InventoryService
{
    public interface IInventoryService : IGenericRepository<Inventory>
    {
        Task<object> GetInventory();
        Task<string> Savemessange(ContactUs contact);
        Task<object> CategorywiseInventory(int id);
        Task<int> removecart(int id);
        Task<int> addtocart(int inventoryid, int productid, int Qty, int userid,string unit);
    }
}
