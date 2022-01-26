
using AutoMapper;
using KOF.DTO_S;
using KOF.Models;
using KOF.Services.SupplierService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : Controller
    {
        private readonly ISupplierService _supplierService;
   
        public SupplierController(ISupplierService SupplierService)
        {
            
            _supplierService = SupplierService;
        }
        [HttpGet("getall")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var data = await _supplierService.GetAllAsync();
                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPost("postsupplier")]
        public async Task<IActionResult> Post([FromBody] SupplierDto dto)
        {
            try
            {
                Supplier oo = new Supplier()
                {
                    Id=0,
                    Name=dto.Name,
                    Company=dto.Company,
                    Address=dto.Address,
                    Email=dto.Email,
                    IsActive=true,
                    Phone=dto.Phone
                };
                
               // _mapper.Map(dto, oo);

                var data = await _supplierService.AddAsync(oo);
                if (data !=null)
                {
                    return Ok(new { response = data });
                }
                return BadRequest(new { response = data });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPut("updatesupplier")]
        public async Task<IActionResult> Put([FromBody] Supplier dto)
        {
            try
            {
              
                var data = await _supplierService.UpdateAsync(dto);
                if (data !=null)
                {
                    return Ok(new { response = data });
                }
                return BadRequest(new { response = data });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPut("supplierstatus")]
        public async Task<IActionResult> supplierstatus([FromBody] Supplier dto)
        {
            try
            {
                dto.IsActive = !dto.IsActive;
                var data = await _supplierService.UpdateAsync(dto);
                if (data != null)
                {
                    return Ok(new { response = data });
                }
                return BadRequest(new { response = data });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

    }
}
