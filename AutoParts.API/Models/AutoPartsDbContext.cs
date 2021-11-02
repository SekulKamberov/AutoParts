namespace AutoParts.API.Models
{
    using Microsoft.EntityFrameworkCore;

    public class AutoPartsDbContext : DbContext
    {
        public AutoPartsDbContext(DbContextOptions<AutoPartsDbContext>options) 
            : base(options)
        {}

        public DbSet<Customer> Customers { get; set; }
        public DbSet<AutoPart> AutoParts { get; set; }
        public DbSet<OrderMaster> OrderMasters { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
    }
}
