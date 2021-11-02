namespace AutoParts.API.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    using AutoParts.API.Models;

    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AutoPartsDbContext context;

        public OrderController(AutoPartsDbContext _context)
            => this.context = _context;

        // GET: api/Order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderMaster>>> GetOrderMasters()
            => await context.OrderMasters.Include(x => x.Customer).ToListAsync();

        // GET: api/Order/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderMaster>> GetOrderMaster(long id)
        {

            var orderMaster = await context.OrderMasters
                .Where(a => a.OrderMasterId == id)
                .Select(o => new
                {
                    OrderMasterId = o.OrderMasterId,
                    OrderNumber = o.OrderNumber,
                    CustomerId = o.CustomerId,
                    PMethod = o.PMethod,
                    GTotal = o.GTotal,
                    deletedOrderItemIds = "",
                    orderDetails = o.OrderDetails
                }).FirstOrDefaultAsync();


            if (orderMaster == null)
            {
                return NotFound();
            }

            return Ok(orderMaster);
        }

        // PUT: api/Order/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderMaster(long id, OrderMaster orderMaster)
        {
            if (id != orderMaster.OrderMasterId)
            {
                return BadRequest();
            }

            context.Entry(orderMaster).State = EntityState.Modified;

            //existing & newly added 
            foreach (OrderDetail item in orderMaster.OrderDetails)
            {
                if (item.OrderDetailId == 0)
                    context.OrderDetails.Add(item);
                else
                    context.Entry(item).State = EntityState.Modified;
            }

            //deleted auto part items
            foreach (var i in orderMaster.DeletedOrderItemIds.Split(',').Where(x => x != ""))
            {
                OrderDetail y = context.OrderDetails.Find(Convert.ToInt64(i));
                context.OrderDetails.Remove(y);
            }

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderMasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Order
        [HttpPost]
        public async Task<ActionResult<OrderMaster>> PostOrderMaster(OrderMaster orderMaster)
        {
            context.OrderMasters.Add(orderMaster);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetOrderMaster", new { id = orderMaster.OrderMasterId }, orderMaster);
        }

        // DELETE: api/Order/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderMaster(long id)
        {
            var orderMaster = await context.OrderMasters.FindAsync(id);
            if (orderMaster == null)
            {
                return NotFound();
            }

            context.OrderMasters.Remove(orderMaster);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderMasterExists(long id)
            => context.OrderMasters.Any(e => e.OrderMasterId == id);
        




    }
}
