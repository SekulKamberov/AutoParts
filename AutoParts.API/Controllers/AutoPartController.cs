namespace AutoParts.API.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    using AutoParts.API.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class AutoPartController : ControllerBase
    {
        private readonly AutoPartsDbContext context;

        public AutoPartController(AutoPartsDbContext _context) {
            this.context = _context;
        }

        public async Task<ActionResult<IEnumerable<AutoParts.API.Models.AutoPart>>> GetAutoParts()
            => await context.AutoParts.ToListAsync();

    }
}
