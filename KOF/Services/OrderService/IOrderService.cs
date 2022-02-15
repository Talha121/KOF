using KOF.Models;
using KOF.Services.GenericService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.OrderService
{
    public interface IOrderService : IGenericRepository<Order>
    {
        Task<object> GetOrders();
        Task<object> contactus();
        Task<object> Changestatus(Order dto);
        Task<string> Checkout(string streadaddress, string homeadderess, string city, string phone, string email, string Ordernote, int userid);
    }
}
