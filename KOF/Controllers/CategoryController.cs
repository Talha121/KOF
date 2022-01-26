using KOF.Context;
using KOF.DTO_S;
using KOF.Models;
using KOF.Services.CategoryService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        [HttpGet("getcategories")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var data = await _categoryService.GetAllAsync();
                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPost("PostCategory")]
        public async Task<IActionResult> Post([FromForm] CategoreyDto category)
        {
            try
            {
                var data = await _categoryService.UploadCategory(category);
                if (data == "success")
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
        [HttpPut("UpdateCategory")]
        public async Task<IActionResult> Put([FromForm] CategoreyDto category)
        {
            try
            {
                var data = await _categoryService.UpdateCategory(category);
                if (data == "success")
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
        [HttpPut("categorystatus")]
        public async Task<IActionResult> changestatus([FromBody] Category category)
        {
            try
            {
                category.Status = !category.Status;
                var data = await _categoryService.UpdateAsync(category);
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
        [HttpPut("UpdateCategoryImage")]
        public async Task<IActionResult> updateImage([FromForm] CategoreyDto category)
        {
            try
            {
                var data = await _categoryService.updateCategoryImage(category);
                if (data == "success")
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
        [HttpDelete("RemoveCategory")]
        public async Task<IActionResult> Delete([FromBody] int id)
        {
            try
            {
                Category cat = new Category()
                {
                    Id = id
                };
                await _categoryService.DeleteAsync(cat.Id);
                return Ok(new { response = "Deleted Successfully" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
