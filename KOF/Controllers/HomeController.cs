using KOF.Models;
using KOF.Services.InventoryService;
using KOF.Services.OrderService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Controllers
{

    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IInventoryService _inventoryService;
        private readonly IOrderService _orderserviceService;
        public HomeController(ILogger<HomeController> logger, IInventoryService inventoryService, IOrderService orderserviceService)
        {
            _logger = logger;
            _inventoryService = inventoryService;
            _orderserviceService = orderserviceService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ContactUs()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> ContactUs(ContactUs contactUs)
        {
            var data = await _inventoryService.Savemessange(contactUs);
            return View();
        }
        public IActionResult ProductListView()
        {
            return View();
        }
        public async Task<IActionResult> ProductGridView(int id)
        {
            //var data = await _inventoryService.CategorywiseInventory(id);
            //ViewBag.Categorywiseproducts = data;
            ViewBag.id = id;
                return View();
        }
        [Authorize]
        public async Task<IActionResult> Productdetail(int id)
        {
            //var data = await _inventoryService.CategorywiseInventory(id);
            //ViewBag.Categorywiseproducts = data;
            ViewBag.InventoryId = id;
            return View();
        }


        public IActionResult About()
        {
            return View();
        }
        [HttpPost]
  
        public async Task<IActionResult> Addtocard(int inventoryid,int productid,int Qty,int userid,string unit)
        {
            var data = await _inventoryService.addtocart( inventoryid,  productid,  Qty,  userid, unit);
            return RedirectToAction("Productdetail",new {id= inventoryid });
        }
        public IActionResult MyAccount()
        {
            return View();
        }
        public IActionResult  removecart(int id)
        {
       
            _inventoryService.removecart(id);
            return RedirectToAction("index");
   
        }
        public IActionResult WishList()
        {
            return View();
        }
        [Authorize]
        public IActionResult Checkout()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Checkout(string   streadaddress,string homeadderess,string city,string phone,string    email,string    Ordernote,int userid)
        {
           var data= _orderserviceService.Checkout(streadaddress, homeadderess,  city,  phone,     email,     Ordernote,  userid);


            ViewBag.orderadded = "Success";
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
