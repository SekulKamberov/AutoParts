namespace AutoParts.API.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CustomerName { get; set; }
    }
}
