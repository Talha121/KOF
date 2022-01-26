using KOF.Context;
using KOF.Models;
using KOF.Services.GenericService;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.Services.SupplierService
{
    public class SupplierService: GenericRepository<Supplier>, ISupplierService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public SupplierService(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment) : base(context)
        {
            _webHostEnvironment = webHostEnvironment;
        }
    }
}
