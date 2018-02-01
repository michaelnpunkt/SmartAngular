using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers
{

    [Route("api/[controller]")]
    public class AccountsController : Controller
  {

    VouchersDBContext ctx;      
    public AccountsController(VouchersDBContext context)
    {
      ctx = context;
    }

    // http://localhost:PORT/api/accounts
    [HttpGet]
    public IEnumerable<BalanceAccount> Get()
    {
        var baccounts = ctx.BalanceAccounts.OrderByDescending(ba => ba.Created).ToList();
        return baccounts;
    }

    // http://localhost:PORT/api/accounts/3
    [HttpGet("{id}")]
    public BalanceAccount Get(int id)
    {
        return ctx.BalanceAccounts.FirstOrDefault(ba => ba.ID == id);
    }

    // http://localhost:PORT/api/accounts --> CREATE
    [HttpPost]
    public void Post([FromBody]BalanceAccount value)
    {
        ctx.BalanceAccounts.Add(value);
        ctx.SaveChanges();
    }

    // http://localhost:PORT/api/accounts   --> UPDATE
    [HttpPut()]
    public void Put([FromBody]BalanceAccount value) //Classic .NET Core WebApi pattern: public void Put(int id, [FromBody]Voucher value)
    {
        ctx.BalanceAccounts.Attach(value);
        ctx.Entry(value).State = EntityState.Modified;
        ctx.SaveChanges();
    }

    // http://localhost:PORT/api/accounts   --> DELETE
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        var ba = Get(id);
        if (ba != null)
        {
            ctx.Remove(ba);
            ctx.SaveChanges();
        }
    }

    }
}