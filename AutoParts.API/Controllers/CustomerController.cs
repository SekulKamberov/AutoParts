namespace AutoParts.API.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    using AutoParts.API.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly AutoPartsDbContext context;

        public CustomerController(AutoPartsDbContext _context)
        {
            this.context = _context;
        }

        // GET: api/Customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await context.Customers.ToListAsync();
        }




    }
}
