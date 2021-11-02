namespace AutoParts.API.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class OrderDetail
    {
        [Key]
        public long OrderDetailId { get; set; }

        public long OrderMasterId { get; set; }

        public int AutoPartId { get; set; }

        public AutoPart AutoPart { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal AutoPartPrice { get; set; }

        public int Quantity { get; set; }
    }
}
