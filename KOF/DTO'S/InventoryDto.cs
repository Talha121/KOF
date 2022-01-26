using KOF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KOF.DTO_S
{
    public class InventoryDto
    {
        public int? Quantity { get; set; }
        public string Unit { get; set; }
        public int? CostPerUnit { get; set; }
        public int? TotalCost { get; set; }
        public int? PricePerUnit { get; set; }
        public int? TotalPrice { get; set; }
        public int? RemainingQuantity { get; set; }
        public bool Status { get; set; }
        public int? ProductId { get; set; }
        public int? SupplierId { get; set; }

    }
}
