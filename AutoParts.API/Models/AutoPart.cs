namespace AutoParts.API.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class AutoPart
    {
        [Key]
        public int AutoPartId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string AutoPartName { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
    }
}
