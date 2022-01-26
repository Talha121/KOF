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
    }
}
