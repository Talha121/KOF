using KOF.Models;
using KOF.Services.OrderService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _OrderService;
        public OrderController(IOrderService OrderService)
        {
            _OrderService = OrderService;
        }
        [HttpGet("getorders")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var data = await _OrderService.GetOrders();
                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpGet("contactus")]
        public async Task<IActionResult> contactus()
        {
            try
            {
                var data = await _OrderService.contactus();
                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPut("ChangeStatus")]
        public async Task<IActionResult> ChangeStatus(Order dto)
        {
            try
            {
                var data = await _OrderService.Changestatus(dto);
                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
