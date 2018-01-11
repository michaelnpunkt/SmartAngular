using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vouchers;

namespace VouchersAPI.Common
{
    public class VoucherValidator
    {
        public static bool Validate(Voucher voucher)
        {
            var result = false;

            if (voucher.Details!=null)
            {
                var sum = 0;
                foreach (var vd in voucher.Details)
                {
                    sum += vd.Amount;
                }
                result = sum == voucher.Amount;
            }

            return result;
        }
    }
}
