using KOF.DTO_S;
using KOF.Models;
using KOF.Services.InventoryService;
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
    public class InventoryController : ControllerBase
    {
        private readonly IInventoryService _inventoryService;
        public InventoryController(IInventoryService inventoryService)
        {
            _inventoryService = inventoryService;
        }

        [HttpGet("getinventory")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var data = await _inventoryService.GetInventory();
                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPost("postinventory")]
        public async Task<IActionResult> Post([FromBody] InventoryDto [] dto)
        {
            try
            {
                
                foreach (var item in dto)
                {
                    Inventory obj = new Inventory()
                    {
                        Id = 0,
                        CostPerUnit = Convert.ToInt32(item.CostPerUnit),
                        ProductId = Convert.ToInt32(item.ProductId),
                        SupplierId = Convert.ToInt32(item.SupplierId),
                        TotalCost = Convert.ToInt32(item.TotalCost),
                        PricePerUnit = Convert.ToInt32(item.PricePerUnit),
                        TotalPrice = Convert.ToInt32(item.TotalPrice),
                        Unit = item.Unit,
                        Quantity = Convert.ToInt32(item.Quantity),

                    };
                    var data = await _inventoryService.AddAsync(obj);
                }
          
               
                    return Ok(new { response = "" });
               
             
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Changestatus")]
        public async Task<IActionResult> Changestatus([FromBody] Inventory dto)
        {
            try
            {
                dto.Status =!dto.Status;
            
                    var data = await _inventoryService.UpdateAsync(dto);
                


                return Ok(new { response = "" });


            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpPost("RemoveInventory")]
        public async Task<IActionResult> RemoveInventory([FromBody] Inventory dto)
        {
            try
            {
             await  _inventoryService.DeleteAsync(dto);
                return Ok(new { response = "" });


            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
